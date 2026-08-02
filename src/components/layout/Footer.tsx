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
    <footer className="bg-walnut text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl font-semibold text-cream">Chef Tristan</p>
            <p className="font-script mt-1 text-lg text-terracotta-light">
              scratch-made, one plate at a time
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              Recipes and private meal-prep from a former Earls Kitchen &amp; Bar chef. Real
              ingredients, honest technique, cooked for your table.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cream/60">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream/80 hover:text-terracotta-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cream/60">
              Recipe drops
            </p>
            <p className="mt-4 text-sm text-cream/70">
              New recipes and meal-prep openings, straight to your inbox.
            </p>
            <NewsletterForm variant="dark" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-cream/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cream/50">
            &copy; {new Date().getFullYear()} Chef Tristan. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium uppercase tracking-wider text-cream/60 hover:text-terracotta-light"
              >
                {social.label}
              </a>
            ))}
            <a
              href="mailto:hello@cheftristan.com"
              className="text-xs font-medium uppercase tracking-wider text-cream/60 hover:text-terracotta-light"
            >
              hello@cheftristan.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
