import RotatingSnippets from "@/components/RotatingSnippets";

export default function Home() {
  return (
    <div className="flex min-h-[80vh] flex-col items-start justify-center space-y-12">
      <div className="space-y-6">
        <h1 className="font-serif text-5xl text-amber-cream sm:text-6xl">
          hi, i&apos;m jacwalste
        </h1>
        <p className="text-xl text-amber-warm sm:text-2xl">
          i build weird little brains out of code.
        </p>
      </div>

      <div className="w-full space-y-4 rounded-lg border border-forest-medium bg-forest-dark/30 p-6 backdrop-blur-sm">
        <RotatingSnippets />
      </div>

      <div className="flex flex-wrap gap-4 font-mono text-sm">
        <a
          href="https://github.com/jacwalste"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-green hover:text-amber-warm transition-colors"
        >
          → github
        </a>
        <a
          href="https://twitter.com/jacwalste"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-green hover:text-amber-warm transition-colors"
        >
          → twitter
        </a>
        <a
          href="https://jackstepanek.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-green hover:text-amber-warm transition-colors"
        >
          → main portfolio
        </a>
      </div>
    </div>
  );
}
