import { SiVercel, SiNextdotjs, SiSupabase, SiTailwindcss, SiClaude, SiWhatsapp, SiFigma, SiShopify } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";

import { InfiniteSlider } from "@/components/ui/infinite-slider";

const technologies = [
  { name: "WhatsApp", icon: SiWhatsapp },
  { name: "Vercel", icon: SiVercel },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Supabase", icon: SiSupabase },
  { name: "Shopify", icon: SiShopify },
  { name: "Claude", icon: SiClaude },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "OpenAI", icon: RiOpenaiFill },
  { name: "Billplz", icon: FaMoneyBillTransfer },
  { name: "Figma", icon: SiFigma },
];

export function CapabilityMarquee() {
  return (
    <section className="capability-rail" aria-label="A27 technologies">
      <p>Powered by</p>
      <InfiniteSlider duration={30} durationOnHover={75} gap={44} reverse>
        {technologies.map((tech) => {
          const Icon = tech.icon;
          return (
            <span className="capability-rail__item flex items-center gap-2" key={tech.name}>
              <Icon size={18} className="opacity-70" />
              {tech.name}
            </span>
          );
        })}
      </InfiniteSlider>
    </section>
  );
}
