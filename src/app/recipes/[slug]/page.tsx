import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Media from "@/components/ui/Media";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { RECIPES, getRecipeBySlug } from "@/lib/recipes";

type PageParams = {
  slug: string;
};

export function generateStaticParams(): PageParams[] {
  return RECIPES.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return { title: "Recipe Not Found" };
  }

  return {
    title: recipe.title,
    description: recipe.description,
  };
}

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  const facts = [
    { label: "Prep", value: `${recipe.prepTimeMinutes}`, unit: "min" },
    { label: "Cook", value: `${recipe.cookTimeMinutes}`, unit: "min" },
    { label: "Serves", value: `${recipe.servings}`, unit: "" },
    { label: "Course", value: recipe.category, unit: "" },
  ];

  return (
    <article>
      <div className="mx-auto max-w-[88rem] px-6 pt-32 lg:px-10 lg:pt-40">
        <Link
          href="/recipes"
          className="link-quiet eyebrow text-[0.62rem] text-stone-light hover:text-ink"
        >
          &larr; The Archive
        </Link>
      </div>

      <header className="mx-auto max-w-[88rem] px-6 pb-14 pt-10 lg:px-10 lg:pb-20">
        <div className="animate-rise max-w-4xl">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.62rem] uppercase tracking-[0.24em] text-brass-dark">
            <span>{recipe.category}</span>
            {recipe.dietaryTags.map((tag) => (
              <span key={tag} className="flex items-center gap-5 text-stone-light">
                <span className="h-px w-4 bg-stone-light/40" />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="display mt-7 text-[2.75rem] text-ink sm:text-6xl lg:text-[4.25rem]">
            {recipe.title}
          </h1>

          <p className="lede mt-7 max-w-2xl text-stone">{recipe.description}</p>
        </div>
      </header>

      <Media
        tone={recipe.imageTone}
        label={recipe.title}
        src={recipe.imageSrc}
        sizes="100vw"
        priority
        className="aspect-[16/9] w-full lg:aspect-[21/9]"
      />

      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <dl className="grid grid-cols-2 gap-8 border-b border-ink/10 py-12 sm:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="eyebrow text-[0.6rem] text-stone-light">{fact.label}</dt>
              <dd className="numeral mt-3 text-3xl text-ink">
                {fact.value}
                {fact.unit && (
                  <span className="ml-2 text-sm tracking-[0.15em] text-stone-light">
                    {fact.unit}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="grid gap-16 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <h2 className="eyebrow text-[0.62rem] text-brass-dark">Ingredients</h2>
              <ul className="mt-8 space-y-4">
                {recipe.ingredients.map((ingredient) => (
                  <li
                    key={ingredient}
                    className="flex gap-4 border-b border-ink/10 pb-4 text-[0.95rem] leading-relaxed text-stone"
                  >
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-brass" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="eyebrow text-[0.62rem] text-brass-dark">Method</h2>
            <ol className="mt-8 space-y-10">
              {recipe.steps.map((step, index) => (
                <li key={step} className="flex gap-6">
                  <span className="numeral shrink-0 text-2xl text-brass">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[1.0625rem] leading-[1.9] text-stone">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>

      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-6 py-24 text-center lg:px-10 lg:py-32">
          <Reveal>
            <SectionHeading
              tone="light"
              align="center"
              eyebrow="Or Let Me Cook"
              title="Want meals like this without the prep?"
              description="Meal-prep clients get dishes like this one portioned, labelled, and ready to reheat."
            />
            <div className="mt-12 flex justify-center">
              <Button href="/meal-prep" variant="light">
                Meal Prep Packages
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
