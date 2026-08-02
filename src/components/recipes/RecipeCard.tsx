import Link from "next/link";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { getTotalTimeMinutes, type Recipe } from "@/lib/recipes";

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-walnut/10 bg-white/60 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <PlaceholderImage
        tone={recipe.imageTone}
        label={recipe.title}
        src={recipe.imageSrc}
        className="aspect-[4/3] w-full transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-sage-dark">
          <span>{recipe.category}</span>
          <span>{getTotalTimeMinutes(recipe)} min</span>
        </div>
        <h3 className="font-serif text-xl font-semibold leading-snug text-walnut group-hover:text-terracotta">
          {recipe.title}
        </h3>
        <p className="line-clamp-2 text-sm text-walnut-light">{recipe.description}</p>
        {recipe.dietaryTags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
            {recipe.dietaryTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-sage/10 px-2.5 py-1 text-[11px] font-medium text-sage-dark"
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
