"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Education", "Projects", "Skills", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1a1a1a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href="#about"
          className="font-mono text-sm text-amber-400 tracking-widest uppercase hover:text-amber-300 transition-colors"
        >
          RT<span className="text-zinc-600">_dev</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-xs text-zinc-400 hover:text-amber-400 transition-colors tracking-widest uppercase"
            >
              {link}
            </a>
          ))}
          <a
            href="/Rishab_Resume_Final.pdf"
            className="font-mono text-xs bg-amber-400 text-black px-4 py-2 hover:bg-amber-300 transition-colors tracking-widest uppercase font-bold"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-zinc-400 hover:text-amber-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-6 h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#1a1a1a] px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs text-zinc-400 hover:text-amber-400 transition-colors tracking-widest uppercase"
            >
              {link}
            </a>
          ))}
          <a
            href="/Rishab_Resume_Final.pdf"
            className="font-mono text-xs bg-amber-400 text-black px-4 py-2 hover:bg-amber-300 transition-colors tracking-widest uppercase font-bold w-fit"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
