export default function About() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="font-serif text-4xl text-amber-cream">about</h1>
        <div className="space-y-6 text-lg leading-relaxed text-amber-warm">
          <p>
            I&apos;m an AI engineer working in fintech by day, building weird experimental tools by night.
          </p>
          <p>
            My stack revolves around{" "}
            <span className="text-terminal-green">LangChain</span>,{" "}
            <span className="text-terminal-green">LangGraph</span>,{" "}
            <span className="text-terminal-green">OpenAI</span>, and{" "}
            <span className="text-terminal-green">LangSmith</span>. I think a lot about agent architectures, recursive reasoning, and how to make LLMs actually useful (not just impressive).
          </p>
          <p>
            This site exists as a complement to my main portfolio at{" "}
            <a
              href="https://jackstepanek.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-green underline hover:text-amber-cream"
            >
              jackstepanek.com
            </a>
            . That one&apos;s polished and professional. This one is raw build logs, half-finished experiments, and honest reflections on what works (and what breaks).
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-forest-medium bg-forest-dark/30 p-8 backdrop-blur-sm">
        <pre className="font-mono text-xs text-terminal-green leading-relaxed overflow-x-auto">
{`
    ╔═══════════════════════════════════════╗
    ║                                       ║
    ║        /\\                             ║
    ║       /  \\        jacwalste           ║
    ║      /    \\       ─────────           ║
    ║     /  /\\  \\      AI Engineer         ║
    ║    /  /  \\  \\     & Builder           ║
    ║   /  /    \\  \\                        ║
    ║  /__/      \\__\\   → GitHub            ║
    ║      |  |         → Twitter           ║
    ║      |  |         → Portfolio         ║
    ║     /    \\                            ║
    ║    --------       Building brains     ║
    ║                   one commit at a     ║
    ║                   time                ║
    ║                                       ║
    ╚═══════════════════════════════════════╝
`}
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="font-serif text-2xl text-amber-cream">reach out</h2>
        <div className="space-y-2 font-mono">
          <p className="text-amber-warm">
            <span className="text-terminal-green">→</span> GitHub:{" "}
            <a
              href="https://github.com/jacwalste"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-green underline hover:text-amber-cream"
            >
              @jacwalste
            </a>
          </p>
          <p className="text-amber-warm">
            <span className="text-terminal-green">→</span> Twitter:{" "}
            <a
              href="https://twitter.com/jacwalste"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-green underline hover:text-amber-cream"
            >
              @jacwalste
            </a>
          </p>
          <p className="text-amber-warm">
            <span className="text-terminal-green">→</span> Portfolio:{" "}
            <a
              href="https://jackstepanek.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-green underline hover:text-amber-cream"
            >
              jackstepanek.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

