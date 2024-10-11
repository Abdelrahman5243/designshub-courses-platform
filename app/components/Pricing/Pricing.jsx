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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
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
