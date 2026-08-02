import type { MetadataRoute } from "next";
import { RECIPES } from "@/lib/recipes";

const BASE_URL = "https://example.com";

const STATIC_ROUTES = [
  "",
  "/about",
  "/recipes",
  "/meal-prep",
  "/testimonials",
  "/gallery",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const recipeEntries = RECIPES.map((recipe) => ({
    url: `${BASE_URL}/recipes/${recipe.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...recipeEntries];
}
