import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "Meal Prep Services",
  description:
    "Private meal-prep packages from Chef Tristan — restaurant-quality meals portioned, labeled, and delivered to your fridge each week.",
};

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Book a consult",
    description: "Tell me about your household, allergies, goals, and favorite flavors.",
  },
  {
    step: "2",
    title: "I build your menu",
    description: "A rotating, seasonal menu built around what you'll actually want to eat.",
  },
  {
    step: "3",
    title: "Cook day",
    description: "I cook in your kitchen or mine, then portion and label everything.",
  },
  {
    step: "4",
    title: "Open the fridge",
    description: "Reheat-ready meals waiting for you all week — no shopping, no dishes.",
  },
];

const PACKAGES = [
  {
    name: "Starter",
    price: "$220",
    cadence: "per week",
    tagline: "For one or two people easing into meal prep.",
    features: [
      "6 entrées, portioned for 1-2",
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
    tagline: "Our most popular package, built for households of 3-5.",
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
    name: "Dinner Party & Events",
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
    <div className="flex flex-col">
      <section className="bg-linen">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
          <div>
            <p className="font-script text-2xl text-terracotta">no more Sunday scramble</p>
            <h1 className="mt-2 font-serif text-4xl font-semibold leading-tight text-walnut sm:text-5xl">
              Private Meal Prep, Cooked Around Your Week
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-walnut-light">
              Restaurant-quality meals, portioned and labeled, waiting in your fridge. Choose a
              package below or reach out for a custom quote.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
            >
              Inquire About Meal Prep
            </Link>
          </div>
          <PlaceholderImage
            tone="sage"
            label="Weekly meal-prep containers ready in the fridge"
            icon="🥘"
            src="/images/food/meal-prep-containers.jpg"
            className="aspect-[4/3] w-full rounded-3xl shadow-lg"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-semibold text-walnut sm:text-4xl">
          How It Works
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-terracotta font-serif text-xl font-semibold text-cream">
                {item.step}
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-walnut">{item.title}</h3>
              <p className="mt-2 text-sm text-walnut-light">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-walnut/10 bg-cream-dark/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-semibold text-walnut sm:text-4xl">
            Packages &amp; Pricing
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-walnut-light">
            Every package is customized after a short consult — the pricing below is a starting
            point.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col rounded-2xl p-8 shadow-sm ${
                  pkg.highlighted
                    ? "border-2 border-terracotta bg-white"
                    : "border border-walnut/10 bg-white/60"
                }`}
              >
                {pkg.highlighted && (
                  <span className="mb-3 w-fit rounded-full bg-terracotta px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif text-2xl font-semibold text-walnut">{pkg.name}</h3>
                <p className="mt-1 text-sm text-walnut-light">{pkg.tagline}</p>
                <p className="mt-5">
                  <span className="font-serif text-4xl font-semibold text-terracotta">
                    {pkg.price}
                  </span>{" "}
                  <span className="text-sm text-walnut-light">{pkg.cadence}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-walnut-light">
                      <span className="mt-1 text-sage-dark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors ${
                    pkg.highlighted
                      ? "bg-terracotta text-cream hover:bg-terracotta-dark"
                      : "border border-walnut/20 text-walnut hover:border-walnut/40 hover:bg-walnut/5"
                  }`}
                >
                  Inquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-walnut sm:text-4xl">
          Ready to open your fridge to something better?
        </h2>
        <p className="mt-4 text-walnut-light">
          Tell me about your household and I&apos;ll follow up with a custom menu and quote within two
          business days.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
