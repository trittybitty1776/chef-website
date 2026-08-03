import Link from "next/link";
import Media from "@/components/ui/Media";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import RecipeCard from "@/components/recipes/RecipeCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { RECIPES } from "@/lib/recipes";
import { TESTIMONIALS } from "@/lib/testimonials";

const FEATURED_RECIPES = RECIPES.slice(0, 3);
const FEATURED_TESTIMONIALS = TESTIMONIALS.slice(0, 2);

const CREDENTIALS = [
  { value: "10", suffix: "+", label: "Years on professional lines" },
  { value: "50", suffix: "+", label: "Recipes in the archive" },
  { value: "30", suffix: "", label: "Households cooked for weekly" },
];

const SERVICES = [
  {
    index: "01",
    title: "Weekly Meal Prep",
    description:
      "A rotating seasonal menu, portioned and labelled for your week. Built around your household — allergies, training schedules, picky eaters and all.",
    href: "/meal-prep",
    cta: "View packages",
  },
  {
    index: "02",
    title: "Private Dinners",
    description:
      "Multi-course menus cooked and plated in your kitchen. Wine pairings suggested, full cleanup included, nothing for you to do but sit down.",
    href: "/contact",
    cta: "Enquire",
  },
  {
    index: "03",
    title: "The Recipe Archive",
    description:
      "The dishes I actually cook at home, written for a single pan and a weeknight — restaurant technique translated to a home kitchen's pace.",
    href: "/recipes",
    cta: "Browse recipes",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink">
        {/* Wrapper owns the positioning: .img-frame sets its own `position: relative`. */}
        <div className="absolute inset-0">
          <Media
            tone="walnut"
            label="A dish plated by Chef Jarvis"
            src="/images/food/hero-chef.webp"
            sizes="100vw"
            priority
            scrim="strong"
            className="h-full w-full"
          />
        </div>
        {/* Keeps the overlaid header legible against bright imagery */}
        <div
          className="absolute inset-x-0 top-0 z-10 h-48 bg-gradient-to-b from-ink/70 to-transparent"
          aria-hidden="true"
        />
        <div className="grain absolute inset-0 z-10" aria-hidden="true" />

        <div className="relative z-20 mx-auto w-full max-w-[88rem] px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
          <div className="animate-rise max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brass-light/60" />
              <span className="eyebrow text-brass-light">Private Chef &middot; Vancouver</span>
            </div>

            <h1 className="display mt-8 text-[3rem] text-bone sm:text-[4.5rem] lg:text-[5.75rem]">
              Restaurant technique,
              <span className="block italic text-brass-light">one table at a time.</span>
            </h1>

            <p className="lede mt-8 max-w-xl text-bone/70">
              A decade of professional kitchens, now cooking for a small roster of private
              clients — and sharing the recipes behind it.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button href="/meal-prep" variant="light">
                Meal Prep Packages
              </Button>
              <Button href="/recipes" variant="ghost">
                The Recipe Archive
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-[88rem] gap-12 px-6 py-16 sm:grid-cols-3 lg:px-10 lg:py-20">
          {CREDENTIALS.map((item, index) => (
            <Reveal key={item.label} delay={index * 120}>
              <p className="numeral text-6xl text-ink lg:text-7xl">
                {item.value}
                <span className="text-brass">{item.suffix}</span>
              </p>
              <p className="mt-4 max-w-[14rem] text-[0.68rem] uppercase leading-relaxed tracking-[0.2em] text-stone-light">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Statement */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="The Kitchen"
                title={
                  <>
                    Food worth
                    <span className="block italic text-brass-dark">sitting down for.</span>
                  </>
                }
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-8 text-[1.0625rem] leading-[1.9] text-stone lg:pt-4">
              <p className="font-serif text-3xl font-light leading-snug text-ink">
                Stocks made from scratch. Sauces built from fond. Produce bought for the week
                it&apos;s cooked, not the month it sits.
              </p>
              <p>
                I spent over a decade on professional lines, most recently in a high-volume
                restaurant kitchen, learning what it takes to put out food that is consistent,
                seasonal, and genuinely craveable — night after night, for hundreds of people at
                a time.
              </p>
              <p>
                Going independent let me point all of that at one household at a time. No printed
                menu board, no compromise on the ingredient list, and no shortcuts hiding under a
                sauce.
              </p>
              <Link
                href="/about"
                className="link-quiet eyebrow inline-block pt-2 text-[0.65rem] text-brass-dark"
              >
                Read the full story
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-ink/10 bg-linen/40">
        <div className="mx-auto max-w-[88rem] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <SectionHeading eyebrow="Services" title="Three ways to eat well" />
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <Reveal key={service.title} delay={index * 120} className="bg-bone">
                <div className="flex h-full flex-col p-10 lg:p-12">
                  <span className="numeral text-sm tracking-[0.2em] text-brass">
                    {service.index}
                  </span>
                  <h3 className="mt-8 font-serif text-3xl font-light text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-5 flex-1 text-[0.95rem] leading-[1.85] text-stone">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="link-quiet eyebrow mt-10 inline-block text-[0.62rem] text-ink"
                  >
                    {service.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured recipes */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="From the Archive" title="Recipes to cook this week" />
            <Link
              href="/recipes"
              className="link-quiet eyebrow shrink-0 text-[0.65rem] text-brass-dark"
            >
              All recipes
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_RECIPES.map((recipe, index) => (
            <Reveal key={recipe.slug} delay={index * 120}>
              <RecipeCard recipe={recipe} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Meal prep feature */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="mx-auto grid max-w-[88rem] items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-32">
          <Reveal>
            <Media
              tone="cream-dark"
              label="A week of prepared meals, portioned and labelled"
              src="/images/food/meal-prep-containers.webp"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/5] w-full"
            />
          </Reveal>

          <Reveal delay={140}>
            <SectionHeading
              tone="light"
              eyebrow="Weekly Meal Prep"
              title={
                <>
                  Open the fridge to
                  <span className="block italic text-brass-light">a week already handled.</span>
                </>
              }
              description="Choose a package, tell me how your household eats, and the week arrives portioned, labelled, and ready to reheat. No shopping, no scramble, no dishes."
            />
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button href="/meal-prep" variant="light">
                Packages &amp; Pricing
              </Button>
              <Button href="/contact" variant="ghost">
                Enquire
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <SectionHeading eyebrow="Kind Words" title="From the table" align="center" />
        </Reveal>

        <div className="mt-16 grid gap-x-16 gap-y-14 border-t border-ink/10 pt-14 sm:grid-cols-2">
          {FEATURED_TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 140}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <Link href="/testimonials" className="link-quiet eyebrow text-[0.65rem] text-brass-dark">
            Read all testimonials
          </Link>
        </Reveal>
      </section>
    </>
  );
}
