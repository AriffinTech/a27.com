export const projectTypeOptions = [
  { value: "website", label: "New website or redesign" },
  { value: "whatsapp-automation", label: "Automating WhatsApp & customer enquiries" },
  { value: "business-automation", label: "Connecting tools & business workflows" },
  { value: "custom-system", label: "Building a custom dashboard or system" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export type ProjectType = typeof projectTypeOptions[number]["value"];

export const projectTypeLabels = Object.fromEntries(
  projectTypeOptions.map((option) => [option.value, option.label]),
) as Record<ProjectType, string>;

export function isProjectType(value: unknown): value is ProjectType {
  return typeof value === "string" && projectTypeOptions.some((option) => option.value === value);
}

export const pricingInterestLabels = {
  "website-starter": "Website Starter",
  "connected-website": "Website + Connected Tools",
  "custom-tools": "Custom Tools & Automation",
} as const;

export type PricingInterest = keyof typeof pricingInterestLabels;

export function isPricingInterest(value: unknown): value is PricingInterest {
  return typeof value === "string" && value in pricingInterestLabels;
}

