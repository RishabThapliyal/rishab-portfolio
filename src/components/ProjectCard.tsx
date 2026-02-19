type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
  github: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="text-sm text-zinc-500 mt-1">{tech}</p>

      <p className="text-zinc-600 mt-4 leading-7">{description}</p>

      <a
        href={github}
        target="_blank"
        className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  );
}
