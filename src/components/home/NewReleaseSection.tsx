import MovieCard from '@/components/home/MovieCard';
import type { Movie } from '@/types/movie';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Button } from '@/components/ui/button';
import NewReleaseSkeleton from '../NewReleaseSkeleton';
import ErrorInitialState from '../ErrorInitialState';

interface NewReleaseProps {
  movies: Movie[];
  pageCount: number;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isFetchNextPageError: boolean;
  onLoadMore: () => Promise<unknown>;
  isLoading: boolean;
  isError: boolean;
  onRetry: () => Promise<unknown>;
}

export default function NewReleaseSection({
  movies,
  pageCount,
  hasNextPage,
  isFetchingNextPage,
  isFetchNextPageError,
  onLoadMore,
  isLoading,
  isError,
  onRetry,
}: NewReleaseProps) {
  const isSm = useMediaQuery('(min-width: 640px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const isXl = useMediaQuery('(min-width: 1280px)');

  const moviesPerLoad = isXl ? 15 : isMd ? 16 : isSm ? 12 : 8;
  const visibleMovieCount = moviesPerLoad * pageCount;

  return (
    <section className='max-w-360 mx-auto pt-none px-xl pb-5xl xl:px-11xl xl:py-none'>
      <div className='relative flex flex-col gap-3xl xl:gap-5xl'>
        <h2 className='text-display-xs font-bold lg:text-display-lg'>
          New Release
        </h2>

        {isLoading ? (
          <NewReleaseSkeleton />
        ) : isError ? (
          <ErrorInitialState
            message='Failed to load movies.'
            onRetry={onRetry}
          />
        ) : (
          <div className='px-sm grid grid-cols-2 gap-x-xl gap-y-4xl overflow-hidden sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5'>
            {movies.slice(0, visibleMovieCount).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}

        {!isLoading && !isError && (
          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-60 bg-linear-to-t from-base-black via-base-black/90 to-transparent' />
        )}

        {isFetchNextPageError && (
          <div className='flex flex-col items-center gap-md absolute left-1/2 bottom-25 -translate-x-1/2'>
            <p role='alert' className='text-center xl:text-md'>
              Failed to load more movies.
            </p>

            <Button
              type='button'
              variant='secondary'
              onClick={onLoadMore}
              disabled={isFetchingNextPage}
              className='w-50 h-11 xl:w-58 xl:h-13 xl:text-md'
            >
              {isFetchingNextPage ? 'Loading...' : 'Try Again'}
            </Button>
          </div>
        )}

        {!isLoading && !isError && hasNextPage && !isFetchNextPageError && (
          <Button
            type='button'
            onClick={onLoadMore}
            disabled={isFetchingNextPage}
            variant='secondary'
            className='absolute left-1/2 bottom-25 -translate-x-1/2 w-50 h-11 xl:w-58 xl:h-13 xl:text-md'
          >
            {isFetchingNextPage ? 'Loading...' : 'Load More'}
          </Button>
        )}
      </div>
    </section>
  );
}
