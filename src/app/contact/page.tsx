import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about meal-prep services, private events, or recipe questions with Chef Tristan.",
};

const SOCIAL_LINKS = [
  { label: "Instagram", handle: "@cheftristan", href: "https://instagram.com" },
  { label: "Facebook", handle: "Chef Tristan", href: "https://facebook.com" },
  { label: "Pinterest", handle: "Chef Tristan", href: "https://pinterest.com" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="font-script text-2xl text-terracotta">let&apos;s talk food</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-walnut sm:text-5xl">
          Contact
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-walnut-light">
          Questions about meal prep, a recipe, or a private event? Send a note below or reach out
          directly.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-xl font-semibold text-walnut">Email</h2>
            <a
              href="mailto:hello@cheftristan.com"
              className="mt-1 block text-terracotta hover:text-terracotta-dark"
            >
              hello@cheftristan.com
            </a>
          </div>

          <div>
            <h2 className="font-serif text-xl font-semibold text-walnut">Follow along</h2>
            <p className="mt-1 text-sm text-walnut-light">
              Most day-to-day photos and behind-the-scenes cooking live on Instagram.
            </p>
            <ul className="mt-3 space-y-2">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-walnut hover:text-terracotta"
                  >
                    <span className="font-medium">{social.label}</span>{" "}
                    <span className="text-walnut-light">{social.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-walnut/10 bg-cream-dark/60 p-6">
            <h2 className="font-serif text-lg font-semibold text-walnut">Response time</h2>
            <p className="mt-1 text-sm text-walnut-light">
              I typically reply within two business days. Meal-prep inquiries include a short
              consult call before your first delivery.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-walnut/10 bg-white/60 p-6 shadow-sm sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
