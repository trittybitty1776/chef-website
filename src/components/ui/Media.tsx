import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import type { ImageTone } from "@/lib/recipes";

const TONE_GRADIENTS: Record<ImageTone, string> = {
  terracotta: "from-brass-light via-brass to-brass-dark",
  sage: "from-sage-light via-sage to-charcoal",
  walnut: "from-charcoal via-ink-soft to-ink",
  "cream-dark": "from-porcelain via-linen to-stone-light",
};

const TONE_TEXT: Record<ImageTone, string> = {
  terracotta: "text-bone/70",
  sage: "text-bone/70",
  walnut: "text-bone/50",
  "cream-dark": "text-ink/40",
};

const SCRIMS = {
  none: "",
  soft: "bg-gradient-to-t from-ink/45 via-ink/5 to-transparent",
  strong: "bg-gradient-to-t from-ink/85 via-ink/40 to-ink/15",
} as const;

type Props = {
  tone: ImageTone;
  /** Alt text when a photo is present; also labels the fallback. */
  label: string;
  className?: string;
  src?: string;
  /** Responsive sizes hint for next/image. */
  sizes?: string;
  /** Set on above-the-fold imagery so it is not lazy-loaded. */
  priority?: boolean;
  /** Depth of the scrim laid over the image. */
  scrim?: keyof typeof SCRIMS;
};

export default function Media({
  tone,
  label,
  className = "",
  src,
  sizes = "(min-width: 1024px) 45vw, 100vw",
  priority = false,
  scrim = "none",
}: Props) {
  if (src) {
    return (
      <div className={`img-frame ${className}`}>
        <Image
          src={withBasePath(src)}
          alt={label}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
        {scrim !== "none" && (
          <div className={`absolute inset-0 ${SCRIMS[scrim]}`} aria-hidden="true" />
        )}
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`img-frame grain flex items-center justify-center bg-gradient-to-br ${TONE_GRADIENTS[tone]} ${className}`}
    >
      <span className={`eyebrow relative ${TONE_TEXT[tone]}`}>Chef Jarvis</span>
    </div>
  );
}
