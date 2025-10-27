"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/changelog", label: "changelog" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-forest-medium bg-forest-dark/50 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="font-serif text-xl text-terminal-green hover:text-amber-warm transition-colors"
          >
            jacwalste
          </Link>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-sm transition-colors ${
                  pathname === item.href
                    ? "text-terminal-green"
                    : "text-amber-cream hover:text-amber-warm"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

