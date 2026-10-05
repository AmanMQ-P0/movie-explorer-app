import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { movieService } from '@/services/movieService';
import { QUERY_KEYS } from '@/lib/constants';

// TODO: Create custom hooks using React Query
// Reference: https://tanstack.com/query/latest/docs/framework/react/overview

// Example: Hook to fetch popular movies
export const usePopularMovies = (page: number) => {
  // TODO: Implement useQuery hook
  // Hint: Use movieService.getPopularMovies as queryFn
  return useQuery({
    queryKey: QUERY_KEYS.movies.popular(page),
    queryFn: () => movieService.getPopularMovies(page),
  });
};

export const useNowPlayingMovies = () => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.movies.nowPlaying,
    queryFn: ({ pageParam }) => movieService.getNowPlayingMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.total_pages) {
        return undefined;
      }

      return lastPage.page + 1;
    },
  });
};

// TODO: Add more hooks for different endpoints
// Examples: useMovieDetails, useSearchMovies, useNowPlayingMovies
export const useMovieVideos = (movieId: number | undefined) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.videos(movieId!),
    queryFn: () => movieService.getMovieVideos(movieId!),
    enabled: movieId !== undefined,
  });
};
