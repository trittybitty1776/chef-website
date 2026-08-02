export type Testimonial = {
  name: string;
  context: string;
  quote: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya M.",
    context: "Weekly meal-prep client, 6 months",
    quote:
      "I used to dread Sunday meal prep. Now I open the fridge to food that actually tastes like a restaurant made it — because one did.",
    rating: 5,
  },
  {
    name: "Jordan & Ken",
    context: "Family-Style package",
    quote:
      "Our kids ask for 'the chicken from the fridge guy' by name. Portion sizes are perfect for our family of four and nothing goes to waste.",
    rating: 5,
  },
  {
    name: "Alicia R.",
    context: "Dinner party catering",
    quote:
      "Booked Tristan for an eight-person dinner party and it felt like a private restaurant opening in my kitchen. Every course landed.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    context: "Performance meal-prep client",
    quote:
      "High-protein, no-fuss meals that fit my training schedule. Macros are always spot on and nothing tastes like 'diet food.'",
    rating: 5,
  },
  {
    name: "Danielle F.",
    context: "Recipe follower",
    quote:
      "Tried the braised short rib recipe from the blog for a dinner party — guests thought I'd been secretly taking chef lessons.",
    rating: 5,
  },
  {
    name: "The Osei Family",
    context: "Monthly meal-prep client, 1 year",
    quote:
      "A full year in and the food still doesn't feel repetitive. Tristan rotates the menu with the seasons and always checks in first.",
    rating: 5,
  },
];
