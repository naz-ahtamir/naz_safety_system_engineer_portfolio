"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "ABOUT", external: false },
  { href: "/activities", label: "ACTIVITIES", external: false },
  { href: "/contacts", label: "CONTACTS", external: false },
  { href: "/nasaruddin-st.pdf", label: "RESUME", external: true },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="py-2"
      style={{ fontFamily: "var(--font-typewriter)" }}
    >
      <ul className="flex flex-wrap items-center gap-y-1 list-none">
        {navLinks.map((link, i) => {
          const isActive = !link.external && pathname.startsWith(link.href);
          const className = `uppercase tracking-widest text-sm ${
            isActive ? "underline" : "hover:underline"
          }`;

          return (
            <li key={link.href} className="flex items-center">
              {i > 0 && (
                <span className="mx-3 text-gray-400 select-none text-sm">|</span>
              )}
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className={className}>
                  {link.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
