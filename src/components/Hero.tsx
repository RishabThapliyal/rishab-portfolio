"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Staggered fade-in
    const children = el.querySelectorAll(".reveal");
    children.forEach((child, i) => {
      (child as HTMLElement).style.animationDelay = `${i * 0.12}s`;
      (child as HTMLElement).style.animationFillMode = "both";
    });
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Amber glow blob */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #f59e0b, transparent 70%)",
        }}
      />

      {/* Large decorative number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-mono text-[20vw] font-black text-white/[0.02] select-none pointer-events-none leading-none">
        01
      </div>

      <div
        ref={containerRef}
        className="relative max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-20 w-full"
      >
        {/* Status badge */}
        <div className="reveal animate-fadeUp inline-flex items-center gap-2 mb-8 border border-amber-400/30 px-4 py-2 bg-amber-400/5">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="reveal animate-fadeUp font-display text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight text-white mb-4">
          <span className="hero-name" data-text="Rishab">
            Rishab
          </span>
          <br />
          <span className="hero-ghost">Thapliyal</span>
        </h1>

        {/* Role */}
        <div className="reveal animate-fadeUp flex items-center gap-4 my-8">
          <span className="h-px w-12 bg-amber-400" />
          <span className="role-badge font-mono text-sm text-amber-400 tracking-widest uppercase border border-amber-400/20 px-3 py-1">
            Full Stack Developer
          </span>
        </div>

        {/* Description */}
        <p className="reveal animate-fadeUp text-zinc-400 text-lg max-w-xl leading-relaxed mb-12">
          I architect and build scalable web systems with{" "}
          <span className="text-white font-medium">
            Next.js, TypeScript & PostgreSQL
          </span>
          . From immutable data architectures to AI-powered features — I solve
          hard problems cleanly.
        </p>

        {/* CTA row */}
        <div className="reveal animate-fadeUp flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="btn-primary group flex items-center gap-3 bg-amber-400 text-black px-7 py-3.5 font-mono text-sm font-bold tracking-widest uppercase hover:bg-amber-300 transition-colors"
          >
            View Work
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href="mailto:rishabthapliyal04@gmail.com"
            className="flex items-center gap-3 border border-zinc-700 text-zinc-300 px-7 py-3.5 font-mono text-sm tracking-widest uppercase hover:border-amber-400 hover:text-amber-400 transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="reveal animate-fadeUp flex items-center gap-6 mt-14 pt-8 border-t border-[#1a1a1a]">
          {[
            { label: "GitHub", href: "https://github.com/rishabthapliyal" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/rishab-thapliyal-b72514221/",
            },
            { label: "LeetCode", href: "https://leetcode.com/u/Rishabth_/" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link font-mono text-xs text-zinc-500 hover:text-amber-400 transition-colors tracking-widest uppercase"
            >
              {s.label}
            </a>
          ))}

          <div className="ml-auto font-mono text-xs text-zinc-700 tracking-widest">
            Dehradun, India
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-linear-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  );
}
