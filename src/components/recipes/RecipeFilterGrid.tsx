"use client";

import { useMemo, useState } from "react";
import RecipeCard from "@/components/recipes/RecipeCard";
import {
  DIETARY_TAGS,
  RECIPE_CATEGORIES,
  type DietaryTag,
  type Recipe,
  type RecipeCategory,
} from "@/lib/recipes";

type Props = {
  recipes: Recipe[];
};

type CategoryFilter = RecipeCategory | "All";
type DietaryFilter = DietaryTag | "All";

const FILTER_BASE =
  "border-b pb-1 text-[0.68rem] uppercase tracking-[0.2em] transition-colors duration-300";

function filterClass(isActive: boolean): string {
  return `${FILTER_BASE} ${
    isActive ? "border-brass text-ink" : "border-transparent text-stone-light hover:text-ink"
  }`;
}

export default function RecipeFilterGrid({ recipes }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [dietaryTag, setDietaryTag] = useState<DietaryFilter>("All");

  const filteredRecipes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return recipes.filter((recipe) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        recipe.title.toLowerCase().includes(normalizedQuery) ||
        recipe.description.toLowerCase().includes(normalizedQuery);
      const matchesCategory = category === "All" || recipe.category === category;
      const matchesDietary = dietaryTag === "All" || recipe.dietaryTags.includes(dietaryTag);
      return matchesQuery && matchesCategory && matchesDietary;
    });
  }, [recipes, query, category, dietaryTag]);

  return (
    <div>
      <div className="border-y border-ink/10 py-8">
        <label className="block">
          <span className="sr-only">Search recipes</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search the archive"
            className="w-full border-b border-ink/15 bg-transparent pb-4 font-serif text-2xl font-light text-ink outline-none transition-colors placeholder:text-stone-light/60 focus:border-brass focus-visible:outline-none sm:text-3xl"
          />
        </label>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <span className="eyebrow text-[0.6rem] text-stone-light/70">Course</span>
            <button
              type="button"
              onClick={() => setCategory("All")}
              className={filterClass(category === "All")}
            >
              All
            </button>
            {RECIPE_CATEGORIES.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setCategory(option)}
                className={filterClass(category === option)}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <span className="eyebrow text-[0.6rem] text-stone-light/70">Dietary</span>
            <button
              type="button"
              onClick={() => setDietaryTag("All")}
              className={filterClass(dietaryTag === "All")}
            >
              All
            </button>
            {DIETARY_TAGS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setDietaryTag(option)}
                className={filterClass(dietaryTag === option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 text-[0.68rem] uppercase tracking-[0.2em] text-stone-light">
        {String(filteredRecipes.length).padStart(2, "0")}{" "}
        {filteredRecipes.length === 1 ? "recipe" : "recipes"}
      </p>

      {filteredRecipes.length > 0 ? (
        <div className="mt-10 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="mt-16 border-t border-ink/10 py-24 text-center">
          <p className="font-serif text-2xl font-light italic text-stone">
            Nothing on the pass matches that.
          </p>
          <p className="mt-3 text-sm text-stone-light">Try a different course or dietary filter.</p>
        </div>
      )}
    </div>
  );
}
