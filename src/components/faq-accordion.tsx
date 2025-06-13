import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQAccordion() {
  const faqs = [
    {
      question: "How accurate are the AI stock predictions?",
      answer:
        "Our AI analyzes vast amounts of market data, news, and historical trends to provide insights with high accuracy rates. However, all investments carry risk, and our AI assistant should be used as a tool to inform your decisions, not replace your judgment.",
    },
    {
      question: "Can I track stocks from international markets?",
      answer:
        "Yes, our platform supports tracking stocks from major international markets including NYSE, NASDAQ, LSE, TSE, and many others across Asia, Europe, and the Americas.",
    },
    {
      question: "How often is the market data updated?",
      answer:
        "Our platform provides real-time market data with updates as frequently as every minute for Pro and Enterprise plans. Basic plans receive updates with a 15-minute delay.",
    },
    {
      question: "Can I connect my brokerage account?",
      answer:
        "Yes, our platform integrates with most major brokerages, allowing you to view your portfolio and execute trades directly through our interface (available on Pro and Enterprise plans).",
    },
    {
      question: "What happens after my free trial ends?",
      answer:
        "After your 14-day free trial, you'll be prompted to select a subscription plan to continue using the service. We won't automatically charge you - you'll need to explicitly choose a plan.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-slate-600">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
