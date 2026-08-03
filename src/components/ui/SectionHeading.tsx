import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as = "h2",
  className = "",
}: Props) {
  const Title = as;
  const isCentered = align === "center";
  const isLight = tone === "light";

  return (
    <div
      className={`${isCentered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <div className={`flex items-center gap-3 ${isCentered ? "justify-center" : ""}`}>
        <span className={`h-px w-8 ${isLight ? "bg-brass-light/50" : "bg-brass/50"}`} />
        <span className={`eyebrow ${isLight ? "text-brass-light" : "text-brass-dark"}`}>
          {eyebrow}
        </span>
      </div>
      <Title
        className={`display mt-5 text-[2.25rem] sm:text-5xl ${
          as === "h1" ? "lg:text-[4rem]" : "lg:text-[3.25rem]"
        } ${isLight ? "text-bone" : "text-ink"}`}
      >
        {title}
      </Title>
      {description && (
        <p className={`lede mt-6 ${isLight ? "text-bone/65" : "text-stone"}`}>{description}</p>
      )}
    </div>
  );
}
