import Image, { type ImageProps } from "next/image";
import { usePlaceholderImages } from "@/lib/data/images";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { cn } from "@/lib/utils";

type Props = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  placeholderLabel?: string;
  placeholderVariant?: "default" | "hero";
  aspectClassName?: string;
  rounded?: "2xl" | "xl" | "none";
};

export function ConditionalImage({
  src,
  alt,
  placeholderLabel,
  placeholderVariant = "default",
  aspectClassName,
  rounded,
  className,
  fill,
  ...props
}: Props) {
  if (usePlaceholderImages) {
    if (fill) {
      return (
        <ImagePlaceholder
          label={placeholderLabel}
          variant={placeholderVariant}
          className={cn("absolute inset-0 h-full w-full", className)}
        />
      );
    }

    return (
      <ImagePlaceholder
        label={placeholderLabel}
        variant={placeholderVariant}
        aspectClassName={aspectClassName}
        rounded={rounded}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      {...props}
    />
  );
}
