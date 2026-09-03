import { FAQSection } from "@/components/ui/faq-section";

export function Faq() {
  const faqsLeft = [
    {
      question: "How much does a project cost?",
      answer: "Simple websites have a fixed starting price. For custom systems, AI automation, or integrations, we provide a detailed quote based on your exact needs."
    },
    {
      question: "How long does it take?",
      answer: "Standard websites are delivered quickly. Custom systems and tool integrations require more time for building and testing. We always provide clear timelines upfront."
    },
    {
      question: "Do I need to pay everything upfront?",
      answer: "No. We typically start with a 50% deposit, and the remaining balance is paid upon project completion."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer optional maintenance packages to ensure your websites and automated systems stay updated, secure, and running smoothly."
    },
    {
      question: "What happens if I need changes?",
      answer: "You will have dedicated review rounds during the project to request and finalize changes before anything goes live."
    }
  ];

  const faqsRight = [
    {
      question: "What technologies do you use?",
      answer: "We build using modern, scalable tech like Next.js, React, Supabase, Vercel, OpenAI, and Claude, depending on your project's specific requirements."
    },
    {
      question: "I already have a website. Can you add AI or automation to it?",
      answer: "Yes. We can integrate AI tools, WhatsApp bots, and custom automations into your existing setup without needing to rebuild everything from scratch."
    },
    {
      question: "Who owns the code and the final product?",
      answer: "You do. Upon final payment, full ownership and intellectual property rights of the custom systems we build are transferred to you."
    },
    {
      question: "Do I have to pay monthly?",
      answer: "Not always. Standard websites just require yearly domain/hosting fees. Systems using AI, databases, or WhatsApp may incur monthly third-party costs, which we transparently outline beforehand."
    }
  ];

  return (
    <FAQSection
      faqsLeft={faqsLeft}
      faqsRight={faqsRight}
      className="py-0 md:py-0"
    />
  );
}
