import Image from "next/image";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-between gap-8 flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <h1 className="main-heading">Start Your Creative Journey!</h1>
        <p className="paragraph mt-4">
          Join our professional graphic design courses where we provide you with
          the skills and knowledge to turn your ideas into stunning designs.
          Whether you're a beginner or a pro, we have something for everyone!
        </p>
        <div className="flex flex-wrap gap-4 items-center mt-6">
          <button className="btn">Get started</button>
          <button className="sec-btn transition-colors duration-300 ease-in-out">
            Explore Features
            <MoveRight className="mt-1" />
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 mb-8 md:mb-0 h-96">
        <Image
          src="/images/img6.webp"
          alt="Graphic Design Course"
          width={500}
          height={300}
          className="rounded-lg object-cover overflow-hidden w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;