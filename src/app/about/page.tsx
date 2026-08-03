import type { Metadata } from "next";
import Media from "@/components/ui/Media";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Chef Tristan — a restaurant-trained chef bringing professional technique and scratch-made cooking to private tables and home kitchens.",
};

const PHILOSOPHY_POINTS = [
  {
    index: "01",
    title: "Real ingredients, no shortcuts",
    description:
      "Stocks are made from scratch, sauces are built from fond, and produce is bought the way a kitchen buys it — for the week it's cooked, not the month it sits.",
  },
  {
    index: "02",
    title: "Restaurant technique, home pace",
    description:
      "Every recipe is translated from line-cook speed to a pace that works with a weeknight, a single pan, and whatever is already in your fridge.",
  },
  {
    index: "03",
    title: "Food that fits your life",
    description:
      "Meal prep is built around how you actually eat — allergies, training schedules, picky kids, and all — never a generic template.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[88rem] px-6 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-48">
        <div className="grid items-end gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="animate-rise">
            <SectionHeading
              as="h1"
              eyebrow="The Chef"
              title={
                <>
                  From the line
                  <span className="block italic text-brass-dark">to your table.</span>
                </>
              }
              description="Over a decade in professional kitchens, most recently as a chef on a high-volume restaurant line — where I learned what it takes to put out food that is consistent, seasonal, and genuinely craveable, night after night."
            />
          </div>

          <Reveal delay={150}>
            <Media
              tone="walnut"
              label="Chef Tristan in the kitchen"
              src="/images/food/hero-chef.jpg"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
              className="aspect-[4/5] w-full"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-linen/40">
        <div className="mx-auto max-w-[88rem] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <SectionHeading eyebrow="Why Independent" title="Family meal" />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-8 text-[1.0625rem] leading-[1.9] text-stone">
                <p className="font-serif text-3xl font-light leading-snug text-ink">
                  The food I was proudest of was never the tasting menu — it was the family meal
                  we cooked for each other before service, thrown together from scraps and
                  instinct.
                </p>
                <p>
                  Restaurant kitchens taught me discipline, speed, and how to make hundreds of
                  covers a night taste intentional. But that pre-service plate was the one that
                  actually tasted like someone cooked it for you.
                </p>
                <p>
                  Going independent let me bring that instinct directly into people&apos;s homes:
                  cooking for one household at a time, learning how they actually eat, and building
                  menus around that instead of a printed board.
                </p>
                <p>
                  Today that means two things — sharing the recipes I cook on my own stove, and
                  handling the week for a small roster of private clients who would rather spend
                  their evenings at the table than the cutting board.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[88rem] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <SectionHeading eyebrow="Philosophy" title="Three things I don't compromise on" />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 lg:grid-cols-3">
          {PHILOSOPHY_POINTS.map((point, index) => (
            <Reveal key={point.title} delay={index * 120} className="bg-bone">
              <div className="flex h-full flex-col p-10 lg:p-12">
                <span className="numeral text-sm tracking-[0.2em] text-brass">{point.index}</span>
                <h3 className="mt-8 font-serif text-2xl font-light leading-snug text-ink">
                  {point.title}
                </h3>
                <p className="mt-5 text-[0.95rem] leading-[1.85] text-stone">
                  {point.description}
                </p>
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
              eyebrow="Next"
              title="Want food like this in your kitchen?"
              description="Browse the recipe archive, or find out how the weekly service works for households like yours."
            />
            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/meal-prep" variant="light">
                Meal Prep Packages
              </Button>
              <Button href="/recipes" variant="ghost">
                The Recipe Archive
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
