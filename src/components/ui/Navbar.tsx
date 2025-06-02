"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Homepage", href: "/" },
  { label: "Crusade Rules", href: "/crusade-rules" },
  { label: "Nachmund Gauntlet", href: "/nachmund-gauntlet" },
];

export default function Navbar() {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <nav className="w-full bg-gray-950/95 border-b border-gray-800/50 py-4 sticky top-0 z-40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex justify-center px-6">
        <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
          {NAV_LINKS.map((link) => {
            const active = pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-conduit text-xs md:text-base uppercase font-semibold tracking-wide transition-all duration-200 px-2 md:px-3 py-2 rounded-md
                  ${
                    active
                      ? "text-cyan-400 bg-cyan-900/30 border-b-2 border-cyan-400"
                      : "text-gray-400 hover:text-cyan-300 hover:bg-gray-800/50"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
