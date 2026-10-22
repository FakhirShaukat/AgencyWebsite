import React, { useState } from 'react';
import {
  FiArrowUpRight,
  FiMessageSquare,
  FiGlobe,
  FiSmartphone,
  FiMapPin,
  FiShare2,
  FiRefreshCw,
  FiCheck,
  FiMenu,
  FiX
} from 'react-icons/fi';


const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];



export default function Navbar({ contactHref, isExternalContact }) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    < header className="sticky top-0 z-50 bg-[#0D0B0A]/90 backdrop-blur-md border-b border-[#26201C]" >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-20 flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="#top" className="text-2xl font-bold tracking-tight text-white hover:text-[#D4F933] transition-colors flex items-center gap-2">
          Dev.Fakhir<span className="text-[#FF5500] text-3xl leading-none">.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="#about" className="hover:text-[#D4F933] transition-colors">About</a>
          <a href="#services" className="hover:text-[#D4F933] transition-colors">Services</a>
          <a href="#work" className="hover:text-[#D4F933] transition-colors">Work</a>
          <a href="#packages" className="hover:text-[#D4F933] transition-colors">Packages</a>
          <a href="#contact" className="hover:text-[#D4F933] transition-colors">Contact</a>
        </nav>

        {/* CTA Header Button */}
        <div className="hidden md:flex items-center">
          <a
            href={contactHref}
            target={isExternalContact ? "_blank" : undefined}
            rel={isExternalContact ? "noreferrer" : undefined}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#FF5500] text-white hover:bg-[#E64D00] transition-all duration-300 shadow-lg shadow-[#FF5500]/20"
          >
            Book a call
            <FiArrowUpRight className="text-base" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl text-zinc-300 hover:text-white"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {
        mobileMenuOpen && (
          <div className="md:hidden bg-[#120F0D] border-b border-[#26201C] px-6 py-6 space-y-4">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-zinc-300 hover:text-[#D4F933]"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-zinc-300 hover:text-[#D4F933]"
            >
              Services
            </a>
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-zinc-300 hover:text-[#D4F933]"
            >
              Work
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-zinc-300 hover:text-[#D4F933]"
            >
              Packages
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-zinc-300 hover:text-[#D4F933]"
            >
              Contact
            </a>
            <a
              href={contactHref}
              target={isExternalContact ? "_blank" : undefined}
              rel={isExternalContact ? "noreferrer" : undefined}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#FF5500] text-white"
            >
              Book a call
              <FiArrowUpRight className="text-base" />
            </a>
          </div>
        )
      }
    </header >
  );
}
