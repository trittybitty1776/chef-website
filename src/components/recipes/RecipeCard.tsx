import Link from "next/link";
import Media from "@/components/ui/Media";
import { getTotalTimeMinutes, type Recipe } from "@/lib/recipes";

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <Link href={`/recipes/${recipe.slug}`} className="group flex flex-col">
      <Media
        tone={recipe.imageTone}
        label={recipe.title}
        src={recipe.imageSrc}
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
        className="aspect-[4/5] w-full"
      />

      <div className="flex flex-1 flex-col pt-6">
        <div className="flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.24em] text-stone-light">
          <span>{recipe.category}</span>
          <span className="h-px w-4 bg-stone-light/40" />
          <span>{getTotalTimeMinutes(recipe)} min</span>
        </div>

        <h3 className="mt-3 font-serif text-[1.6rem] font-light leading-snug text-ink transition-colors duration-500 group-hover:text-brass-dark">
          {recipe.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-stone">
          {recipe.description}
        </p>

        {recipe.dietaryTags.length > 0 && (
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ink/10 pt-4">
            {recipe.dietaryTags.map((tag) => (
              <span
                key={tag}
                className="text-[0.6rem] uppercase tracking-[0.2em] text-brass-dark"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
