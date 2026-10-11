export const IMAGE_SIZES = {
  poster: {
    small: 'w185',
    medium: 'w342',
    large: 'w500',
    original: 'original',
  },
  backdrop: {
    small: 'w300',
    medium: 'w780',
    large: 'w1280',
    original: 'original',
  },
  profile: {
    small: 'w45',
    medium: 'w185',
    large: 'h632',
    original: 'original',
  },
} as const;

export const STORAGE_KEYS = {
  favorites: 'movie-favorites',
} as const;

export const QUERY_KEYS = {
  movies: {
    popular: (page: number) => ['movies', 'popular', page] as const,
    nowPlaying: ['movies', 'now-playing'] as const,
    detail: (movieId: number) => ['movie', movieId, 'detail'] as const,
    search: (query: string) => ['movies', 'search', query] as const,
    videos: (id: number) => ['movie', id, 'videos'] as const,
    credits: (movieId: number) => ['movie', movieId, 'credits'] as const,
    releaseDates: (movieId: number) =>
      ['movie', movieId, 'release-dates'] as const,
  },
} as const;
