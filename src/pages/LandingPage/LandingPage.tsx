import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { SectionFadeIn } from "./SectionFadeIn";
import { Button } from "@carbon/react";

const messages = [
  "Take control of your financial future.",
  "AI-powered insights tailored to your goals.",
  "Invest smarter, save faster, retire earlier.",
  "Let your money work for you.",
  "Real-time stock analysis at your fingertips.",
];

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {messages.map((text, index) => (
        <SectionFadeIn key={index}>
          <div className="message">{text}</div>
        </SectionFadeIn>
      ))}
      <SectionFadeIn>
        <div className="cta">
          <h2>Ready to begin?</h2>
          <div className="buttons">
            <Button onClick={() => navigate("/login")}>Log In</Button>
            <Button onClick={() => navigate("/register")}>Sign Up</Button>
          </div>
        </div>
      </SectionFadeIn>
    </div>
  );
};
