type Project = {
  index: string;
  title: string;
  desc: string;
  tech: string[];
  github: string;
  live?: string;
  highlight: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Leave & Attendance Management System",
    desc: "Full-stack attendance system with a custom Zod rule engine, immutable event-based architecture ensuring 100% data integrity, and FullCalendar UI integration with RTK Query optimization.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redux Toolkit",
      "RTK Query",
      "Zod",
    ],
    github:
      "https://github.com/RishabThapliyal/leave-attendance-marking-system",
    live: "https://leave-attendance-system.netlify.app/",
    highlight: "100% data integrity via cancel-and-recreate immutable strategy",
  },
  {
    index: "02",
    title: "Media Search App",
    desc: "Unified media discovery app integrating 3 third-party APIs (Unsplash, Pexels, Giphy) for searching photos, videos & GIFs in one place. Features paginated infinite scroll and a persistent collection system with Redux localStorage hydration.",
    tech: [
      "Next.js",
      "JavaScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Unsplash API",
      "Pexels API",
      "Giphy API",
    ],
    github: "https://github.com/RishabThapliyal/media-search-nextjs",
    live: "https://media-search-nextjs.netlify.app/",
    highlight: "3 APIs unified — photos, videos & GIFs in a single interface",
  },
  {
    index: "03",
    title: "Video Scene Classification System",
    desc: "AI-powered video analysis tool using CLIP and Sentence Transformers that enables natural language search within video content. Flask backend processes video frames with OpenCV and integrates multi-modal NLP models.",
    tech: [
      "React.js",
      "Python",
      "Flask",
      "CLIP",
      "Sentence Transformers",
      "OpenCV",
    ],
    github:
      "https://github.com/RishabThapliyal/Video-Scene-Classification-System",
    highlight: "Natural language search inside video using multi-modal AI",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0a0a0a] py-28 overflow-hidden"
    >
      {/* Section number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-mono text-[18vw] font-black text-white/2 select-none pointer-events-none leading-none">
        03
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">
            03 /
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white tracking-tight">
            Projects
          </h2>
          <span className="flex-1 h-px bg-[#1a1a1a] ml-4" />
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.index}
              className="group relative bg-[#111] border border-[#1a1a1a] hover:border-amber-400/30 transition-all duration-300 p-8 overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse at 0% 0%, rgba(245,158,11,0.04) 0%, transparent 70%)",
                }}
              />

              <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                {/* Index */}
                <div className="font-mono text-5xl font-black text-white/4 group-hover:text-amber-400/10 transition-colors shrink-0 leading-none select-none">
                  {project.index}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 shrink-0">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-amber-400 border border-amber-400/30 px-3 py-1.5 hover:bg-amber-400/10 transition-colors tracking-wider uppercase"
                        >
                          Live ↗
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-zinc-400 border border-zinc-700 px-3 py-1.5 hover:border-zinc-500 hover:text-white transition-colors tracking-wider uppercase"
                      >
                        GitHub ↗
                      </a>
                    </div>
                  </div>

                  {/* Highlight callout */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-px w-4 bg-amber-400" />
                    <span className="font-mono text-xs text-amber-400/80 tracking-wide">
                      {project.highlight}
                    </span>
                  </div>

                  <p className="text-zinc-400 leading-relaxed mb-6 max-w-3xl">
                    {project.desc}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] text-zinc-500 bg-[#1a1a1a] px-3 py-1 tracking-wide hover:text-amber-400 hover:bg-amber-400/5 transition-colors cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom line animation */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-amber-400 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
