const pricingData = [
  {
    title: "Free",
    subtitle: "Ideal for those who want to explore",
    price: "0.00",
    features: [
      { feature: "Access to basic design lessons", isAllowed: true },
      { feature: "Intro to essential design tools", isAllowed: true },
      { feature: "One project to build your portfolio", isAllowed: true },
      { feature: "Access to the online community", isAllowed: false },
      { feature: "Certificate of completion included", isAllowed: false },
    ],
  },
  {
    title: "Starter",
    subtitle: "Perfect for beginner-level designers",
    price: "19.99",
    popular: true,
    features: [
      { feature: "Access to basic design lessons", isAllowed: true },
      { feature: "Intro to essential design tools", isAllowed: true },
      { feature: "One project to build your portfolio", isAllowed: true },
      { feature: "Access to the online community", isAllowed: true },
      { feature: "Certificate of completion included", isAllowed: false },
    ],
  },
  {
    title: "Pro",
    subtitle: "Perfect for professionals and experts",
    price: "29.99",
    features: [
      { feature: "Access to basic design lessons", isAllowed: true },
      { feature: "Intro to essential design tools", isAllowed: true },
      { feature: "One project to build your portfolio", isAllowed: true },
      { feature: "Access to the online community", isAllowed: true },
      { feature: "Certificate of completion included", isAllowed: true },
    ],
  },
];

export default pricingData;
