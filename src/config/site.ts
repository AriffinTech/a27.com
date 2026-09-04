import type { LucideIcon } from "lucide-react";
import { LayoutTemplate, Blocks, MessageCircle, Workflow, Database, Code2 } from "lucide-react";

import { getWhatsAppUrl, whatsAppNumber } from "./contact";

export type NavigationItem = {
  href: string;
  label: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  capabilities: string[];
  icon: LucideIcon;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  whatsAppNumber: string;
  defaultWhatsAppMessage: string;
  navigation: NavigationItem[];
};

export const siteConfig: SiteConfig = {
  name: "A27",
  description: "Websites and tools that help your business serve customers and get daily work done.",
  url: "https://a27.com",
  whatsAppNumber,
  defaultWhatsAppMessage: "Hello A27, I’d like to start a project.",
  navigation: [
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ],
};

export const whatsappUrl = getWhatsAppUrl();

export const services: Service[] = [
  {
    slug: "websites",
    title: "Websites & Integrations",
    summary:
      "Websites that help customers contact you, book, buy, or find the information they need, with the option to connect the tools you already use.",
    capabilities: ["Website pages", "Works well on mobile", "Capture customer enquiries", "Bookings and customer lists"],
    icon: Blocks,
  },
  {
    slug: "whatsapp-automation",
    title: "AI & WhatsApp Automation",
    summary:
      "Help customers get instant answers, automated AI responses, follow-up reminders, and intelligent routing on WhatsApp.",
    capabilities: ["AI automated responses", "Pass complex questions to your team", "Send receipts & updates automatically"],
    icon: MessageCircle,
  },
  {
    slug: "business-automation",
    title: "Workflow Automation",
    summary:
      "Reduce repeated admin by connecting the steps your team already does every day.",
    capabilities: ["Connect the tools you use", "Less copying and data entry", "Send work to the right person"],
    icon: Workflow,
  },
  {
    slug: "internal-systems",
    title: "Team Dashboards",
    summary:
      "Give your team one place to manage orders, customers, stock, and everyday work.",
    capabilities: ["Team dashboards", "Manage orders", "Point-of-sale tools"],
    icon: Database,
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    summary:
      "A tool made around the way your business works when standard software no longer fits.",
    capabilities: ["Connect existing tools", "Built around your daily work"],
    icon: Code2,
  },
];

export const processSteps = [
  {
    title: "01. Tell Us What You Need",
    body: "Client explains the business, problem, website or system they need.",
  },
  {
    title: "02. Agree on the Plan",
    body: "A27 explains what to build, what it needs to do, and what it will cost.",
  },
  {
    title: "03. Confirm the Work",
    body: "Approve the plan, and A27 gets everything ready to begin.",
  },
  {
    title: "04. Build and Check",
    body: "A27 designs, builds, connects the needed tools, and improves the work with you.",
  },
  {
    title: "05. Launch and Show You How It Works",
    body: "After final checks, A27 puts it live and shows you how to use it.",
  },
];

export type Solution = {
  title: string;
  description: string;
  category: string;
  industry: string;
  icons: string[];
  featured?: boolean;
};

export const solutions: Solution[] = [
  // ─── WhatsApp Automation ───────────────────────────────────────────────

  // Clinic & Healthcare
  {
    title: "WhatsApp appointment booking",
    featured: true,
    description: "Lets customers ask about appointments, see available times, and book on WhatsApp.",
    category: "whatsapp-automation",
    industry: "Clinic & Healthcare",
    icons: ["whatsapp", "calendar"],
  },
  {
    title: "24h / 3h reminder sequence",
    description: "Sends appointment reminders and lets customers confirm with one tap.",
    category: "whatsapp-automation",
    industry: "Clinic & Healthcare",
    icons: ["whatsapp", "calendar"],
  },
  {
    title: "No-show recovery",
    description: "Messages customers after a missed appointment and makes it easy to book again.",
    category: "whatsapp-automation",
    industry: "Clinic & Healthcare",
    icons: ["whatsapp"],
  },
  {
    title: "Waitlist auto-fill",
    description: "Offers a newly free appointment time to the next suitable customer.",
    category: "whatsapp-automation",
    industry: "Clinic & Healthcare",
    icons: ["whatsapp", "calendar"],
  },
  {
    title: "Post-visit follow-up",
    description: "Sends medicine reminders and checks in with customers after a visit.",
    category: "whatsapp-automation",
    industry: "Clinic & Healthcare",
    icons: ["whatsapp"],
  },
  {
    title: "Insurance document collector",
    description: "Lets customers send claim documents or photos through WhatsApp.",
    category: "whatsapp-automation",
    industry: "Clinic & Healthcare",
    icons: ["whatsapp", "docs"],
  },
  {
    title: "Intake form pre-filler",
    description: "Collects customer details before they arrive, so the front desk has less to do.",
    category: "whatsapp-automation",
    industry: "Clinic & Healthcare",
    icons: ["whatsapp"],
  },
  {
    title: "Recall campaign for overdue check-ups",
    description: "Reminds customers when it is time for their next check-up.",
    category: "whatsapp-automation",
    industry: "Clinic & Healthcare",
    icons: ["whatsapp"],
  },
  {
    title: "Multi-branch scheduling",
    description: "Manages bookings for several clinic locations in one place.",
    category: "whatsapp-automation",
    industry: "Clinic & Healthcare",
    icons: ["whatsapp", "calendar"],
  },

  // Sales
  {
    title: "Inbound lead qualifier",
    featured: true,
    description: "Sorts new customer enquiries and sends them to the right person in your customer list (CRM).",
    category: "whatsapp-automation",
    industry: "Sales",
    icons: ["whatsapp", "hubspot"],
  },
  {
    title: "WhatsApp quote generator",
    description: "Turns a customer request into a ready-to-send quote.",
    category: "whatsapp-automation",
    industry: "Sales",
    icons: ["whatsapp", "docs"],
  },
  {
    title: "Abandoned cart recovery agent",
    description: "Reminds customers about items left in their cart, with an offer if needed.",
    category: "whatsapp-automation",
    industry: "Sales",
    icons: ["whatsapp", "shopify"],
  },
  {
    title: "Stalled deal nudger",
    description: "Finds quiet sales leads and prepares a message to restart the conversation.",
    category: "whatsapp-automation",
    industry: "Sales",
    icons: ["whatsapp", "hubspot"],
  },
  {
    title: "Post-purchase referral request",
    description: "Asks happy customers for referrals at the right time.",
    category: "whatsapp-automation",
    industry: "Sales",
    icons: ["whatsapp"],
  },

  // Customer Support
  {
    title: "Tier-1 WhatsApp triage",
    featured: true,
    description: "Answers common questions and sends harder ones to your team with the chat history.",
    category: "whatsapp-automation",
    industry: "Customer Support",
    icons: ["whatsapp", "slack"],
  },
  {
    title: "FAQ deflection agent",
    description: "Answers common questions before your team needs to step in.",
    category: "whatsapp-automation",
    industry: "Customer Support",
    icons: ["whatsapp"],
  },
  {
    title: "Complaint sentiment flagger",
    description: "Flags urgent or unhappy customer messages so your team can act quickly.",
    category: "whatsapp-automation",
    industry: "Customer Support",
    icons: ["whatsapp", "slack"],
  },
  {
    title: "Post-service satisfaction check-in",
    description: "Sends a service survey and lets your team know when a customer gives a low score.",
    category: "whatsapp-automation",
    industry: "Customer Support",
    icons: ["whatsapp"],
  },
  {
    title: "Returns & refund handler",
    description: "Guides customers through returns and refunds.",
    category: "whatsapp-automation",
    industry: "Customer Support",
    icons: ["whatsapp"],
  },
  {
    title: "Multi-language responder",
    description: "Replies to customers in the language they prefer.",
    category: "whatsapp-automation",
    industry: "Customer Support",
    icons: ["whatsapp"],
  },
  {
    title: "Order status lookup bot",
    description: "Lets customers check their order status on WhatsApp.",
    category: "whatsapp-automation",
    industry: "Customer Support",
    icons: ["whatsapp", "shopify"],
  },
  {
    title: "Live chat handoff agent",
    description: "Passes the chat to your team with the earlier messages included.",
    category: "whatsapp-automation",
    industry: "Customer Support",
    icons: ["whatsapp", "slack"],
  },

  // E-commerce
  {
    title: "Order confirmation & shipping updates",
    featured: true,
    description: "Sends order confirmations and delivery updates without customers needing to ask.",
    category: "whatsapp-automation",
    industry: "E-commerce",
    icons: ["whatsapp", "shopify"],
  },
  {
    title: "WhatsApp cart recovery",
    description: "Sends a WhatsApp reminder before a customer leaves their cart behind.",
    category: "whatsapp-automation",
    industry: "E-commerce",
    icons: ["whatsapp", "shopify"],
  },
  {
    title: "Product Q&A agent",
    description: "Answers product, size, stock, and delivery questions at any time.",
    category: "whatsapp-automation",
    industry: "E-commerce",
    icons: ["whatsapp"],
  },
  {
    title: "Review request sequencer",
    description: "Asks for a review after an order is delivered.",
    category: "whatsapp-automation",
    industry: "E-commerce",
    icons: ["whatsapp", "gmail"],
  },
  {
    title: "Restock alert subscriber",
    description: "Lets interested customers know as soon as an item is back in stock.",
    category: "whatsapp-automation",
    industry: "E-commerce",
    icons: ["whatsapp"],
  },
  {
    title: "Return & exchange agent",
    description: "Handles return and exchange requests from start to finish.",
    category: "whatsapp-automation",
    industry: "E-commerce",
    icons: ["whatsapp"],
  },

  // F&B & Retail
  {
    title: "Menu ordering bot",
    description: "Lets customers order from a WhatsApp menu and sends the order to your point-of-sale system.",
    category: "whatsapp-automation",
    industry: "F&B & Retail",
    icons: ["whatsapp"],
  },

  // HR & Recruiting
  {
    title: "Interview scheduling coordinator",
    description: "Suggests and confirms interview times with candidates.",
    category: "whatsapp-automation",
    industry: "HR & Recruiting",
    icons: ["whatsapp", "calendar"],
  },
  {
    title: "Reference check follow-up",
    description: "Reminds referees until they reply.",
    category: "whatsapp-automation",
    industry: "HR & Recruiting",
    icons: ["whatsapp"],
  },
  {
    title: "Shift roster reminder",
    description: "Sends staff their weekly schedules and available shift swaps.",
    category: "whatsapp-automation",
    industry: "HR & Recruiting",
    icons: ["whatsapp", "calendar"],
  },
  {
    title: "Payroll query responder",
    description: "Answers common payroll questions, such as payslip requests.",
    category: "whatsapp-automation",
    industry: "HR & Recruiting",
    icons: ["whatsapp"],
  },

  // Operations & Admin
  {
    title: "Delivery status updater",
    description: "Sends customers delivery tracking updates without them needing to ask.",
    category: "whatsapp-automation",
    industry: "Operations & Admin",
    icons: ["whatsapp", "shopify"],
  },

  // Finance & Auditing
  {
    title: "Overdue payment follow-up",
    description: "Sends polite payment reminders at the right time.",
    category: "whatsapp-automation",
    industry: "Finance & Auditing",
    icons: ["whatsapp"],
  },

  // ─── Business Automation ───────────────────────────────────────────────

  // Marketing
  {
    title: "Review reply agent",
    description: "Writes or posts replies to Google and Facebook reviews, and passes unusual cases to your team.",
    category: "business-automation",
    industry: "Marketing",
    icons: ["gmail", "docs"],
  },
  {
    title: "Social content repurposer",
    description: "Turns one voice note into a week of posts for your chosen channels.",
    category: "business-automation",
    industry: "Marketing",
    icons: ["docs"],
  },
  {
    title: "Competitor price & promo watcher",
    description: "Checks competitor pages and tells your team when their prices or promotions change.",
    category: "business-automation",
    industry: "Marketing",
    icons: ["slack", "sheets"],
  },
  {
    title: "Landing page lead-capture chatbot",
    description: "Asks website visitors a few questions and books calls before they leave.",
    category: "business-automation",
    industry: "Marketing",
    icons: ["web", "calendar"],
  },
  {
    title: "Ad creative fatigue detector",
    description: "Spots ads that are slowing down and prepares new words for them.",
    category: "business-automation",
    industry: "Marketing",
    icons: ["sheets", "slack"],
  },
  {
    title: "SEO content outline generator",
    description: "Turns search terms into a clear outline for your writer.",
    category: "business-automation",
    industry: "Marketing",
    icons: ["docs"],
  },
  {
    title: "Event & webinar reminder sequence",
    description: "Sends invitations and reminders, then follows up with people who did not attend.",
    category: "business-automation",
    industry: "Marketing",
    icons: ["gmail", "calendar"],
  },
  {
    title: "Customer win-back trigger",
    description: "Finds past customers who have gone quiet and sends them a personal offer.",
    category: "business-automation",
    industry: "Marketing",
    icons: ["whatsapp", "gmail"],
  },
  {
    title: "Influencer outreach tracker",
    description: "Finds suitable creators, prepares the first message, and tracks replies.",
    category: "business-automation",
    industry: "Marketing",
    icons: ["gmail", "sheets"],
  },

  // Sales
  {
    title: "Meeting notes to CRM",
    description: "Turns sales calls into notes and saves the next steps automatically.",
    category: "business-automation",
    industry: "Sales",
    icons: ["hubspot", "docs"],
  },
  {
    title: "Inbound call summarizer",
    description: "Creates a short call summary and action list for the sales team.",
    category: "business-automation",
    industry: "Sales",
    icons: ["docs", "slack"],
  },
  {
    title: "Upsell suggestion agent",
    description: "Suggests useful add-ons based on what customers usually buy together.",
    category: "business-automation",
    industry: "Sales",
    icons: ["hubspot"],
  },
  {
    title: "Weekly pipeline digest",
    description: "Sends founders a simple weekly summary of active sales leads.",
    category: "business-automation",
    industry: "Sales",
    icons: ["hubspot", "slack"],
  },

  // Operations & Admin
  {
    title: "Cross-timezone meeting scheduler",
    description: "Finds a meeting time that works without long email chains.",
    category: "business-automation",
    industry: "Operations & Admin",
    icons: ["calendar", "gmail"],
  },
  {
    title: "Low-stock reorder trigger",
    featured: true,
    description: "Watches your stock and prepares the next order before you run out.",
    category: "business-automation",
    industry: "Operations & Admin",
    icons: ["sheets", "slack"],
  },
  {
    title: "Staff shift-swap handler",
    description: "Sends shift-swap requests to the right person for approval.",
    category: "business-automation",
    industry: "Operations & Admin",
    icons: ["slack", "calendar"],
  },
  {
    title: "Equipment maintenance reminder",
    description: "Tracks when equipment needs maintenance and prompts the next booking.",
    category: "business-automation",
    industry: "Operations & Admin",
    icons: ["calendar", "slack"],
  },
  {
    title: "Supplier order status tracker",
    description: "Asks suppliers for updates and keeps your team informed.",
    category: "business-automation",
    industry: "Operations & Admin",
    icons: ["gmail", "slack"],
  },
  {
    title: "SOP Q&A chatbot",
    description: "Answers staff questions using your team guides and manuals.",
    category: "business-automation",
    industry: "Operations & Admin",
    icons: ["docs", "slack"],
  },
  {
    title: "Purchase order approval router",
    featured: true,
    description: "Sends purchase requests to the right approver and follows up if they are delayed.",
    category: "business-automation",
    industry: "Operations & Admin",
    icons: ["gmail", "sheets"],
  },
  {
    title: "Meeting-to-task converter",
    description: "Turns meeting recordings into tasks for the right people.",
    category: "business-automation",
    industry: "Operations & Admin",
    icons: ["docs", "slack"],
  },

  // Finance & Auditing
  {
    title: "Invoice OCR & categorizer",
    description: "Reads receipt and invoice photos, then sorts the information for you.",
    category: "business-automation",
    industry: "Finance & Auditing",
    icons: ["docs", "sheets"],
  },
  {
    title: "PDPA data-request responder",
    description: "Records customer data requests and helps your team respond on time.",
    category: "business-automation",
    industry: "Finance & Auditing",
    icons: ["gmail", "docs"],
  },
  {
    title: "Vendor contract renewal tracker",
    description: "Flags contracts before they renew, expire, or lead to surprise charges.",
    category: "business-automation",
    industry: "Finance & Auditing",
    icons: ["calendar", "slack"],
  },
  {
    title: "Monthly reconciliation anomaly flagger",
    description: "Finds financial figures that do not match before you check the accounts.",
    category: "business-automation",
    industry: "Finance & Auditing",
    icons: ["sheets"],
  },
  {
    title: "License & permit expiry tracker",
    description: "Reminds your business about upcoming licence and permit renewals.",
    category: "business-automation",
    industry: "Finance & Auditing",
    icons: ["calendar", "slack"],
  },
  {
    title: "Expense report collector",
    description: "Collects receipt photos and files them into organised expense records.",
    category: "business-automation",
    industry: "Finance & Auditing",
    icons: ["whatsapp", "sheets"],
  },
  {
    title: "Weekly cash-flow summary",
    description: "Sends owners a simple weekly update on money coming in and going out.",
    category: "business-automation",
    industry: "Finance & Auditing",
    icons: ["sheets", "slack"],
  },
  {
    title: "Audit trail summarizer",
    description: "Prepares a clear month-end summary from your transaction records.",
    category: "business-automation",
    industry: "Finance & Auditing",
    icons: ["sheets", "docs"],
  },

  // HR & Recruiting
  {
    title: "Resume screening agent",
    description: "Shortlists job candidates based on the criteria your company sets.",
    category: "business-automation",
    industry: "HR & Recruiting",
    icons: ["gmail", "docs"],
  },
  {
    title: "New hire onboarding checklist",
    description: "Guides new hires through their first-day steps.",
    category: "business-automation",
    industry: "HR & Recruiting",
    icons: ["docs", "slack"],
  },
  {
    title: "Leave request router",
    description: "Sends leave requests to the right person, based on your company policy.",
    category: "business-automation",
    industry: "HR & Recruiting",
    icons: ["slack", "calendar"],
  },
  {
    title: "Staff handbook Q&A agent",
    description: "Answers everyday policy questions from the staff handbook.",
    category: "business-automation",
    industry: "HR & Recruiting",
    icons: ["docs"],
  },
  {
    title: "Exit interview collector",
    description: "Runs the same clear process for collecting exit interviews.",
    category: "business-automation",
    industry: "HR & Recruiting",
    icons: ["gmail", "docs"],
  },

  // E-commerce
  {
    title: "Bundle & cross-sell recommender",
    description: "Suggests products that customers often buy together.",
    category: "business-automation",
    industry: "E-commerce",
    icons: ["shopify"],
  },
  {
    title: "Marketplace listing sync",
    description: "Keeps stock and prices the same across your sales channels.",
    category: "business-automation",
    industry: "E-commerce",
    icons: ["shopify", "sheets"],
  },
  {
    title: "Fraud flag reviewer",
    description: "Flags suspicious orders for your team to check before sending them out.",
    category: "business-automation",
    industry: "E-commerce",
    icons: ["shopify", "slack"],
  },

  // Customer Support
  {
    title: "Ticket backlog summarizer",
    description: "Gives your team a daily view of open, urgent, and overdue support requests.",
    category: "business-automation",
    industry: "Customer Support",
    icons: ["slack", "sheets"],
  },

  // ─── Websites ──────────────────────────────────────────────────────────
  {
    title: "B2B service landing page",
    featured: true,
    description: "A focused website page that helps you collect customer enquiries and send them to the right person.",
    category: "websites",
    industry: "Marketing",
    icons: ["web", "hubspot"],
  },
  {
    title: "Help center & knowledge base",
    description: "A help website where customers can find answers before contacting your team.",
    category: "websites",
    industry: "Customer Support",
    icons: ["web", "docs"],
  },
  {
    title: "Investor relations page",
    description: "A secure website area for financial reports, company updates, and shareholder news.",
    category: "websites",
    industry: "Finance & Auditing",
    icons: ["web", "docs"],
  },

  // ─── Integrated Websites ──────────────────────────────────────────────
  {
    title: "Clinic booking portal",
    description: "A clinic website where customers can book appointments and fill in their details before they arrive.",
    category: "websites",
    industry: "Clinic & Healthcare",
    icons: ["web", "calendar"],
  },
  {
    title: "Real estate listing site",
    description: "A property website where visitors can filter listings and contact the right agent.",
    category: "websites",
    industry: "Sales",
    icons: ["web", "database"],
  },
  {
    title: "Restaurant ordering site",
    description: "A restaurant website where customers can order takeaway or delivery directly, without third-party fees.",
    category: "websites",
    industry: "F&B & Retail",
    icons: ["web", "stripe"],
  },
  {
    title: "E-commerce storefront",
    featured: true,
    description: "An online shop made for a fast, smooth shopping experience.",
    category: "websites",
    industry: "E-commerce",
    icons: ["web", "shopify"],
  },
  {
    title: "Corporate career portal",
    description: "A careers website that shows your company culture and sends job applications to your hiring system.",
    category: "websites",
    industry: "HR & Recruiting",
    icons: ["web", "database"],
  },

  // ─── Internal Systems ─────────────────────────────────────────────────
  {
    title: "Patient management dashboard",
    description: "A tool for clinic staff to view schedules, customer history, and payments in one place.",
    category: "internal-systems",
    industry: "Clinic & Healthcare",
    icons: ["database", "web"],
  },
  {
    title: "Inventory & POS system",
    featured: true,
    description: "One system that keeps shop sales and stock levels in sync.",
    category: "internal-systems",
    industry: "F&B & Retail",
    icons: ["database", "stripe"],
  },
  {
    title: "Employee timesheet portal",
    description: "A secure place for staff to log hours, request leave, and view payslips.",
    category: "internal-systems",
    industry: "HR & Recruiting",
    icons: ["database", "calendar"],
  },
  {
    title: "Order fulfillment tracker",
    description: "A team dashboard for picking, packing, and sending orders from different sales channels.",
    category: "internal-systems",
    industry: "Operations & Admin",
    icons: ["database", "shopify"],
  },
  {
    title: "Expense reconciliation tool",
    description: "A staff tool for uploading receipts and matching them to company card payments.",
    category: "internal-systems",
    industry: "Finance & Auditing",
    icons: ["database", "sheets"],
  },
  {
    title: "Campaign performance tracker",
    description: "One view of your advertising spend and results across different platforms.",
    category: "internal-systems",
    industry: "Marketing",
    icons: ["database", "sheets"],
  },

  // ─── Custom Software ──────────────────────────────────────────────────
  {
    title: "Custom CRM & pipeline",
    featured: true,
    description: "A customer-lead tool made around the way your sales team works, without features you do not need.",
    category: "custom-software",
    industry: "Sales",
    icons: ["database", "slack"],
  },
];
