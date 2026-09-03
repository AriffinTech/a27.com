import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "A27 — Product engineering",
    template: "%s — A27",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: siteConfig.url,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: "A27 — Product engineering",
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "oklch(98.5% 0.004 250)",
  width: "device-width",
  initialScale: 1,
};

import { WhatsAppButton } from "@/components/site/whatsapp-button";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
