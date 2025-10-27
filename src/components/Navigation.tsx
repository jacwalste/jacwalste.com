"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/changelog", label: "changelog" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          
          <div className="hidden gap-4 sm:flex md:gap-6">
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

          <button
            className="sm:hidden font-mono text-terminal-green"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "[×]" : "[≡]"}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 flex flex-col gap-3 border-t border-forest-medium pt-4 sm:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-mono text-sm transition-colors ${
                  pathname === item.href
                    ? "text-terminal-green"
                    : "text-amber-cream hover:text-amber-warm"
                }`}
              >
                → {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

