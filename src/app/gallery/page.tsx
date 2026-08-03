import type { Metadata } from "next";
import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ImageTone } from "@/lib/recipes";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look at plated dishes, prepared weeks, and kitchen moments from Chef Tristan.",
};

type GalleryItem = {
  label: string;
  tone: ImageTone;
  imageSrc: string;
  /** Column span within the 6-column editorial grid. */
  span: string;
  ratio: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    label: "Seared salmon with brown butter glaze",
    tone: "terracotta",
    imageSrc: "/images/food/gallery-1.webp",
    span: "lg:col-span-4",
    ratio: "aspect-[4/3]",
  },
  {
    label: "Sunday short ribs over polenta",
    tone: "walnut",
    imageSrc: "/images/food/gallery-2.webp",
    span: "lg:col-span-2",
    ratio: "aspect-[3/4]",
  },
  {
    label: "Heirloom tomato and burrata salad",
    tone: "sage",
    imageSrc: "/images/food/gallery-3.webp",
    span: "lg:col-span-2",
    ratio: "aspect-[3/4]",
  },
  {
    label: "A week of prepared meals",
    tone: "cream-dark",
    imageSrc: "/images/food/gallery-4.webp",
    span: "lg:col-span-4",
    ratio: "aspect-[4/3]",
  },
  {
    label: "Wild mushroom risotto, table-side",
    tone: "walnut",
    imageSrc: "/images/food/gallery-5.webp",
    span: "lg:col-span-3",
    ratio: "aspect-[4/3]",
  },
  {
    label: "Charred corn tacos, fresh off the pan",
    tone: "sage",
    imageSrc: "/images/food/gallery-6.webp",
    span: "lg:col-span-3",
    ratio: "aspect-[4/3]",
  },
  {
    label: "Dinner party plating in progress",
    tone: "terracotta",
    imageSrc: "/images/food/gallery-7.webp",
    span: "lg:col-span-2",
    ratio: "aspect-[3/4]",
  },
  {
    label: "Herb-crusted chicken, resting",
    tone: "cream-dark",
    imageSrc: "/images/food/gallery-8.webp",
    span: "lg:col-span-2",
    ratio: "aspect-[3/4]",
  },
  {
    label: "Mise en place",
    tone: "walnut",
    imageSrc: "/images/food/gallery-9.webp",
    span: "lg:col-span-2",
    ratio: "aspect-[3/4]",
  },
];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-[88rem] px-6 pb-24 pt-36 lg:px-10 lg:pb-32 lg:pt-48">
      <div className="animate-rise">
        <SectionHeading
          as="h1"
          align="center"
          eyebrow="From the Pass"
          title="Gallery"
          description="Plated dishes, prepared weeks, and quiet moments between services."
        />
      </div>

      <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {GALLERY_ITEMS.map((item, index) => (
          <Reveal key={item.label} delay={(index % 3) * 120} className={`group ${item.span}`}>
            <figure>
              <Media
                tone={item.tone}
                label={item.label}
                src={item.imageSrc}
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                className={`w-full ${item.ratio}`}
              />
              <figcaption className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-stone-light">
                {item.label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
