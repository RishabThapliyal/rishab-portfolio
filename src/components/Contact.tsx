export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#0a0a0a] py-28 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-28 bg-linear-to-t from-amber-400/20 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">
            05 /
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white tracking-tight">
            Contact
          </h2>
          <span className="flex-1 h-px bg-[#1a1a1a] ml-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-6">
              Let's build something{" "}
              <span className="text-amber-400">exceptional</span> together.
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-8 max-w-sm">
              I'm open to full-time roles, internships, and interesting
              collaborations. Whether it's a product idea or a job opportunity —
              my inbox is open.
            </p>
            <a
              href="mailto:rishabthapliyal04@gmail.com"
              className="group inline-flex items-center gap-3 bg-amber-400 text-black px-8 py-4 font-mono text-sm font-bold tracking-widest uppercase hover:bg-amber-300 transition-colors"
            >
              Send a Message
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>

          {/* Right — links */}
          <div className="space-y-0">
            {[
              {
                label: "Email",
                value: "rishabthapliyal04@gmail.com",
                href: "mailto:rishabthapliyal04@gmail.com",
              },
              {
                label: "LinkedIn",
                value: "rishab-thapliyal",
                href: "https://www.linkedin.com/in/rishab-thapliyal-b72514221/",
              },
              {
                label: "GitHub",
                value: "RishabThapliyal",
                href: "https://github.com/RishabThapliyal",
              },
              {
                label: "Phone",
                value: "+91 9119094811",
                href: "tel:+919119094811",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 border-b border-[#1a1a1a] hover:border-amber-400/30 transition-colors"
              >
                <span className="font-mono text-xs text-zinc-600 tracking-widest uppercase w-24">
                  {item.label}
                </span>
                <span className="text-zinc-300 group-hover:text-amber-400 transition-colors text-sm font-medium">
                  {item.value}
                </span>
                <span className="font-mono text-zinc-700 group-hover:text-amber-400 transition-colors group-hover:translate-x-1 duration-200">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-zinc-700 tracking-widest">
            © 2026 Rishab Thapliyal
          </span>
          <span className="font-mono text-xs text-zinc-700 tracking-widest">
            Built with Next.js & Tailwind CSS
          </span>
        </div>
      </div>
    </section>
  );
}
