import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-4 font-serif text-3xl text-amber-cream">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 font-serif text-2xl text-amber-cream">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-2 font-mono text-xl text-amber-warm">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-relaxed text-amber-cream">{children}</p>
    ),
    code: ({ children }) => (
      <code className="rounded bg-forest-medium px-1 py-0.5 font-mono text-sm text-terminal-green">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-4 overflow-x-auto rounded-lg border border-forest-medium bg-forest-dark p-4">
        {children}
      </pre>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 list-inside list-disc space-y-2 text-amber-cream">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 list-inside list-decimal space-y-2 text-amber-cream">
        {children}
      </ol>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-terminal-green underline transition-colors hover:text-amber-warm"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    ...components,
  };
}

