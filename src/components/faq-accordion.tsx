import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";

export const FAQAccordion = () => {
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
  ];

  return (
    <>
      {faqs.map((faq, index) => (
        <Accordion key={index} className="w-full">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>{faq.answer}</AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
