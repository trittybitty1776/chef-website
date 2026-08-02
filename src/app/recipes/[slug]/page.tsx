import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
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

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/recipes" className="text-sm font-semibold text-terracotta hover:text-terracotta-dark">
        ← Back to recipes
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sage-dark">
          {recipe.category}
        </span>
        {recipe.dietaryTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-terracotta/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-terracotta-dark"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-walnut sm:text-5xl">
        {recipe.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-walnut-light">{recipe.description}</p>

      <PlaceholderImage
        tone={recipe.imageTone}
        label={recipe.title}
        src={recipe.imageSrc}
        className="mt-8 aspect-[16/9] w-full rounded-3xl shadow-lg"
      />

      <dl className="mt-8 grid grid-cols-2 gap-6 rounded-2xl border border-walnut/10 bg-white/60 p-6 sm:grid-cols-4">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-sage-dark">Prep</dt>
          <dd className="mt-1 font-serif text-xl font-semibold text-walnut">
            {recipe.prepTimeMinutes} min
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-sage-dark">Cook</dt>
          <dd className="mt-1 font-serif text-xl font-semibold text-walnut">
            {recipe.cookTimeMinutes} min
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-sage-dark">
            Servings
          </dt>
          <dd className="mt-1 font-serif text-xl font-semibold text-walnut">{recipe.servings}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-sage-dark">
            Category
          </dt>
          <dd className="mt-1 font-serif text-xl font-semibold text-walnut">{recipe.category}</dd>
        </div>
      </dl>

      <div className="mt-12 grid gap-12 sm:grid-cols-[1fr_1.5fr]">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-walnut">Ingredients</h2>
          <ul className="mt-4 space-y-2.5">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient} className="flex items-start gap-2 text-walnut-light">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-semibold text-walnut">Steps</h2>
          <ol className="mt-4 space-y-5">
            {recipe.steps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracotta text-sm font-semibold text-cream">
                  {index + 1}
                </span>
                <p className="text-walnut-light">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-16 rounded-2xl bg-walnut px-6 py-8 text-center text-cream">
        <p className="font-serif text-2xl font-semibold">Want meals like this without the prep?</p>
        <p className="mt-2 text-cream/75">
          Meal-prep clients get recipes like this one delivered ready to reheat.
        </p>
        <Link
          href="/meal-prep"
          className="mt-5 inline-block rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
        >
          Explore Meal Prep Services
        </Link>
      </div>
    </article>
  );
}
