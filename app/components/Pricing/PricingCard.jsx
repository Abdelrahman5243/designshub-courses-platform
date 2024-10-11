import React from "react";
import styles from "./styles.module.css";
import { CheckIcon, XIcon } from "lucide-react";

const PricingCard = ({ title, subtitle, price, features, popular }) => {
  return (
    <div
      className={`bg-secBg rounded-xl border border-border 
    p-8 px-6 w-full space-y-6 ${styles.card}`}
    >
      <h2 className="sec-heading text-2xl flex items-center gap-3">
        {title}
        {popular && (
          <span className="text-sm p-1 px-3 rounded-full bg-[#6900ff] text-white font-semibold flex items-center">
            popular
          </span>
        )}
      </h2>
      <p className="paragraph font-medium text-base">{subtitle}</p>
      <p className="paragraph flex items-center">
        $<span className="text-3xl mx-1 font-bold">{price}</span>
        /m
      </p>
      <button
        className={`py-3 text-center rounded-xl border border-border w-full paragraph 
          ${popular ? "bg-[#6900ff] text-white" : "bg-secBg"} ${styles.button}`}
      >
        Select plan
      </button>

      <ul className="list-inside mt-6 space-y-4">
        {features.map((item, index) => (
          <li key={index} className="flex items-center gap-2 paragraph">
            {item.isAllowed ? <CheckIcon /> : <XIcon />}
            {item.feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
