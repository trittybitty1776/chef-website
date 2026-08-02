import type { Metadata } from "next";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import type { ImageTone } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look at plated dishes, meal-prep spreads, and kitchen moments from Chef Tristan.",
};

const GALLERY_ITEMS: { label: string; tone: ImageTone; icon: string; span?: string }[] = [
  { label: "Seared salmon with brown butter glaze", tone: "terracotta", icon: "🐟", span: "sm:row-span-2" },
  { label: "Sunday short ribs over polenta", tone: "walnut", icon: "🍖" },
  { label: "Heirloom tomato and burrata salad", tone: "sage", icon: "🍅" },
  { label: "Weekly meal-prep containers", tone: "cream-dark", icon: "🥡" },
  { label: "Wild mushroom risotto, table-side", tone: "walnut", icon: "🍄", span: "sm:row-span-2" },
  { label: "Charred corn tacos, fresh off the pan", tone: "sage", icon: "🌽" },
  { label: "Dinner party plating in progress", tone: "terracotta", icon: "🍽" },
  { label: "Herb-crusted chicken, resting", tone: "cream-dark", icon: "🌿" },
  { label: "Kitchen prep, mise en place", tone: "walnut", icon: "🔪" },
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
            className={`h-full w-full rounded-2xl ${item.span ?? ""}`}
          />
        ))}
      </div>
    </div>
  );
}
