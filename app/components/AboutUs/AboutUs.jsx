import React from "react";
import Image from "next/image";
import { Zap, TrendingUp } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 h-96">
          <Image
            src="/images/img3.webp"
            alt="Graphic Design Course"
            width={500}
            height={300}
            className="rounded-lg object-cover overflow-hidden w-full h-full"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="main-heading mb-4">
            Unlock Your Creativity with Our Graphic Design Courses
          </h2>
          <p className="paragraph">
            We specialize in providing professional graphic design courses that
            empower individuals to unleash their creative potential.
          </p>
          <div>
            <h3 className="sec-heading my-2 flex items-center">
              <div className="bg-secBg p-2 rounded-full mr-3">
                <Zap size={20} />
              </div>
              Enhance Skills
            </h3>
            <p className="paragraph">
              Leverage our courses to develop your design skills and create
              stunning visuals.
            </p>
          </div>
          <div>
            <h3 className="sec-heading my-2 flex items-center">
              <div className="bg-secBg p-2 rounded-full mr-3">
                <TrendingUp size={20} />
              </div>
              Build a Portfolio
            </h3>
            <p className="paragraph">
              Our programs are designed to help you build an impressive
              portfolio that showcases your talent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
