export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="text-zinc-600 mt-2">
          Technologies and tools I work with.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Languages */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Languages</h3>
          <p className="text-zinc-600 leading-7">
            JavaScript (ES6+), TypeScript, C++, Python, SQL, HTML5, CSS3
          </p>
        </div>

        {/* Frontend */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Frontend</h3>
          <p className="text-zinc-600 leading-7">
            Next.js, React.js, Tailwind CSS, Redux Toolkit, RTK Query
          </p>
        </div>

        {/* Backend */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Backend & Databases</h3>
          <p className="text-zinc-600 leading-7">
            Node.js, PostgreSQL, Prisma ORM, REST APIs, Zod
          </p>
        </div>

        {/* Tools */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Tools & Concepts</h3>
          <p className="text-zinc-600 leading-7">
            Git, GitHub, Vercel, Netlify, Vitest, DSA, Immutable Architecture
          </p>
        </div>
      </div>
    </section>
  );
}
