import Image from "next/image";
import { MoveRight } from "lucide-react";
import image3 from "@/public/images/img3.webp";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-between gap-8 flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <h1 className="main-heading">Start Your Creative Journey!</h1>
        <p className="paragraph mt-4">
          Join our professional graphic design courses where we provide you with
          the skills and knowledge to turn your ideas into stunning designs.
          Whether you&apos;re a beginner or a pro, we have something for
          everyone!
        </p>
        <div className="flex flex-wrap gap-4 items-center mt-6">
          <button className="btn">Get started</button>
          <button className="sec-btn transition-all duration-300 group">
            Explore Features
            <MoveRight className="mt-1 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden h-96">
        <Image
          alt="graphic design"
          src={image3}
          sizes="100vw"
          className="w-full h-full object-cover"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default Hero;
