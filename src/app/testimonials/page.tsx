import type { Metadata } from "next";
import Link from "next/link";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What meal-prep clients and recipe followers say about cooking with Chef Tristan.",
};

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="font-script text-2xl text-terracotta">kind words</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-walnut sm:text-5xl">
          Testimonials
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-walnut-light">
          A few notes from meal-prep clients and home cooks who&apos;ve tried the recipes.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-walnut px-6 py-10 text-center text-cream">
        <p className="font-serif text-2xl font-semibold">Ready to become our next client?</p>
        <Link
          href="/meal-prep"
          className="mt-5 inline-block rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
        >
          Explore Meal Prep Services
        </Link>
      </div>
    </div>
  );
}
