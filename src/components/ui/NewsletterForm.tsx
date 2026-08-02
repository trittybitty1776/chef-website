"use client";

import { useState, type FormEvent } from "react";

type Props = {
  variant?: "light" | "dark";
};

export default function NewsletterForm({ variant = "light" }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder: wire up to an email provider (Mailchimp, Buttondown, etc.) later.
    setStatus("submitted");
  };

  const isDark = variant === "dark";

  if (status === "submitted") {
    return (
      <p className={`mt-4 text-sm ${isDark ? "text-sage-light" : "text-sage-dark"}`}>
        You&apos;re on the list! Watch your inbox for the next recipe.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex max-w-sm gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        className={`w-full rounded-full border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-terracotta ${
          isDark
            ? "border-cream/20 bg-cream/5 text-cream placeholder:text-cream/40"
            : "border-walnut/20 bg-white text-walnut placeholder:text-walnut/40"
        }`}
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
      >
        Sign up
      </button>
    </form>
  );
}
