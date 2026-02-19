export default function Hero() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <div className="space-y-6">
        {/* Small Intro */}
        <p className="text-sm text-zinc-500 uppercase tracking-widest">
          Full Stack Developer
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-black to-zinc-500 bg-clip-text text-transparent">
            Rishab
          </span>{" "}
          👋
        </h2>

        {/* Description */}
        <p className="text-zinc-600 max-w-2xl leading-7">
          I build scalable full-stack web applications using Next.js,
          TypeScript, PostgreSQL, and modern backend architecture. Passionate
          about clean code, system design, and solving real-world problems.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-6">
          <a
            href="/Rishab_Resume_Final.pdf"
            className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-800 transition"
          >
            Download Resume
          </a>

          <a
            href="mailto:rishabthapliyal04@gmail.com"
            className="border border-zinc-300 px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-100 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
