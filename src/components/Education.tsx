export default function Education() {
  const items = [
    {
      degree: "B.Tech — Computer Science & Engineering",
      school: "Graphic Era Hill University",
      location: "Dehradun",
      year: "2021 – 2025",
      score: "CGPA: 8.15 / 10",
    },
    {
      degree: "Intermediate (12th CBSE)",
      school: "Shri Guru Ram Rai Public School",
      location: "Dehradun",
      year: "2021",
      score: "86.5%",
    },
    {
      degree: "Matriculation (10th CBSE)",
      school: "Shri Guru Ram Rai Public School",
      location: "Dehradun",
      year: "2019",
      score: "80.0%",
    },
  ];

  return (
    <section
      id="education"
      className="relative bg-[#0d0d0d] py-28 overflow-hidden"
    >
      {/* Section number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-mono text-[18vw] font-black text-white/[0.02] select-none pointer-events-none leading-none">
        02
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">
            02 /
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white tracking-tight">
            Education
          </h2>
          <span className="flex-1 h-px bg-[#1a1a1a] ml-4" />
        </div>

        <div className="space-y-0">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col md:flex-row md:items-center gap-4 py-8 border-b border-[#1a1a1a] hover:border-amber-400/30 transition-colors cursor-default"
            >
              {/* Index */}
              <div className="font-mono text-xs text-zinc-700 group-hover:text-amber-400/50 transition-colors w-8 shrink-0">
                0{idx + 1}
              </div>

              {/* Main content */}
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg group-hover:text-amber-400 transition-colors">
                  {item.degree}
                </h3>
                <p className="text-zinc-500 text-sm mt-1 font-mono">
                  {item.school} · {item.location}
                </p>
              </div>

              {/* Score badge */}
              <div className="shrink-0">
                <span className="font-mono text-xs border border-amber-400/30 text-amber-400 px-3 py-1.5 bg-amber-400/5">
                  {item.score}
                </span>
              </div>

              {/* Year */}
              <div className="font-mono text-xs text-zinc-600 shrink-0 min-w-[80px] text-right">
                {item.year}
              </div>

              {/* Hover line */}
              <div className="absolute left-0 bottom-0 h-px w-0 bg-amber-400 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
