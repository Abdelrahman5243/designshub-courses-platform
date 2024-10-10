import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Features from "./components/Features/Features";
import Projects from "./components/Projects/Projects";
import Pricing from "./components/Pricing/Pricing";
import Faqs from "./components/Faqs/Faqs";
import Cta from "./components/Cta/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Features />
      <Projects />
      <Pricing />
      <Faqs />
      <Cta />
    </>
  );
}
