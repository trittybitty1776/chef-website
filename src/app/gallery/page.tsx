import type { Metadata } from "next";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import type { ImageTone } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look at plated dishes, meal-prep spreads, and kitchen moments from Chef Tristan.",
};

const GALLERY_ITEMS: { label: string; tone: ImageTone; icon: string; imageSrc: string; span?: string }[] = [
  {
    label: "Seared salmon with brown butter glaze",
    tone: "terracotta",
    icon: "🐟",
    imageSrc: "/images/food/gallery-1.jpg",
    span: "sm:row-span-2",
  },
  {
    label: "Sunday short ribs over polenta",
    tone: "walnut",
    icon: "🍖",
    imageSrc: "/images/food/gallery-2.jpg",
  },
  {
    label: "Heirloom tomato and burrata salad",
    tone: "sage",
    icon: "🍅",
    imageSrc: "/images/food/gallery-3.jpg",
  },
  {
    label: "Weekly meal-prep containers",
    tone: "cream-dark",
    icon: "🥡",
    imageSrc: "/images/food/gallery-4.jpg",
  },
  {
    label: "Wild mushroom risotto, table-side",
    tone: "walnut",
    icon: "🍄",
    imageSrc: "/images/food/gallery-5.jpg",
    span: "sm:row-span-2",
  },
  {
    label: "Charred corn tacos, fresh off the pan",
    tone: "sage",
    icon: "🌽",
    imageSrc: "/images/food/gallery-6.jpg",
  },
  {
    label: "Dinner party plating in progress",
    tone: "terracotta",
    icon: "🍽",
    imageSrc: "/images/food/gallery-7.jpg",
  },
  {
    label: "Herb-crusted chicken, resting",
    tone: "cream-dark",
    icon: "🌿",
    imageSrc: "/images/food/gallery-8.jpg",
  },
  {
    label: "Kitchen prep, mise en place",
    tone: "walnut",
    icon: "🔪",
    imageSrc: "/images/food/gallery-9.jpg",
  },
];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="font-script text-2xl text-terracotta">from the pass</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-walnut sm:text-5xl">
          Gallery
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-walnut-light">
          A look at plated dishes, meal-prep spreads, and kitchen moments. Full photography
          coming soon — follow along on Instagram for the latest.
        </p>
      </div>

      <div className="mt-12 grid auto-rows-[180px] gap-4 sm:grid-cols-3">
        {GALLERY_ITEMS.map((item) => (
          <PlaceholderImage
            key={item.label}
            tone={item.tone}
            label={item.label}
            icon={item.icon}
            src={item.imageSrc}
            className={`h-full w-full rounded-2xl ${item.span ?? ""}`}
          />
        ))}
      </div>
    </div>
  );
}
