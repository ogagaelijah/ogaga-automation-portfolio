"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Technologies", href: "#technologies" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08111f]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <a href="#" className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
            OG
          </div>

          <div>
            <h2 className="font-bold text-white">
              Ogaga Elijah
            </h2>

            <p className="text-sm text-blue-300">
              AI Automation Specialist & Consultant
            </p>
          </div>

        </a>

        <div className="hidden items-center gap-8 md:flex">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 transition hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}

        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Book a Discovery Call
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </nav>

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
              className="mt-4 rounded-xl bg-blue-600 px-5 py-4 text-center font-semibold text-white"
            >
              Book a Discovery Call
            </a>

          </div>

        </div>
      )}

    </header>
  );
}