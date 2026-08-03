"use client";

import { useState, type FormEvent } from "react";

const INQUIRY_TYPES = [
  "Weekly meal prep",
  "Private dinner",
  "Event catering",
  "Recipe question",
] as const;

const FIELD =
  "mt-2 w-full border-b border-ink/15 bg-transparent py-3 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-stone-light/60 focus:border-brass focus-visible:outline-none";

const LABEL = "eyebrow text-[0.62rem] text-stone";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder: wire up to an email/form backend (Resend, Formspree, etc.) later.
    setStatus("submitted");
  };

  if (status === "submitted") {
    return (
      <div className="flex min-h-[24rem] flex-col items-center justify-center px-6 text-center">
        <span className="h-px w-10 bg-brass" />
        <p className="display mt-8 text-3xl text-ink">Thank you.</p>
        <p className="lede mt-4 max-w-sm text-stone">
          Your note is with me — I reply to every enquiry personally, usually within two business
          days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL}>
            Name
          </label>
          <input id="name" name="name" type="text" required className={FIELD} />
        </div>
        <div>
          <label htmlFor="email" className={LABEL}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={FIELD} />
        </div>
      </div>

      <div>
        <label htmlFor="inquiryType" className={LABEL}>
          Enquiring about
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          defaultValue={INQUIRY_TYPES[0]}
          className={`${FIELD} appearance-none`}
        >
          {INQUIRY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={LABEL}>
          Tell me about your table
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${FIELD} resize-none`}
          placeholder="Household size, allergies, how you like to eat..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-ink px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-bone transition-colors duration-500 hover:bg-brass-dark sm:w-auto"
      >
        Send Enquiry
      </button>
    </form>
  );
}
