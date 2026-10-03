import { getImageUrl } from '@/lib/utils';

interface MovieImageProps {
  path: string | null;
  alt: string;
  size: string;
  className?: string;
  fallbackClassName?: string;
}

export default function MovieImage({
  path,
  alt,
  size,
  className = '',
  fallbackClassName = 'bg-neutral-800',
}: MovieImageProps) {
  const imageUrl = getImageUrl(path, size);

  if (!imageUrl) {
    return (
      <div
        role='img'
        aria-label={`${alt} tidak tersedia`}
        className={`${className} ${fallbackClassName}`}
      />
    );
  }

  return <img src={imageUrl} alt={alt} className={className} />;
}
