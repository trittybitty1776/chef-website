"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { href: "/recipes", label: "Recipes" },
  { href: "/meal-prep", label: "Meal Prep" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-walnut/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-baseline gap-2" onClick={() => setIsMenuOpen(false)}>
          <span className="font-serif text-2xl font-semibold text-terracotta">Chef Tristan</span>
          <span className="font-script hidden text-lg text-sage-dark sm:inline">home kitchen</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-terracotta ${
                  isActive ? "text-terracotta" : "text-walnut"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/meal-prep"
          className="hidden rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark md:inline-block"
        >
          Book Meal Prep
        </Link>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span
            className={`h-0.5 w-6 bg-walnut transition-transform ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-walnut transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-walnut transition-transform ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-walnut/10 bg-cream px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-3 text-base font-medium text-walnut hover:bg-cream-dark hover:text-terracotta"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/meal-prep"
            className="mt-2 rounded-full bg-terracotta px-5 py-3 text-center text-sm font-semibold text-cream"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Meal Prep
          </Link>
        </nav>
      )}
    </header>
  );
}
