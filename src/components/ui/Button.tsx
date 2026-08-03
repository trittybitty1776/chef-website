import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonVariant = "solid" | "outline" | "ghost" | "light";

const BASE =
  "inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] transition-all duration-500";

const VARIANTS: Record<ButtonVariant, string> = {
  // Ink field with a brass wash on hover — the primary call to action
  solid: "bg-ink text-bone hover:bg-brass-dark",
  // Hairline rule that fills with ink on hover
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-bone",
  // For dark sections
  ghost: "border border-bone/25 text-bone hover:border-bone hover:bg-bone hover:text-ink",
  light: "bg-bone text-ink hover:bg-brass-light",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export default function Button({ href, children, variant = "solid", className = "" }: Props) {
  return (
    <Link href={href} className={`${BASE} ${VARIANTS[variant]} ${className}`}>
      {children}
    </Link>
  );
}
