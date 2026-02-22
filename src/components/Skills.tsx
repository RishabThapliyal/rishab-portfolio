type SkillCategory = {
  label: string;
  items: string[];
};

const categories: SkillCategory[] = [
  {
    label: "Languages",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "C++",
      "Python",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "Frontend",
    items: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "RTK Query",
    ],
  },
  {
    label: "Backend & DB",
    items: ["Node.js", "PostgreSQL", "Prisma ORM", "REST APIs", "Zod"],
  },
  {
    label: "Tools & Concepts",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "Vitest",
      "DSA",
      "Immutable Architecture",
    ],
  },
];

const stats = [
  { value: "900+", label: "LeetCode problems solved" },
  { value: "8.15", label: "CGPA out of 10" },
  { value: "3+", label: "Production projects" },
  { value: "97%", label: "ML model accuracy" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#0d0d0d] py-28 overflow-hidden"
    >
      {/* Section number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-mono text-[18vw] font-black text-white/2 select-none pointer-events-none leading-none">
        04
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">
            04 /
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white tracking-tight">
            Skills
          </h2>
          <span className="flex-1 h-px bg-[#1a1a1a] ml-4" />
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a] mb-16 border border-[#1a1a1a]">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0d0d0d] p-6 text-center group hover:bg-[#111] transition-colors"
            >
              <div className="font-display text-4xl font-black text-amber-400 mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-[11px] text-zinc-500 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div key={cat.label} className="group">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-6 bg-amber-400" />
                <h3 className="font-mono text-xs text-amber-400 tracking-widest uppercase">
                  {cat.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-sm text-zinc-300 border border-[#222] bg-[#111] px-4 py-2 hover:border-amber-400/40 hover:text-amber-400 hover:bg-amber-400/5 transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16 border border-[#1a1a1a] p-8 bg-[#0a0a0a]">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-6 bg-amber-400" />
            <h3 className="font-mono text-xs text-amber-400 tracking-widest uppercase">
              Achievements & Certifications
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: "⌘",
                text: "LeetCode: 900+ problems solved — arrays, trees, graphs, dynamic programming",
              },
              {
                icon: "◈",
                text: "Hackathon: Built working prototype under 24-hour constraint",
              },
              {
                icon: "◉",
                text: "Certification: Introduction to Cloud Computing — IaaS, PaaS, SaaS",
              },
              {
                icon: "◎",
                text: "Certification: Machine Learning Foundations — supervised & unsupervised learning",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 border border-[#1a1a1a] hover:border-amber-400/20 transition-colors group"
              >
                <span className="text-amber-400/50 text-lg mt-0.5 group-hover:text-amber-400 transition-colors">
                  {item.icon}
                </span>
                <span className="text-zinc-400 text-sm leading-relaxed">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
