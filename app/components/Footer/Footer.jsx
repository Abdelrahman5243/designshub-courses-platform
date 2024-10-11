import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
const Footer = () => {
  const footerSections = [
    {
      title: "Courses",
      links: [
        { name: "Beginner Design", url: "#" },
        { name: "Advanced Design", url: "#" },
      ],
    },
    {
      title: "Follow us",
      links: [
        { name: "Instagram", url: "https://instagram.com/" },
        { name: "LinkedIn", url: "https://linkedin.com/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "#" },
        { name: "Terms & Conditions", url: "#" },
      ],
    },
  ];

  return (
    <footer className="py-8 container mx-auto px-4">
      <div className="flex flex-col items-start md:flex-row justify-between gap-16 mb-8">
        <Link href="/" className="flex items-center space-x-3">
          <Image src={logo} className="h-8 w-auto" alt="DesignsHub Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            DesignsHub
          </span>
        </Link>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h2 className="sec-heading text-lg font-semibold mb-4 text-white">
                {section.title}
              </h2>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a
                      href={link.url}
                      className="paragraph hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="paragraph">
          &copy; 2024 DesignsHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
