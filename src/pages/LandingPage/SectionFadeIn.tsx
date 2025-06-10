import React, { useRef, useState, useEffect } from "react";
import "./styles.scss";

interface Props {
  children: React.ReactNode;
}

export const SectionFadeIn = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={`fade-in-section ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};
