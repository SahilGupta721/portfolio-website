"use client";
import Link from "next/link";
import { useState } from "react";
// import { event } from "../lib/analytics";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  // const handleScroll = (id) => {
  //   setMenuOpen(false);
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //     // event({
  //     //   action: "nav_click",
  //     //   category: "Navbar",
  //     //   label: `Scrolled to ${id} section`,
  //     // });
  //   }
  // };

  const handleScroll = (id) => {
    setMenuOpen(false);
    const section = document.getElementById(id);
    const navbar = document.querySelector("header");
    if (section) {
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full overflow-x-clip bg-transparent py-2">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="mx-auto my-2 flex w-full min-w-0 max-w-[1280px] items-center justify-between gap-4 rounded-full border border-gray-200 bg-white/90 px-4 py-[0.85rem] shadow-sm backdrop-blur-[12px]">
          {/* Logo */}
          <Link className="flex min-w-0 shrink items-center gap-3 no-underline" href="/">
            <svg
              className="h-7 w-7 text-[#e07b5b] transition-transform duration-300 hover:scale-110"
              viewBox="0 0 48 48" aria-hidden="true">
              <path d="M24 4H42V30.6667H24V44H6V17.3333H24V4Z"></path>
            </svg>
            <span className="truncate text-[1.1rem] font-bold leading-none tracking-[-0.02em] text-gray-900">
              Sahil Gupta
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden min-w-0 flex-1 justify-center md:flex">
            <div className="flex gap-6 lg:gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  className="cursor-pointer text-[0.9rem] font-semibold text-gray-700 no-underline transition-colors duration-200 ease-in-out hover:text-[#e07b5b]"
                  onClick={() => handleScroll(link.id)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Hamburger Button (mobile only) */}
          <button
            className="flex md:hidden items-center justify-center w-9 h-9 rounded-full border border-gray-200 bg-white text-gray-700 hover:text-[#e07b5b] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              // X icon
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mx-auto mt-2 w-full max-w-[1280px] rounded-2xl border border-gray-200 bg-white/95 shadow-md backdrop-blur-[12px] px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                className="cursor-pointer rounded-xl px-4 py-3 text-[0.95rem] font-semibold text-gray-700 no-underline transition-colors duration-200 hover:bg-orange-50 hover:text-[#e07b5b]"
                onClick={() => handleScroll(link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}