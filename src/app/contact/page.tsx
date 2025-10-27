"use client";

import { useState } from "react";

export default function Contact() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (command.toLowerCase() === "help") {
      setOutput([
        ...output,
        `> ${command}`,
        "",
        "Available commands:",
        "  email    - Open email client to contact me",
        "  github   - View my GitHub profile", 
        "  twitter  - View my Twitter profile",
        "  clear    - Clear the terminal",
        "  help     - Show this help message",
        "",
      ]);
    } else if (command.toLowerCase() === "email") {
      setOutput([...output, `> ${command}`, "Opening email client...", ""]);
      window.location.href = "mailto:hey@jacwalste.com";
    } else if (command.toLowerCase() === "github") {
      setOutput([...output, `> ${command}`, "Opening GitHub...", ""]);
      window.open("https://github.com/jacwalste", "_blank");
    } else if (command.toLowerCase() === "twitter") {
      setOutput([...output, `> ${command}`, "Opening Twitter...", ""]);
      window.open("https://twitter.com/jacwalste", "_blank");
    } else if (command.toLowerCase() === "clear") {
      setOutput([]);
    } else if (command.trim() === "") {
      setOutput([...output, "> "]);
    } else {
      setOutput([
        ...output,
        `> ${command}`,
        `Command not found: ${command}`,
        'Type "help" for available commands.',
        "",
      ]);
    }
    
    setCommand("");
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="font-serif text-4xl text-amber-cream">contact</h1>
        <p className="text-lg text-amber-warm">
          reach out via the terminal below
        </p>
      </div>

      <div className="rounded-lg border border-forest-medium bg-forest-dark/30 p-6 backdrop-blur-sm">
        <div className="mb-4 font-mono text-sm text-brown-accent">
          jacwalste@terminal:~$ <span className="animate-pulse">_</span>
        </div>

        <div className="space-y-2 font-mono text-sm">
          <div className="mb-6 space-y-1 text-terminal-green">
            <p>Welcome to jacwalste contact terminal v1.0</p>
            <p>Type &quot;help&quot; for available commands.</p>
            <p className="text-brown-accent">──────────────────────────────────</p>
          </div>

          {output.map((line, i) => (
            <div
              key={i}
              className={
                line.startsWith(">")
                  ? "text-terminal-green"
                  : "text-amber-warm"
              }
            >
              {line}
            </div>
          ))}

          <form onSubmit={handleCommand} className="flex items-center gap-2">
            <span className="text-terminal-green">{">"}</span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              className="flex-1 bg-transparent font-mono text-amber-cream outline-none placeholder:text-brown-accent"
              placeholder="type a command..."
              autoFocus
            />
          </form>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-serif text-2xl text-amber-cream">or reach me directly</h2>
        <div className="space-y-2 font-mono text-amber-warm">
          <p>
            <span className="text-terminal-green">→</span> Email:{" "}
            <a
              href="mailto:hey@jacwalste.com"
              className="text-terminal-green underline hover:text-amber-cream"
            >
              hey@jacwalste.com
            </a>
          </p>
          <p>
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
          <p>
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
        </div>
      </div>
    </div>
  );
}

