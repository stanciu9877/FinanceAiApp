import Button from "@mui/material/Button";
import { CheckCircle } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  popular = false,
}: PricingCardProps) => {
  return (
    <div
      className={`
      bg-white rounded-lg shadow-sm border 
      ${
        popular
          ? "border-emerald-500 ring-2 ring-emerald-500 ring-opacity-20"
          : "border-slate-200"
      } 
      p-8 relative
    `}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-slate-500">{period}</span>
      </div>
      <p className="text-slate-600 mb-6">{description}</p>
      <Button
        className={`w-full mb-6 ${
          popular ? "bg-emerald-500 hover:bg-emerald-600" : ""
        }`}
        variant={popular ? "text" : "outlined"}
      >
        {buttonText}
      </Button>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
            <span className="text-slate-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
