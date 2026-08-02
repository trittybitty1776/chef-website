import type { ImageTone } from "@/lib/recipes";

const TONE_GRADIENTS: Record<ImageTone, string> = {
  terracotta: "from-terracotta-light via-terracotta to-terracotta-dark",
  sage: "from-sage-light via-sage to-sage-dark",
  walnut: "from-walnut-light via-walnut to-[#241811]",
  "cream-dark": "from-cream via-cream-dark to-butcher",
};

const TONE_TEXT: Record<ImageTone, string> = {
  terracotta: "text-cream/80",
  sage: "text-cream/80",
  walnut: "text-cream/70",
  "cream-dark": "text-walnut/60",
};

type Props = {
  tone: ImageTone;
  label: string;
  icon?: string;
  className?: string;
};

export default function PlaceholderImage({ tone, label, icon = "🍽", className = "" }: Props) {
  return (
    <div
      role="img"
      aria-label={`Photo placeholder for ${label}`}
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${TONE_GRADIENTS[tone]} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
      <span className="relative text-4xl" aria-hidden="true">
        {icon}
      </span>
      <span className={`absolute bottom-2 right-3 text-[10px] font-medium uppercase tracking-wider ${TONE_TEXT[tone]}`}>
        photo coming soon
      </span>
    </div>
  );
}
