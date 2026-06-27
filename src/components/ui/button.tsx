import { Link } from "@/i18n/navigation";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  localeAware?: boolean;
};

const variants = {
  primary:
    "bg-forest text-cream hover:bg-forest-light shadow-lg shadow-forest/20 hover:shadow-xl hover:shadow-forest/25",
  secondary:
    "bg-gold text-forest hover:bg-gold-light shadow-lg shadow-gold/20",
  outline:
    "border-2 border-cream/80 text-cream hover:bg-cream/10 backdrop-blur-sm",
  ghost: "text-forest hover:bg-forest/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  type = "button",
  localeAware = true,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 tracking-wide",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }

    if (localeAware) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <NextLink href={href} className={classes}>
        {children}
      </NextLink>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
