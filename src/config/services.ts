import type { LucideIcon } from "lucide-react";
import { Blocks, Code2, Database, MessageCircle, Workflow } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  capabilities: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  { slug: "websites", title: "Websites & Integrations", summary: "Websites that help customers contact you, book, buy, or find the information they need, with the option to connect the tools you already use.", capabilities: ["Website pages", "Works well on mobile", "Capture customer enquiries", "Bookings and customer lists"], icon: Blocks },
  { slug: "whatsapp-automation", title: "AI & WhatsApp Automation", summary: "Help customers get instant answers, automated AI responses, follow-up reminders, and intelligent routing on WhatsApp.", capabilities: ["AI automated responses", "Pass complex questions to your team", "Send receipts & updates automatically"], icon: MessageCircle },
  { slug: "business-automation", title: "Workflow Automation", summary: "Reduce repeated admin by connecting the steps your team already does every day.", capabilities: ["Connect the tools you use", "Less copying and data entry", "Send work to the right person"], icon: Workflow },
  { slug: "internal-systems", title: "Team Dashboards", summary: "Give your team one place to manage orders, customers, stock, and everyday work.", capabilities: ["Team dashboards", "Manage orders", "Point-of-sale tools"], icon: Database },
  { slug: "custom-software", title: "Custom Software", summary: "A tool made around the way your business works when standard software no longer fits.", capabilities: ["Connect existing tools", "Built around your daily work"], icon: Code2 },
];

export const processSteps = [
  { title: "Share the details", body: "Tell us what needs to work better." },
  { title: "Shape what we’ll build", body: "We turn your message into a clear recommendation, requirements, and proposal." },
  { title: "Confirm the direction", body: "Approve the plan, then we prepare the work for delivery." },
  { title: "Build and review", body: "We design, develop, connect, and refine the work with you." },
  { title: "Launch and show you how it works", body: "After final checks, we deploy and show you how to use the completed work." },
];
