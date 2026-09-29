import { isPricingInterest, isProjectType, projectTypeLabels, type ProjectType } from "@/config/project-enquiries";

type ProjectEnquiry = {
  company: string;
  email: string;
  projectType: string;
  message: string;
  officeLocation: string;
  interest?: string;
};

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    "\"": "&quot;",
  })[character] ?? character);
}

function formatEmail(enquiry: ProjectEnquiry) {
  const rows = [
    ["Business", enquiry.company],
    ["Email", enquiry.email],
    ["What needs attention", projectTypeLabels[enquiry.projectType as ProjectType] ?? enquiry.projectType],
    ["Package interest", enquiry.interest],
  ].filter(([, value]) => value);

  const textBody = [
    "New A27 project enquiry",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Project details:",
    enquiry.message,
  ].join("\n");

  const htmlBody = `
    <h1>New A27 project enquiry</h1>
    <table>${rows.map(([label, value]) => `<tr><th align="left">${escapeHtml(label ?? "")}</th><td>${escapeHtml(value ?? "")}</td></tr>`).join("")}</table>
    <h2>Project details</h2>
    <p>${escapeHtml(enquiry.message).replace(/\n/g, "<br />")}</p>
  `;

  return { htmlBody, textBody };
}

export async function POST(request: Request) {
  let input: Record<string, unknown>;

  try {
    input = await request.json();
  } catch {
    return Response.json({ message: "Please complete the form and try again." }, { status: 400 });
  }

  const enquiry: ProjectEnquiry = {
    company: text(input.company, 160),
    email: text(input.email, 254).toLowerCase(),
    projectType: text(input.projectType, 100),
    message: text(input.message, 4000),
    officeLocation: text(input.officeLocation, 160),
    interest: text(input.interest, 40),
  };

  if (enquiry.officeLocation) {
    return Response.json({ ok: true });
  }

  if (!enquiry.company || !/^\S+@\S+\.\S+$/.test(enquiry.email) || !isProjectType(enquiry.projectType) || !enquiry.message) {
    return Response.json({ message: "Please complete the required fields and try again." }, { status: 400 });
  }

  if (enquiry.interest && !isPricingInterest(enquiry.interest)) {
    return Response.json({ message: "Please choose a valid package and try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const recipient = process.env.PROJECT_ENQUIRIES_TO;

  if (!apiKey || !from || !recipient) {
    console.error("Project enquiry email is not configured.");
    return Response.json({ message: "The enquiry form is temporarily unavailable. Please try again later." }, { status: 503 });
  }

  const { htmlBody, textBody } = formatEmail(enquiry);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "A27-Website/1.0",
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      reply_to: enquiry.email,
      subject: `New project enquiry: ${projectTypeLabels[enquiry.projectType as ProjectType]}`,
      text: textBody,
      html: htmlBody,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    console.error("Project enquiry email delivery failed.", response.status);
    return Response.json({ message: "Your message could not be sent. Please try again." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
