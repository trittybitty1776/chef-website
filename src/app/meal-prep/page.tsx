import type { Metadata } from "next";
import Media from "@/components/ui/Media";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Meal Prep Services",
  description:
    "Private meal-prep packages from Chef Tristan — restaurant-quality meals portioned, labelled, and waiting in your fridge each week.",
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Book a consult",
    description: "Tell me about your household, allergies, goals, and the flavours you reach for.",
  },
  {
    step: "02",
    title: "I build your menu",
    description: "A rotating, seasonal menu shaped around what you will actually want to eat.",
  },
  {
    step: "03",
    title: "Cook day",
    description: "I cook in your kitchen or mine, then portion, label, and store everything.",
  },
  {
    step: "04",
    title: "Open the fridge",
    description: "Reheat-ready meals all week — no shopping, no scramble, no dishes.",
  },
];

const PACKAGES = [
  {
    name: "Starter",
    price: "$220",
    cadence: "per week",
    tagline: "For one or two people easing into meal prep.",
    features: [
      "6 entrées, portioned for 1–2",
      "1 rotating seasonal menu",
      "Dietary tags respected (GF, DF, vegetarian, etc.)",
      "Delivered or kitchen-cooked, your choice",
    ],
    highlighted: false,
  },
  {
    name: "Family-Style",
    price: "$380",
    cadence: "per week",
    tagline: "The most requested package, built for households of 3–5.",
    features: [
      "10 entrées + 2 family-style sides",
      "Menu customized to household preferences",
      "Kids' palate accommodations available",
      "Weekly check-in and menu adjustments",
      "Priority scheduling",
    ],
    highlighted: true,
  },
  {
    name: "Dinners & Events",
    price: "From $75",
    cadence: "per person",
    tagline: "Multi-course private dinners and small-event catering.",
    features: [
      "Custom multi-course menu",
      "In-home cooking and plating",
      "Wine pairing suggestions",
      "Full cleanup included",
    ],
    highlighted: false,
  },
];

export default function MealPrepPage() {
  return (
    <>
      <section className="mx-auto max-w-[88rem] px-6 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-48">
        <div className="grid items-end gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="animate-rise">
            <SectionHeading
              as="h1"
              eyebrow="Weekly Service"
              title={
                <>
                  A week of dinners,
                  <span className="block italic text-brass-dark">already handled.</span>
                </>
              }
              description="Restaurant-quality meals, portioned and labelled, waiting in your fridge. Choose a package below or reach out for a custom quote."
            />
            <div className="mt-12">
              <Button href="/contact">Enquire About Meal Prep</Button>
            </div>
          </div>

          <Reveal delay={150}>
            <Media
              tone="sage"
              label="A week of prepared meals ready in the fridge"
              src="/images/food/meal-prep-containers.webp"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
              className="aspect-[4/5] w-full"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-linen/40">
        <div className="mx-auto max-w-[88rem] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <SectionHeading eyebrow="The Process" title="How it works" />
          </Reveal>

          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((item, index) => (
              <Reveal key={item.step} delay={index * 110}>
                <div className="border-t border-ink/15 pt-6">
                  <span className="numeral text-sm tracking-[0.2em] text-brass">{item.step}</span>
                  <h3 className="mt-6 font-serif text-2xl font-light text-ink">{item.title}</h3>
                  <p className="mt-4 text-[0.95rem] leading-[1.85] text-stone">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Packages"
            title="Pricing"
            description="Every package is customized after a short consult — the figures below are a starting point."
          />
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 lg:grid-cols-3">
          {PACKAGES.map((pkg, index) => (
            <Reveal
              key={pkg.name}
              delay={index * 120}
              className={pkg.highlighted ? "bg-ink" : "bg-bone"}
            >
              <div className="flex h-full flex-col p-10 lg:p-12">
                <div className="flex items-baseline justify-between gap-4">
                  <h3
                    className={`font-serif text-3xl font-light ${
                      pkg.highlighted ? "text-bone" : "text-ink"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  {pkg.highlighted && (
                    <span className="eyebrow shrink-0 text-[0.55rem] text-brass-light">
                      Most Chosen
                    </span>
                  )}
                </div>

                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    pkg.highlighted ? "text-bone/55" : "text-stone"
                  }`}
                >
                  {pkg.tagline}
                </p>

                <p className="mt-10 flex items-baseline gap-3">
                  <span
                    className={`numeral text-5xl ${
                      pkg.highlighted ? "text-brass-light" : "text-ink"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`text-[0.65rem] uppercase tracking-[0.2em] ${
                      pkg.highlighted ? "text-bone/40" : "text-stone-light"
                    }`}
                  >
                    {pkg.cadence}
                  </span>
                </p>

                <ul
                  className={`mt-10 flex-1 space-y-4 border-t pt-8 ${
                    pkg.highlighted ? "border-bone/15" : "border-ink/10"
                  }`}
                >
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex gap-4 text-[0.9rem] leading-relaxed ${
                        pkg.highlighted ? "text-bone/70" : "text-stone"
                      }`}
                    >
                      <span
                        className={`mt-2.5 h-px w-3 shrink-0 ${
                          pkg.highlighted ? "bg-brass-light" : "bg-brass"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-12">
                  <Button
                    href="/contact"
                    variant={pkg.highlighted ? "light" : "outline"}
                    className="w-full"
                  >
                    Enquire
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-6 py-24 text-center lg:px-10 lg:py-32">
          <Reveal>
            <SectionHeading
              tone="light"
              align="center"
              eyebrow="Get Started"
              title="Ready to open your fridge to something better?"
              description="Tell me about your household and I'll follow up with a custom menu and quote within two business days."
            />
            <div className="mt-12 flex justify-center">
              <Button href="/contact" variant="light">
                Get in Touch
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
