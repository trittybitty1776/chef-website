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

export default function RecipeFilterGrid({ recipes }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [dietaryTag, setDietaryTag] = useState<DietaryTag | "All">("All");

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
      <div className="flex flex-col gap-4 rounded-2xl border border-walnut/10 bg-white/60 p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <label className="relative flex-1">
          <span className="sr-only">Search recipes</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search recipes..."
            className="w-full rounded-full border border-walnut/20 bg-cream px-5 py-2.5 text-sm text-walnut placeholder:text-walnut/40 outline-none focus:ring-2 focus:ring-terracotta"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value as CategoryFilter)}
            className="rounded-full border border-walnut/20 bg-cream px-4 py-2.5 text-sm text-walnut outline-none focus:ring-2 focus:ring-terracotta"
            aria-label="Filter by category"
          >
            <option value="All">All categories</option>
            {RECIPE_CATEGORIES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={dietaryTag}
            onChange={(event) => setDietaryTag(event.target.value as DietaryTag | "All")}
            className="rounded-full border border-walnut/20 bg-cream px-4 py-2.5 text-sm text-walnut outline-none focus:ring-2 focus:ring-terracotta"
            aria-label="Filter by dietary tag"
          >
            <option value="All">All dietary tags</option>
            {DIETARY_TAGS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-4 text-sm text-walnut-light">
        {filteredRecipes.length} {filteredRecipes.length === 1 ? "recipe" : "recipes"} found
      </p>

      {filteredRecipes.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-dashed border-walnut/20 py-16 text-center text-walnut-light">
          No recipes match your search. Try a different filter.
        </div>
      )}
    </div>
  );
}
