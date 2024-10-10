import React from "react";
import PricingCard from "./PricingCard";
import pricingData from "./PricingData";

const Pricing = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="main-heading text-center">Flexible Pricing</h1>
      <p className="paragraph text-center py-5">
        Choose the pricing plan that suits your needs.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-12">
        {pricingData.map((item, index) => (
          <PricingCard
            key={index}
            {...item}
            popular={item.popular ? item.popular : false}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
