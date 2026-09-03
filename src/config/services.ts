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
  { title: "Tell us what you need", body: "Tell us what is not working well and what you want to improve." },
  { title: "Agree on the plan", body: "We explain what to build, what it needs to do, and what it will cost." },
  { title: "Confirm the work", body: "Approve the plan, and we will get everything ready to begin." },
  { title: "Build and check", body: "We design, build, connect your tools, and improve the work with you." },
  { title: "Launch and show you how it works", body: "After final checks, we put it live and show you how to use it." },
];
