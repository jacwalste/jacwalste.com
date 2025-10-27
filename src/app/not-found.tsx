import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center space-y-8 text-center">
      <div className="space-y-4">
        <h1 className="font-mono text-6xl text-terminal-green glow">404</h1>
        <h2 className="font-serif text-3xl text-amber-cream">
          page not found
        </h2>
        <p className="text-lg text-amber-warm">
          looks like this path doesn&apos;t exist in the forest...
        </p>
      </div>

      <pre className="rounded-lg border border-forest-medium bg-forest-dark/30 p-6 font-mono text-sm text-amber-warm backdrop-blur-sm">
{`> ls -la /this/path
ls: cannot access '/this/path': No such file or directory

> cd ~
Returning home...`}
      </pre>

      <Link
        href="/"
        className="rounded-lg border border-terminal-green bg-forest-dark/30 px-6 py-3 font-mono text-terminal-green backdrop-blur-sm transition-all hover:bg-terminal-green hover:text-forest-deep"
      >
        → return home
      </Link>
    </div>
  );
}

