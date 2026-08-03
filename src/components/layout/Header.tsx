"use client";

import { useEffect, useState } from "react";
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
];

/** Scroll distance after which the bar leaves its transparent state. */
const SOLID_AFTER_PX = 24;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  // Only the home page has a full-bleed dark hero for the bar to float over.
  const isOverlaid = isHome && !isScrolled && !isMenuOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SOLID_AFTER_PX);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const textColor = isOverlaid ? "text-bone" : "text-ink";
  const barColor = isOverlaid
    ? "bg-transparent border-transparent"
    : "bg-bone/90 border-ink/10 backdrop-blur-md";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-700 ${barColor}`}
    >
      <div className="mx-auto flex max-w-[88rem] items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" onClick={closeMenu} className={`flex flex-col leading-none ${textColor}`}>
          <span className="font-serif text-[1.6rem] font-light tracking-[0.02em]">
            Chef Tristan
          </span>
          <span
            className={`eyebrow mt-1.5 text-[0.6rem] ${
              isOverlaid ? "text-bone/60" : "text-brass-dark"
            }`}
          >
            Private Kitchen
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`eyebrow link-quiet text-[0.65rem] transition-opacity duration-300 ${textColor} ${
                  isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className={`hidden border px-6 py-3 text-[0.65rem] font-medium uppercase tracking-[0.22em] transition-all duration-500 lg:inline-block ${
              isOverlaid
                ? "border-bone/40 text-bone hover:bg-bone hover:text-ink"
                : "border-ink/25 text-ink hover:bg-ink hover:text-bone"
            }`}
          >
            Enquire
          </Link>

          <button
            type="button"
            className={`flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden ${textColor}`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span
              className={`h-px w-6 bg-current transition-transform duration-300 ${
                isMenuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-current transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-ink/10 bg-bone px-6 pb-8 pt-2 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block border-b border-ink/5 py-4 font-serif text-2xl font-light text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-6 block bg-ink px-6 py-4 text-center text-[0.65rem] font-medium uppercase tracking-[0.22em] text-bone"
          >
            Enquire
          </Link>
        </nav>
      )}
    </header>
  );
}
