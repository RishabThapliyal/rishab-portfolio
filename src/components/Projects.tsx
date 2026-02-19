import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-zinc-600 mt-2">
          Selected work showcasing my full-stack and AI development skills.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="Leave & Attendance Management System"
          tech="Next.js · TypeScript · PostgreSQL · Prisma"
          description="Built a full-stack attendance system with a custom rule engine and immutable event-based architecture ensuring data integrity."
          github="https://github.com/RishabThapliyal/leave-attendance-marking-system"
        />

        <ProjectCard
          title="Video Scene Classification System"
          tech="React · Python · Flask · CLIP"
          description="Developed an AI-powered tool enabling natural language search within video content using multi-modal models."
          github="https://github.com/RishabThapliyal/Video-Scene-Classification-System"
        />

        <ProjectCard
          title="Spam Mail Prediction"
          tech="Python · Logistic Regression · NLP"
          description="Built a machine learning model achieving 97% accuracy using TF-IDF and Logistic Regression."
          github="https://github.com/RishabThapliyal/Spam-Mail-Prediction-"
        />
      </div>
    </section>
  );
}
