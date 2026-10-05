import MovieCard from '@/components/MovieCard';
import type { Movie } from '@/types/movie';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { Button } from './ui/button';
import TrendingNowSkeleton from './TrendingNowSkeleton';

interface TrendingNowProps {
  movies: Movie[];
  isLoading: boolean;
  isError: boolean;
  onRetry: () => Promise<unknown>;
}

export default function TrendingNowSection({
  movies,
  isLoading,
  isError,
  onRetry,
}: TrendingNowProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const handleScroll = (direction: 'left' | 'right') => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.scrollBy({
      left: slider.clientWidth * 0.8 * (direction === 'right' ? 1 : -1),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const updateScrollState = () => {
      const { scrollLeft, clientWidth, scrollWidth } = slider;

      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    updateScrollState();

    slider.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);

    return () => {
      slider.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [movies.length]);

  return (
    <section
      aria-busy={isLoading}
      id='trending-now'
      className='border-2 border-amber-400 max-w-360 mx-auto px-xl pt-5xl relative lg:pb-8xl xl:pt-none xl:pl-11xl xl:pr-none'
    >
      <div className='border-2 border-blue-600 overflow-hidden flex flex-col gap-3xl xl:gap-5xl'>
        <h2 className='text-display-xs font-bold lg:text-display-lg'>
          Trending Now
        </h2>

        <div className='relative'>
          {isLoading ? (
            <div role='status'>
              <span className='sr-only'>Loading trending movies...</span>
              <TrendingNowSkeleton />
            </div>
          ) : isError ? (
            <div className='flex flex-col items-center justify-center gap-xl w-full h-100'>
              <p role='alert' className='text-center xl:text-md'>
                Failed to load movies.
              </p>

              <Button
                type='button'
                variant='secondary'
                onClick={onRetry}
                className='w-50 h-11 xl:w-58 xl:h-13 xl:text-md'
              >
                Try Again
              </Button>
            </div>
          ) : (
            <div
              ref={sliderRef}
              className='flex gap-xl overflow-x-auto scrollbar-none lg:gap-2xl'
            >
              {movies.map((movie, index) => (
                <div
                  key={movie.id}
                  className='w-33 sm:w-40 md:w-50 shrink-0 lg:w-55'
                >
                  <MovieCard movie={movie} rank={index + 1} />
                </div>
              ))}
            </div>
          )}

          {!isLoading && !isError && (
            <div className='w-10 sm:w-40 md:w-80 absolute right-none bg-linear-to-l from-base-black via-base-black/70 to-base-black/0 inset-y-none pointer-events-none' />
          )}
        </div>

        {!isLoading && !isError && (
          <Button
            variant='circular'
            type='button'
            aria-label='Scroll trending movies to the right'
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`-right-xxs ${canScrollRight ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-base-black/60'} lg:right-5xl`}
          >
            <ChevronRight aria-hidden='true' />
          </Button>
        )}

        {!isLoading && !isError && (
          <Button
            variant='circular'
            type='button'
            aria-label='Scroll trending movies to the left'
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`-left-xxs ${canScrollLeft ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-base-black/60'} xl:left-40`}
          >
            <ChevronLeft aria-hidden='true' />
          </Button>
        )}
      </div>
    </section>
  );
}
