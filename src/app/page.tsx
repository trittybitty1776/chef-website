import Link from "next/link";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import RecipeCard from "@/components/recipes/RecipeCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { RECIPES } from "@/lib/recipes";
import { TESTIMONIALS } from "@/lib/testimonials";

const FEATURED_RECIPES = RECIPES.slice(0, 3);
const FEATURED_TESTIMONIALS = TESTIMONIALS.slice(0, 3);

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-linen">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
          <div>
            <p className="font-script text-2xl text-terracotta">Hi, I&apos;m Tristan</p>
            <h1 className="mt-2 font-serif text-4xl font-semibold leading-tight text-walnut sm:text-5xl lg:text-6xl">
              Restaurant-trained cooking, brought to your kitchen table.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-walnut-light">
              Former chef at Earls Kitchen &amp; Bar, now cooking independently — scratch-made
              recipes to try at home, and private meal-prep for people who want restaurant-quality
              food without the restaurant.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/recipes"
                className="rounded-full bg-terracotta px-7 py-3 text-center text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-terracotta-dark"
              >
                View Recipes
              </Link>
              <Link
                href="/meal-prep"
                className="rounded-full border border-walnut/20 bg-transparent px-7 py-3 text-center text-sm font-semibold text-walnut transition-colors hover:border-walnut/40 hover:bg-walnut/5"
              >
                Book Meal Prep
              </Link>
            </div>
          </div>
          <PlaceholderImage
            tone="terracotta"
            label="Chef Tristan plating a dish"
            icon="👨‍🍳"
            className="aspect-[4/3] w-full rounded-3xl shadow-lg lg:aspect-square"
          />
        </div>
      </section>

      {/* Intro strip */}
      <section className="border-y border-walnut/10 bg-cream-dark/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:grid-cols-3 lg:px-8">
          {[
            { label: "Years in professional kitchens", value: "10+" },
            { label: "Recipes shared with home cooks", value: "50+" },
            { label: "Weekly meal-prep households", value: "30+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl font-semibold text-terracotta">{stat.value}</p>
              <p className="mt-1 text-sm text-walnut-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured recipes */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-script text-xl text-sage-dark">fresh from the kitchen</p>
            <h2 className="mt-1 font-serif text-3xl font-semibold text-walnut sm:text-4xl">
              Featured Recipes
            </h2>
          </div>
          <Link
            href="/recipes"
            className="text-sm font-semibold text-terracotta hover:text-terracotta-dark"
          >
            Browse all recipes →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_RECIPES.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* Meal prep teaser */}
      <section className="bg-walnut text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-script text-2xl text-terracotta-light">no more Sunday scramble</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
              Private Meal Prep, Cooked Around Your Week
            </h2>
            <p className="mt-4 max-w-md text-cream/75">
              Choose a package, tell me your preferences, and open the fridge to a week of
              restaurant-quality meals — portioned, labeled, and ready to reheat.
            </p>
            <Link
              href="/meal-prep"
              className="mt-6 inline-block rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
            >
              See Packages &amp; Pricing
            </Link>
          </div>
          <PlaceholderImage
            tone="cream-dark"
            label="Packed weekly meal-prep containers"
            icon="🥡"
            className="aspect-[4/3] w-full rounded-3xl"
          />
        </div>
      </section>

      {/* Testimonials snippet */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-script text-xl text-sage-dark">kind words</p>
          <h2 className="mt-1 font-serif text-3xl font-semibold text-walnut sm:text-4xl">
            What Clients Are Saying
          </h2>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/testimonials" className="text-sm font-semibold text-terracotta hover:text-terracotta-dark">
            Read more testimonials →
          </Link>
        </div>
      </section>
    </div>
  );
}
