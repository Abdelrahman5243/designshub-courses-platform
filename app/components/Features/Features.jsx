"use client";
import React, { useEffect, useRef } from "react";
import FeatureCard from "./FeatureCard";
import featuresData from "./featuresData";
import styles from "./styles.module.css";

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(`.${styles.card}`);

    const handleMouseMove = (e) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - 60;
        const y = e.clientY - rect.top - 60;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
        card.style.setProperty("--opacity", `0.2`);
      });
    };

    const handleMouseLeave = () => {
      cards.forEach((card) => {
        card.style.setProperty("--opacity", `0`);
      });
    };

    const container = containerRef.current;

    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      id="features"
      ref={containerRef}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="main-heading text-center">Features</h1>
      <p className="paragraph text-center py-5">
        Find answers to commonly asked questions about our services and
        solutions.
      </p>
      <div className="grid justify-center gap-4 grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
