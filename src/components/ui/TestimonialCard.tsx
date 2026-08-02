import type { Testimonial } from "@/lib/testimonials";

type Props = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-walnut/10 bg-white/70 p-6 shadow-sm">
      <div>
        <div className="flex gap-0.5 text-terracotta" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <span key={index} aria-hidden="true">
              ★
            </span>
          ))}
        </div>
        <blockquote className="mt-4 font-serif text-lg leading-relaxed text-walnut">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="mt-6 text-sm">
        <span className="block font-semibold text-walnut">{testimonial.name}</span>
        <span className="text-walnut-light">{testimonial.context}</span>
      </figcaption>
    </figure>
  );
}
