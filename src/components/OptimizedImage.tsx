import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "width" | "height"> {
  width?: number | `${string}`;
  height?: number | `${string}`;
  aspectRatio?: string;
  priority?: boolean;
  fadeIn?: boolean;
}

export function OptimizedImage({
  width,
  height,
  aspectRatio = "16/9",
  priority = false,
  fadeIn = true,
  className = "",
  alt,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Convert string dimensions to numbers if provided
  const widthNum = typeof width === "string" ? parseInt(width) : width;
  const heightNum = typeof height === "string" ? parseInt(height) : height;

  // Calculate height from aspect ratio if not provided
  const calculatedHeight = heightNum || (widthNum ? Math.round(widthNum / (16 / 9)) : 400);
  const calculatedWidth = widthNum || (heightNum ? Math.round(heightNum * (16 / 9)) : 700);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: height ? undefined : aspectRatio,
        width: width || "100%",
      }}
    >
      {error ? (
        <div
          className="absolute inset-0 flex items-center justify-center bg-neutral-900"
          aria-label={alt}
          role="img"
        >
          <span className="text-neutral-600 text-sm">Image unavailable</span>
        </div>
      ) : (
        <Image
          {...props}
          alt={alt || ""}
          width={calculatedWidth}
          height={calculatedHeight}
          priority={priority}
          className={`transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          } ${fadeIn ? "" : "transition-none"}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setError(true);
            setIsLoading(false);
          }}
          // Quality optimization
          quality={85}
          // Progressive loading
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDsABABMoooAKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q=="
        />
      )}
    </div>
  );
}

export default OptimizedImage;
