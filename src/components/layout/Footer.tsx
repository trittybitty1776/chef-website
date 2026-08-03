import Link from "next/link";
import NewsletterForm from "@/components/ui/NewsletterForm";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
];

const SITE_LINKS = [
  { href: "/recipes", label: "Recipes" },
  { href: "/meal-prep", label: "Meal Prep" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-bone">
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[88rem] px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_0.8fr_1.2fr]">
          <div>
            <p className="font-serif text-3xl font-light tracking-[0.02em]">Chef Jarvis</p>
            <p className="eyebrow mt-3 text-brass-light">Private Kitchen &middot; Est. 2015</p>
            <p className="mt-8 max-w-sm text-sm leading-loose text-bone/55">
              Restaurant-trained cooking for private tables — a weekly menu built around one
              household at a time, and the recipes behind it.
            </p>
          </div>

          <nav>
            <p className="eyebrow text-bone/40">Explore</p>
            <ul className="mt-6 space-y-3.5">
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-quiet font-serif text-lg font-light text-bone/80 transition-colors hover:text-brass-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-bone/40">The Menu Letter</p>
            <p className="mt-6 max-w-sm text-sm leading-loose text-bone/55">
              Seasonal recipes and meal-prep openings, sent when there is something worth
              sending. No more than twice a month.
            </p>
            <NewsletterForm variant="dark" />
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-bone/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-bone/35">
            &copy; {new Date().getFullYear()} Chef Jarvis
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.7rem] uppercase tracking-[0.18em] text-bone/50 transition-colors hover:text-brass-light"
              >
                {social.label}
              </a>
            ))}
            <a
              href="mailto:hello@chefjarvis.com"
              className="text-[0.7rem] uppercase tracking-[0.18em] text-bone/50 transition-colors hover:text-brass-light"
            >
              hello@chefjarvis.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
