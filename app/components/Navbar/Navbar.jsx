"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavList from "./NavList";
import { AlignJustify, X } from "lucide-react";
import logo from "@/public/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Features", href: "/#features" },
    { name: "Projects", href: "/projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur bg-[#1e1024] bg-opacity-50"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 py-5 mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image src={logo} className="h-8 w-auto" alt="DesignsHub Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            DesignsHub
          </span>
        </Link>

        <div className="flex md:order-2 items-center">
          <button type="button" className="btn hidden md:flex mr-3">
            Get started
          </button>
          <button
            type="button"
            onClick={handleMenuToggle}
            className="flex md:hidden items-center text-white"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">open menu</span>
            {isMenuOpen ? <X /> : <AlignJustify />}
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <NavList items={navItems} closeMenu={handleLinkClick} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
