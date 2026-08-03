import type { Testimonial } from "@/lib/testimonials";

type Props = {
  testimonial: Testimonial;
  tone?: "dark" | "light";
};

export default function TestimonialCard({ testimonial, tone = "dark" }: Props) {
  const isLight = tone === "light";

  return (
    <figure className="flex h-full flex-col">
      <div
        className={`flex gap-1.5 text-[0.7rem] tracking-[0.3em] ${
          isLight ? "text-brass-light" : "text-brass"
        }`}
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <span key={index} aria-hidden="true">
            &#9670;
          </span>
        ))}
      </div>

      <blockquote
        className={`mt-7 flex-1 font-serif text-2xl font-light italic leading-[1.5] ${
          isLight ? "text-bone/90" : "text-ink"
        }`}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <figcaption
        className={`mt-8 border-t pt-5 ${isLight ? "border-bone/15" : "border-ink/10"}`}
      >
        <span className={`eyebrow block text-[0.62rem] ${isLight ? "text-bone" : "text-ink"}`}>
          {testimonial.name}
        </span>
        <span className={`mt-2 block text-xs ${isLight ? "text-bone/45" : "text-stone-light"}`}>
          {testimonial.context}
        </span>
      </figcaption>
    </figure>
  );
}
