interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  github: string;
  status: "active" | "wip" | "archived";
}

export default function ProjectCard({
  title,
  description,
  stack,
  github,
  status,
}: ProjectCardProps) {
  const statusColors = {
    active: "text-terminal-green",
    wip: "text-amber-warm",
    archived: "text-brown-accent",
  };

  return (
    <div className="group rounded-lg border border-forest-medium bg-forest-dark/30 p-6 backdrop-blur-sm transition-all hover:border-terminal-green/50 hover:bg-forest-dark/50">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h2 className="font-mono text-2xl text-amber-cream">{title}</h2>
            <p className="text-amber-warm">{description}</p>
          </div>
          <span
            className={`font-mono text-xs ${statusColors[status]} rounded border border-current px-2 py-1`}
          >
            {status}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-brown-accent rounded border border-brown-accent/50 px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-terminal-green transition-colors hover:text-amber-warm"
        >
          → view on github
        </a>
      </div>
    </div>
  );
}

