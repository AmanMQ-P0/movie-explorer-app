import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { MovieVideo } from '@/types/movie';

// Utility function for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// TODO: Add utility functions for image URLs
// Hint: TMDB returns relative paths, you need to construct full image URLs
// Reference: https://developer.themoviedb.org/docs/image-basics

export function getImageUrl(
  path: string | null,
  size: string = 'original'
): string {
  // TODO: Implement image URL construction
  // Use VITE_TMDB_IMAGE_BASE_URL from environment variables
  const BASE_URL_IMAGE = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

  if (!path) {
    return '';
  }

  return `${BASE_URL_IMAGE}/${size}${path}`;
}

// TODO: Add more utility functions as needed
// Examples: formatDate, formatRuntime, etc.
export function getMovieTrailer(videos: MovieVideo[]): MovieVideo | undefined {
  const youtubeTrailers = videos.filter(
    (video) => video.site === 'YouTube' && video.type === 'Trailer'
  );

  return youtubeTrailers.find((video) => video.official) ?? youtubeTrailers[0];
}
