import path from "path";
import Image from "next/image";
import sharp from "sharp";

const sizes = new Map<string, { width: number; height: number }>();

// Blog images live in /public with mixed sizes; read the real dimensions at build time
// so next/image can reserve space and serve WebP/AVIF at the right width.
async function dimensions(src: string) {
  let size = sizes.get(src);
  if (!size) {
    const meta = await sharp(path.join(process.cwd(), "public", src)).metadata();
    size = { width: meta.width ?? 1200, height: meta.height ?? 675 };
    sizes.set(src, size);
  }
  return size;
}

type Props = { src: string; alt: string; priority?: boolean; className?: string };

export default async function PostImage({ src, alt, priority = false, className = "" }: Props) {
  const { width, height } = await dimensions(src);
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes="(max-width: 768px) 100vw, 768px"
      className={`w-full h-auto max-h-96 object-cover rounded-2xl ${className}`}
    />
  );
}
