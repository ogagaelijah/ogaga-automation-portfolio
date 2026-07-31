"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function NavbarV2() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Technologies", href: "#technologies" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <a href="#home" className="flex items-center gap-4">

          <Image
            src="/images/branding/oe-logo.png"
            alt="Ogaga Elijah Logo"
            width={50}
            height={50}
            priority
            className="rounded-xl"
          />

          <div>

            <h2 className="text-lg font-bold text-white">
              Ogaga Elijah
            </h2>

            <p className="text-sm text-blue-300">
              AI Automation Specialist
            </p>

          </div>

        </a>

        {/* Desktop Menu */}

        <div className="hidden items-center gap-8 md:flex">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-gray-300 transition duration-300 hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* CTA */}

        <div className="hidden md:block">

          <a
            href="#contact"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
          >
            Book a Call
          </a>

        </div>

        {/* Mobile Button */}

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </nav>

      {/* Mobile Menu */}

      {isOpen && (

        <div className="border-t border-white/10 bg-[#08111f] md:hidden">

          <div className="flex flex-col px-6 py-6">

            {links.map((link) => (

              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-4 text-lg text-gray-300 transition hover:text-blue-400"
              >
                {link.name}
              </a>

            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 rounded-xl bg-blue-600 px-5 py-4 text-center font-semibold text-white"
            >
              Book a Call
            </a>

          </div>

        </div>

      )}

    </header>
  );
}