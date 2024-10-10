"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavList from "./NavList";
import { AlignJustify, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav className="fixed bg-mainBg w-full z-20 top-0 start-0">
      <div className="container px-4 py-5 mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo.png"
            className="h-8"
            alt="Flowbite Logo"
            width="30"
            height="30"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            DesignsHub
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 items-center">
          <button type="button" className="btn hidden sm:flex">
            Get started
          </button>
          <button
            type="button"
            onClick={handleMenuToggle}
            className="flex md:hidden items-center text-white"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
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
