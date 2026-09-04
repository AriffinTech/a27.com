export type CaseStudyImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type CaseStudyBase = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  deliverables: readonly string[];
  confidentiality: "public" | "private";
  businessNeed?: string;
  whatBuilt?: string;
  whatItEnables?: string;
};

export type PublishedCaseStudy = CaseStudyBase & {
  status: "published";
  image: CaseStudyImage;
  liveUrl?: string;
};

export type DraftCaseStudy = CaseStudyBase & {
  status: "draft";
  image?: CaseStudyImage;
  liveUrl?: never;
};

export type CaseStudy = PublishedCaseStudy | DraftCaseStudy;

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "wisp-of-petals",
    title: "Wisp of Petals",
    category: "Commerce website",
    summary: "A flower website where customers can browse by occasion, view individual bouquets, and place an order on WhatsApp.",
    deliverables: ["Product list", "Browse by occasion", "Bouquet enquiries", "WhatsApp ordering"],
    businessNeed: "A flower business needed a simple way for customers to browse bouquets and enquire.",
    whatBuilt: "A commerce website with occasion browsing, product pages, bouquet enquiries, and WhatsApp ordering.",
    whatItEnables: "Customers can find a suitable bouquet and send an order enquiry directly.",
    confidentiality: "public",
    status: "published",
    image: {
      src: "/case-studies/wisp-of-petals.png",
      alt: "Wisp of Petals bouquet commerce website homepage",
      width: 1440,
      height: 900,
    },
    liveUrl: "https://wispofpetals.vercel.app",
  },
  {
    slug: "hydro-speed",
    title: "Hydro Speed",
    category: "Industrial services website",
    summary: "A clear website for industrial cleaning, corrosion protection, plant maintenance, equipment information, and direct enquiries.",
    deliverables: ["Service pages", "Equipment information", "Company information", "Ways to enquire"],
    businessNeed: "An industrial services company needed a clear place to explain its services and equipment.",
    whatBuilt: "A services website covering cleaning, corrosion protection, plant maintenance, equipment, and enquiries.",
    whatItEnables: "Visitors can understand the services and choose a direct way to enquire.",
    confidentiality: "public",
    status: "published",
    image: {
      src: "/case-studies/hydro-speed.png",
      alt: "Hydro Speed industrial cleaning services website homepage",
      width: 1440,
      height: 900,
    },
    liveUrl: "https://hydro-speed.vercel.app/",
  },
  {
    slug: "rasengan-trader",
    title: "RasenganTrader",
    category: "Education website and registration",
    summary: "A Malay-language website for True SMC trading education, courses, coaching, student feedback, and registration.",
    deliverables: ["Course information", "Offer pages", "Student feedback", "Registration pages"],
    businessNeed: "A trading education business needed one place for courses, coaching, student proof, and registration.",
    whatBuilt: "A Malay-language education website with course information, coaching offers, student feedback, registration, and account-opening routes.",
    whatItEnables: "Visitors can review the offers and follow the appropriate registration route.",
    confidentiality: "public",
    status: "published",
    image: {
      src: "/case-studies/rasengan-trader.png",
      alt: "RasenganTrader trading education website homepage",
      width: 1440,
      height: 900,
    },
    liveUrl: "https://rasengan-trader.vercel.app/",
  },
  {
    slug: "private-operations-system",
    title: "Private operations system",
    category: "Admin system and automation",
    summary: "Project details and imagery will be added before publication.",
    deliverables: [],
    confidentiality: "private",
    status: "draft",
  },
];

export function isPublishedCaseStudy(caseStudy: CaseStudy): caseStudy is PublishedCaseStudy {
  return caseStudy.status === "published";
}
