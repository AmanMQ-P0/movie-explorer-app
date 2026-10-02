import MovieCard from '@/components/MovieCard';
import type { Movie } from '@/types/movie';
import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';

interface TrendingNowProps {
  movies: Movie[];
}

export default function TrendingNowSection({ movies }: TrendingNowProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.scrollBy({
      left: slider.clientWidth * 0.8,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id='trending-now'
      className='border-2 border-amber-400 max-w-360 mx-auto px-xl pt-5xl relative lg:pb-8xl xl:pt-none xl:pl-11xl xl:pr-none'
    >
      <div className='border-2 border-blue-600 overflow-hidden flex flex-col gap-3xl xl:gap-5xl'>
        <h2 className='text-display-xs font-bold lg:text-display-lg'>
          Trending Now
        </h2>

        <div className='relative'>
          <div
            ref={sliderRef}
            className='flex gap-xl overflow-x-auto scrollbar-none lg:gap-2xl'
          >
            {movies.map((movie) => (
              <div
                key={movie.id}
                className='w-33 sm:w-40 md:w-50 shrink-0 lg:w-55'
              >
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>

          <div className='w-10 sm:w-40 md:w-80 absolute right-none bg-linear-to-l from-base-black via-base-black/70 to-base-black/0 inset-y-none pointer-events-none' />
        </div>

        <button
          type='button'
          className='absolute -right-xxs top-55 p-1.75 bg-base-black/60 w-11 h-11 rounded-full flex justify-center items-center lg:w-14 lg:h-14 lg:p-md lg:top-70 lg:right-5xl'
        >
          <ChevronRight aria-hidden='true' />
        </button>
      </div>
    </section>
  );
}
