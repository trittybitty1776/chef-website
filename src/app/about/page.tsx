import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Chef Tristan — a former Earls Kitchen & Bar chef bringing restaurant technique and scratch-made cooking to home kitchens and meal-prep clients.",
};

const PHILOSOPHY_POINTS = [
  {
    title: "Real ingredients, no shortcuts",
    description:
      "Stocks are made from scratch, sauces are built from fond, and produce is bought the way a kitchen buys it — for the week it's cooked, not for the month it sits.",
  },
  {
    title: "Restaurant technique, home-kitchen pace",
    description:
      "Every recipe is translated from line-cook speed to a pace that works with a weeknight, a single pan, and whatever's already in your fridge.",
  },
  {
    title: "Food that fits your life",
    description:
      "Meal prep is built around how you actually eat — allergies, training schedules, picky kids, and all — not a generic template.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-linen">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
          <div>
            <p className="font-script text-2xl text-terracotta">My story</p>
            <h1 className="mt-2 font-serif text-4xl font-semibold leading-tight text-walnut sm:text-5xl">
              From restaurant line to your kitchen table
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-walnut-light">
              I spent over a decade in professional kitchens, most recently as a chef at Earls
              Kitchen &amp; Bar, where I learned what it actually takes to put out food that&apos;s
              consistent, seasonal, and genuinely craveable — night after night, for hundreds of
              people at a time.
            </p>
          </div>
          <PlaceholderImage
            tone="walnut"
            label="Chef Tristan in the kitchen"
            icon="🔪"
            className="aspect-[4/3] w-full rounded-3xl shadow-lg"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-walnut">Why I went independent</h2>
        <div className="mt-6 space-y-5 text-walnut-light leading-relaxed">
          <p>
            Restaurant kitchens taught me discipline, speed, and how to make hundreds of covers a
            night taste intentional. But the food I was proudest of was never the tasting menu —
            it was the family meal we&apos;d cook for each other before service, thrown together from
            scraps and instinct.
          </p>
          <p>
            Going independent let me bring that same instinct directly to people&apos;s homes: cooking
            for one household at a time, getting to know how they actually eat, and building
            menus around that instead of a printed menu board.
          </p>
          <p>
            Today that means two things — sharing the recipes I actually cook on my own stove, and
            handling the meal prep for a small roster of private clients who&apos;d rather spend their
            evenings with their family than at the cutting board.
          </p>
        </div>
      </section>

      <section className="bg-cream-dark/60 border-y border-walnut/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-semibold text-walnut sm:text-4xl">
            Cooking Philosophy
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {PHILOSOPHY_POINTS.map((point) => (
              <div key={point.title} className="rounded-2xl bg-white/60 p-6 shadow-sm">
                <h3 className="font-serif text-xl font-semibold text-terracotta">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-walnut-light">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-walnut sm:text-4xl">
          Want food like this in your kitchen?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-walnut-light">
          Browse the recipe archive, or find out how meal-prep service works for households like
          yours.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/recipes"
            className="rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
          >
            View Recipes
          </Link>
          <Link
            href="/meal-prep"
            className="rounded-full border border-walnut/20 px-7 py-3 text-sm font-semibold text-walnut transition-colors hover:border-walnut/40 hover:bg-walnut/5"
          >
            Meal Prep Services
          </Link>
        </div>
      </section>
    </div>
  );
}
