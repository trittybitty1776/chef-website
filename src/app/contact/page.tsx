import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about meal-prep services, private dinners, events, or recipe questions with Chef Tristan.",
};

const SOCIAL_LINKS = [
  { label: "Instagram", handle: "@cheftristan", href: "https://instagram.com" },
  { label: "Facebook", handle: "Chef Tristan", href: "https://facebook.com" },
  { label: "Pinterest", handle: "Chef Tristan", href: "https://pinterest.com" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[88rem] px-6 pb-24 pt-36 lg:px-10 lg:pb-32 lg:pt-48">
      <div className="animate-rise">
        <SectionHeading
          as="h1"
          align="center"
          eyebrow="Enquiries"
          title="Let's talk about your table"
          description="Weekly meal prep, a private dinner, an event, or a question about a recipe — send a note and I'll reply personally."
        />
      </div>

      <div className="mt-20 grid gap-16 border-t border-ink/10 pt-16 lg:grid-cols-[0.8fr_1.4fr] lg:gap-24">
        <div className="space-y-12">
          <div>
            <p className="eyebrow text-[0.62rem] text-stone-light">Direct</p>
            <a
              href="mailto:hello@cheftristan.com"
              className="link-quiet mt-4 inline-block font-serif text-2xl font-light text-ink"
            >
              hello@cheftristan.com
            </a>
          </div>

          <div>
            <p className="eyebrow text-[0.62rem] text-stone-light">Follow along</p>
            <ul className="mt-5 space-y-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline gap-3"
                  >
                    <span className="font-serif text-lg font-light text-ink transition-colors group-hover:text-brass-dark">
                      {social.label}
                    </span>
                    <span className="text-xs text-stone-light">{social.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-ink/10 pt-8">
            <p className="eyebrow text-[0.62rem] text-stone-light">Response time</p>
            <p className="mt-4 text-[0.95rem] leading-[1.85] text-stone">
              I reply within two business days. Meal-prep enquiries begin with a short consult
              call before your first week.
            </p>
          </div>
        </div>

        <div className="surface-paper p-8 sm:p-12 lg:p-14">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
