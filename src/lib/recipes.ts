export type RecipeCategory =
  | "Quick Meals"
  | "Family-Style"
  | "Comfort Food"
  | "Dinner Party";

export type DietaryTag =
  | "Vegetarian"
  | "Vegan"
  | "Gluten-Free"
  | "Dairy-Free"
  | "High-Protein";

export type ImageTone = "terracotta" | "sage" | "walnut" | "cream-dark";

export type Recipe = {
  slug: string;
  title: string;
  description: string;
  category: RecipeCategory;
  dietaryTags: DietaryTag[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  imageTone: ImageTone;
  ingredients: string[];
  steps: string[];
};

export const RECIPE_CATEGORIES: RecipeCategory[] = [
  "Quick Meals",
  "Family-Style",
  "Comfort Food",
  "Dinner Party",
];

export const DIETARY_TAGS: DietaryTag[] = [
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Dairy-Free",
  "High-Protein",
];

export const RECIPES: Recipe[] = [
  {
    slug: "brown-butter-miso-salmon",
    title: "Brown Butter Miso Salmon",
    description:
      "Crispy-skinned salmon glazed with brown butter and white miso, finished with charred scallions.",
    category: "Quick Meals",
    dietaryTags: ["Gluten-Free", "High-Protein"],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    servings: 4,
    imageTone: "terracotta",
    ingredients: [
      "4 salmon fillets, skin on",
      "3 tbsp unsalted butter",
      "2 tbsp white miso paste",
      "1 tbsp honey",
      "1 tbsp rice vinegar",
      "3 scallions, charred and sliced",
      "Flaky salt, to finish",
    ],
    steps: [
      "Pat salmon fillets dry and season generously with salt.",
      "Sear skin-side down in a hot pan until the skin is crisp, about 5 minutes.",
      "Flip and cook 3-4 minutes more, then remove and rest.",
      "In the same pan, brown the butter until nutty and fragrant.",
      "Whisk in miso, honey, and rice vinegar to form a glaze.",
      "Spoon the glaze over the salmon and top with charred scallions.",
    ],
  },
  {
    slug: "sunday-braised-short-ribs",
    title: "Sunday Braised Short Ribs",
    description:
      "Red wine braised short ribs, fall-apart tender, served over creamy polenta.",
    category: "Family-Style",
    dietaryTags: ["Gluten-Free"],
    prepTimeMinutes: 25,
    cookTimeMinutes: 210,
    servings: 6,
    imageTone: "walnut",
    ingredients: [
      "4 lbs bone-in short ribs",
      "2 cups dry red wine",
      "2 cups beef stock",
      "1 onion, diced",
      "2 carrots, diced",
      "3 cloves garlic, smashed",
      "2 sprigs rosemary",
      "2 cups polenta, cooked",
    ],
    steps: [
      "Season short ribs and sear on all sides until deeply browned.",
      "Remove ribs, then sauté onion and carrots in the same pot.",
      "Add garlic and cook until fragrant, about 1 minute.",
      "Deglaze with red wine and reduce by half.",
      "Return ribs to the pot, add stock and rosemary.",
      "Cover and braise at 325°F for 3 hours, until fork-tender.",
      "Serve over creamy polenta with the reduced braising liquid.",
    ],
  },
  {
    slug: "charred-corn-black-bean-tacos",
    title: "Charred Corn & Black Bean Tacos",
    description:
      "Smoky charred corn, black beans, and lime crema piled onto warm tortillas.",
    category: "Quick Meals",
    dietaryTags: ["Vegetarian", "Gluten-Free"],
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 4,
    imageTone: "sage",
    ingredients: [
      "2 cups corn kernels",
      "1 can black beans, rinsed",
      "8 corn tortillas",
      "1/2 cup sour cream",
      "1 lime, zested and juiced",
      "1/4 cup cotija cheese",
      "Cilantro and pickled onion, to serve",
    ],
    steps: [
      "Char corn in a dry, hot skillet until blistered.",
      "Add black beans and warm through with a pinch of cumin.",
      "Whisk sour cream with lime zest and juice for the crema.",
      "Warm tortillas over an open flame or dry skillet.",
      "Assemble tacos with corn-bean mixture, crema, cotija, and cilantro.",
    ],
  },
  {
    slug: "walnut-herb-crusted-chicken",
    title: "Walnut Herb-Crusted Chicken",
    description:
      "Pan-roasted chicken breast under a crisp walnut and herb crust, pan sauce drizzled on top.",
    category: "Family-Style",
    dietaryTags: ["High-Protein"],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    servings: 4,
    imageTone: "terracotta",
    ingredients: [
      "4 boneless chicken breasts",
      "1/2 cup walnuts, finely chopped",
      "1/4 cup breadcrumbs",
      "2 tbsp chopped parsley",
      "1 egg, beaten",
      "2 tbsp Dijon mustard",
      "2 tbsp olive oil",
    ],
    steps: [
      "Brush chicken breasts with Dijon mustard.",
      "Combine walnuts, breadcrumbs, and parsley on a plate.",
      "Dip mustard-coated chicken into egg, then press into the walnut mixture.",
      "Pan-sear in olive oil until golden, then finish in a 400°F oven for 12 minutes.",
      "Rest for 5 minutes before slicing.",
    ],
  },
  {
    slug: "creamy-mushroom-risotto",
    title: "Creamy Wild Mushroom Risotto",
    description:
      "Slow-stirred arborio rice with a trio of wild mushrooms and shaved parmesan.",
    category: "Dinner Party",
    dietaryTags: ["Vegetarian", "Gluten-Free"],
    prepTimeMinutes: 15,
    cookTimeMinutes: 35,
    servings: 4,
    imageTone: "cream-dark",
    ingredients: [
      "1 1/2 cups arborio rice",
      "6 cups warm vegetable stock",
      "8 oz mixed wild mushrooms",
      "1/2 cup dry white wine",
      "1 shallot, minced",
      "3/4 cup grated parmesan",
      "2 tbsp butter",
    ],
    steps: [
      "Sauté mushrooms until golden, then set aside.",
      "Sweat shallot in butter until translucent.",
      "Add rice and toast for 1-2 minutes.",
      "Deglaze with white wine and cook until absorbed.",
      "Add warm stock one ladle at a time, stirring constantly until absorbed before adding more.",
      "Once rice is creamy and al dente, fold in mushrooms, parmesan, and a final knob of butter.",
    ],
  },
  {
    slug: "heirloom-tomato-burrata-salad",
    title: "Heirloom Tomato & Burrata Salad",
    description:
      "Peak-season heirloom tomatoes with creamy burrata, basil oil, and aged balsamic.",
    category: "Dinner Party",
    dietaryTags: ["Vegetarian", "Gluten-Free"],
    prepTimeMinutes: 15,
    cookTimeMinutes: 0,
    servings: 4,
    imageTone: "sage",
    ingredients: [
      "4 mixed heirloom tomatoes, sliced",
      "2 balls fresh burrata",
      "1/4 cup basil leaves, plus more for garnish",
      "1/4 cup olive oil",
      "2 tbsp aged balsamic reduction",
      "Flaky salt and cracked pepper",
    ],
    steps: [
      "Blend basil with olive oil and a pinch of salt to make basil oil.",
      "Arrange tomato slices on a platter and season with salt.",
      "Tear burrata over the top and drizzle with basil oil and balsamic reduction.",
      "Finish with cracked pepper and fresh basil leaves.",
    ],
  },
  {
    slug: "one-pan-lemon-herb-chicken-thighs",
    title: "One-Pan Lemon Herb Chicken Thighs",
    description:
      "Crispy-skinned chicken thighs roasted with lemon, garlic, and baby potatoes — one pan, no fuss.",
    category: "Quick Meals",
    dietaryTags: ["Gluten-Free", "Dairy-Free", "High-Protein"],
    prepTimeMinutes: 10,
    cookTimeMinutes: 35,
    servings: 4,
    imageTone: "terracotta",
    ingredients: [
      "8 bone-in, skin-on chicken thighs",
      "1 lb baby potatoes, halved",
      "1 lemon, sliced",
      "4 cloves garlic, smashed",
      "2 tbsp olive oil",
      "1 tbsp chopped rosemary and thyme",
    ],
    steps: [
      "Toss potatoes with olive oil, garlic, and herbs on a sheet pan.",
      "Nestle chicken thighs skin-side up among the potatoes.",
      "Tuck lemon slices around the pan.",
      "Roast at 425°F for 35 minutes, until skin is crisp and potatoes are golden.",
    ],
  },
  {
    slug: "vegan-coconut-red-lentil-curry",
    title: "Vegan Coconut Red Lentil Curry",
    description:
      "Warming red lentil curry simmered in coconut milk with ginger, turmeric, and fresh cilantro.",
    category: "Comfort Food",
    dietaryTags: ["Vegan", "Gluten-Free", "Dairy-Free"],
    prepTimeMinutes: 10,
    cookTimeMinutes: 25,
    servings: 4,
    imageTone: "sage",
    ingredients: [
      "1 1/2 cups red lentils, rinsed",
      "1 can coconut milk",
      "2 cups vegetable stock",
      "1 tbsp grated ginger",
      "2 tsp turmeric",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "Cilantro, to finish",
    ],
    steps: [
      "Sauté onion, garlic, and ginger until fragrant.",
      "Stir in turmeric and toast briefly.",
      "Add lentils, coconut milk, and stock.",
      "Simmer 20-25 minutes, stirring occasionally, until lentils break down.",
      "Season to taste and top with fresh cilantro.",
    ],
  },
  {
    slug: "classic-shepherds-pie",
    title: "Classic Shepherd's Pie",
    description:
      "Rich braised lamb and root vegetables under a golden, buttery mashed potato crust.",
    category: "Comfort Food",
    dietaryTags: ["Gluten-Free"],
    prepTimeMinutes: 25,
    cookTimeMinutes: 50,
    servings: 6,
    imageTone: "walnut",
    ingredients: [
      "2 lbs ground lamb",
      "2 carrots, diced",
      "1 cup peas",
      "1 onion, diced",
      "2 tbsp tomato paste",
      "1 cup beef stock",
      "3 lbs potatoes, mashed with butter and cream",
    ],
    steps: [
      "Brown lamb with onion and carrots until cooked through.",
      "Stir in tomato paste and cook 1 minute.",
      "Add stock and peas, simmer until slightly thickened.",
      "Transfer to a baking dish and top with mashed potatoes.",
      "Bake at 400°F for 25-30 minutes until golden on top.",
    ],
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return RECIPES.find((recipe) => recipe.slug === slug);
}

export function getTotalTimeMinutes(recipe: Recipe): number {
  return recipe.prepTimeMinutes + recipe.cookTimeMinutes;
}
