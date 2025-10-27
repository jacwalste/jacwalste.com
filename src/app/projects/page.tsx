import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "mandel-cli",
    description: "terminal mandelbrot set renderer with color gradients",
    stack: ["python", "numpy", "rich"],
    github: "https://github.com/jacwalste/mandel-cli",
    status: "active",
  },
  {
    title: "langgraph-experiments",
    description: "recursive agent patterns for complex reasoning tasks",
    stack: ["python", "langgraph", "langchain"],
    github: "https://github.com/jacwalste/langgraph-experiments",
    status: "active",
  },
  {
    title: "eval-harness",
    description: "custom eval framework for testing llm reasoning paths",
    stack: ["typescript", "openai", "langsmith"],
    github: "https://github.com/jacwalste/eval-harness",
    status: "wip",
  },
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="font-serif text-4xl text-amber-cream">projects</h1>
        <p className="text-lg text-amber-warm">
          experiments, tools, and weird little systems
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

