import type { Metadata } from "next";
import RecipeFilterGrid from "@/components/recipes/RecipeFilterGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { RECIPES } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "Recipes",
  description:
    "Browse scratch-made recipes from Chef Tristan — quick weeknight meals, family-style dinners, comfort food, and dinner-party favourites.",
};

export default function RecipesPage() {
  return (
    <div className="mx-auto max-w-[88rem] px-6 pb-24 pt-36 lg:px-10 lg:pb-32 lg:pt-48">
      <div className="animate-rise">
        <SectionHeading
          as="h1"
          align="center"
          eyebrow="The Archive"
          title="Recipes"
          description="The dishes I actually cook at home — restaurant technique translated to a single pan and a weeknight. Filter by course or dietary need."
        />
      </div>

      <div className="mt-16 lg:mt-20">
        <RecipeFilterGrid recipes={RECIPES} />
      </div>
    </div>
  );
}
