import MovieCard from '@/components/MovieCard';
import type { Movie } from '@/types/movie';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface NewReleaseProps {
  movies: Movie[];
  pageCount: number;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isFetchNextPageError: boolean;
  onLoadMore: () => Promise<unknown>;
}

export default function NewReleaseSection({
  movies,
  pageCount,
  hasNextPage,
  isFetchingNextPage,
  isFetchNextPageError,
  onLoadMore,
}: NewReleaseProps) {
  const isSm = useMediaQuery('(min-width: 640px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const isXl = useMediaQuery('(min-width: 1280px)');

  const moviesPerLoad = isXl ? 15 : isMd ? 16 : isSm ? 12 : 8;
  const visibleMovieCount = moviesPerLoad * pageCount;

  return (
    <section className='border-2 border-amber-400 max-w-360 mx-auto pt-none px-xl pb-5xl xl:px-11xl xl:py-none'>
      <div className='border-2 border-blue-600 relative flex flex-col gap-3xl xl:gap-5xl'>
        <h2 className='text-display-xs font-bold lg:text-display-lg'>
          New Release
        </h2>

        <div className='grid grid-cols-2 gap-x-xl gap-y-4xl sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5'>
          {movies.slice(0, visibleMovieCount).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <div className='pointer-events-none absolute inset-x-0 bottom-0 h-60 bg-linear-to-t from-base-black via-base-black/90 to-transparent' />

        {isFetchNextPageError && (
          <p role='alert'>Failed to load more movies. Please try again.</p>
        )}

        {hasNextPage && (
          <button
            type='button'
            onClick={onLoadMore}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Loading...' : 'Load More'}
          </button>
        )}
      </div>
    </section>
  );
}
