"use client";
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import questionsData from "./questionsData";

const Faqs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const answerRefs = useRef([]);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  useEffect(() => {
    answerRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.height =
          openQuestion === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openQuestion]);

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="main-heading text-center">FAQs</h1>
      <p className="paragraph text-center py-5">
        Find answers to commonly asked questionsData about our services and
        solutions.
      </p>
      {questionsData.map((item, index) => (
        <div
          className="p-4 my-8 w-4/5 mx-auto bg-secBg rounded-xl border border-border cursor-pointer"
          key={index}
          onClick={() => toggleQuestion(index)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && toggleQuestion(index)}
        >
          <h1 className="sec-heading flex justify-between items-center">
            {item.question}
            <div
              className={`text-secText transition-transform duration-300 transform ${
                openQuestion === index ? "" : "rotate-45"
              }`}
            >
              <X />
            </div>
          </h1>
          <div
            ref={(el) => (answerRefs.current[index] = el)}
            className="overflow-hidden transition-height duration-300"
          >
            <p className="paragraph mt-5">{item.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Faqs;
