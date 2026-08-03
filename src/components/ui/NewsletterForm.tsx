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
      <p
        className={`mt-8 font-serif text-xl font-light italic ${
          isDark ? "text-brass-light" : "text-brass-dark"
        }`}
      >
        You&apos;re on the list. Watch for the next menu.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-sm">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div
        className={`flex items-center border-b transition-colors ${
          isDark
            ? "border-bone/25 focus-within:border-brass-light"
            : "border-ink/20 focus-within:border-brass"
        }`}
      >
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="your email"
          className={`w-full bg-transparent py-3 text-sm outline-none focus-visible:outline-none ${
            isDark
              ? "text-bone placeholder:text-bone/30"
              : "text-ink placeholder:text-stone-light/70"
          }`}
        />
        <button
          type="submit"
          className={`shrink-0 pl-4 text-[0.65rem] font-medium uppercase tracking-[0.22em] transition-colors ${
            isDark ? "text-bone/70 hover:text-brass-light" : "text-stone hover:text-brass-dark"
          }`}
        >
          Join
        </button>
      </div>
    </form>
  );
}
