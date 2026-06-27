import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  aspectClassName?: string;
  className?: string;
  rounded?: "2xl" | "xl" | "none";
  variant?: "default" | "hero";
};

export function ImagePlaceholder({
  label,
  aspectClassName = "aspect-[4/3]",
  className,
  rounded = "none",
  variant = "default",
}: Props) {
  const roundedClass =
    rounded === "2xl" ? "rounded-2xl" : rounded === "xl" ? "rounded-xl" : "";

  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        isHero
          ? "border-0 bg-gradient-to-br from-forest/90 via-forest/75 to-forest/60"
          : "border border-dashed border-forest/15 bg-gradient-to-br from-cream to-cream-dark",
        !className?.includes("inset-0") && aspectClassName,
        roundedClass,
        className,
      )}
      aria-hidden={!label}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center",
          isHero ? "text-cream/35" : "text-forest/30",
        )}
      >
        <ImageIcon className={cn("h-7 w-7", isHero && "h-9 w-9")} strokeWidth={1.25} />
        {label && (
          <span className="text-[11px] uppercase tracking-[0.18em]">{label}</span>
        )}
      </div>
    </div>
  );
}
