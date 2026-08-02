"use client";

import { useState, type FormEvent } from "react";

const INQUIRY_TYPES = ["Meal Prep", "Recipe Question", "Private Event", "Other"] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder: wire up to an email/form backend (Resend, Formspree, etc.) later.
    setStatus("submitted");
  };

  if (status === "submitted") {
    return (
      <div className="rounded-2xl border border-sage/30 bg-sage/10 p-8 text-center">
        <p className="font-serif text-2xl font-semibold text-sage-dark">Thanks for reaching out!</p>
        <p className="mt-2 text-walnut-light">
          I&apos;ll get back to you within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-walnut">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-walnut/20 bg-white px-4 py-2.5 text-sm text-walnut outline-none focus:ring-2 focus:ring-terracotta"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-walnut">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-walnut/20 bg-white px-4 py-2.5 text-sm text-walnut outline-none focus:ring-2 focus:ring-terracotta"
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiryType" className="block text-sm font-medium text-walnut">
          What are you reaching out about?
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          defaultValue={INQUIRY_TYPES[0]}
          className="mt-1.5 w-full rounded-lg border border-walnut/20 bg-white px-4 py-2.5 text-sm text-walnut outline-none focus:ring-2 focus:ring-terracotta"
        >
          {INQUIRY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-walnut">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full rounded-lg border border-walnut/20 bg-white px-4 py-2.5 text-sm text-walnut outline-none focus:ring-2 focus:ring-terracotta"
          placeholder="Tell me about your household, event, or question..."
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
      >
        Send Inquiry
      </button>
    </form>
  );
}
