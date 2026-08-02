import type { Metadata } from "next";
import RecipeFilterGrid from "@/components/recipes/RecipeFilterGrid";
import { RECIPES } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "Recipes",
  description:
    "Browse scratch-made recipes from Chef Tristan — quick weeknight meals, family-style dinners, comfort food, and dinner-party favorites.",
};

export default function RecipesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="font-script text-2xl text-terracotta">the recipe box</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-walnut sm:text-5xl">
          Recipes
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-walnut-light">
          Scratch-made dishes I actually cook at home — filter by category or dietary need to find
          your next weeknight staple or dinner-party showstopper.
        </p>
      </div>

      <div className="mt-10">
        <RecipeFilterGrid recipes={RECIPES} />
      </div>
    </div>
  );
}
