import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What meal-prep clients and recipe followers say about cooking with Chef Jarvis.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="mx-auto max-w-[88rem] px-6 pb-24 pt-36 lg:px-10 lg:pb-32 lg:pt-48">
        <div className="animate-rise">
          <SectionHeading
            as="h1"
            align="center"
            eyebrow="Kind Words"
            title="From the table"
            description="A few notes from meal-prep clients and home cooks who have made the recipes their own."
          />
        </div>

        <div className="mt-20 grid gap-x-16 gap-y-16 border-t border-ink/10 pt-16 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={(index % 3) * 120}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[88rem] px-6 py-24 text-center lg:px-10 lg:py-32">
          <Reveal>
            <SectionHeading
              tone="light"
              align="center"
              eyebrow="Join Them"
              title="A seat opens up now and then."
              description="The weekly roster is deliberately small. Tell me about your household and I'll let you know what's available."
            />
            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/meal-prep" variant="light">
                Meal Prep Packages
              </Button>
              <Button href="/contact" variant="ghost">
                Enquire
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
