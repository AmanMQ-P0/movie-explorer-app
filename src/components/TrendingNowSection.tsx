import MovieCard from '@/components/MovieCard';
import type { Movie } from '@/types/movie';
import { ChevronRight } from 'lucide-react';

interface TrendingNowProps {
  movies: Movie[];
}

export default function TrendingNowSection({ movies }: TrendingNowProps) {
  return (
    <section className='border-2 border-amber-400 max-w-360 mx-auto px-xl py-5xl relative xl:pt-none xl:pb-8xl xl:pl-11xl xl:pr-none'>
      <div className='border-2 border-blue-600 overflow-hidden flex flex-col gap-3xl xl:gap-5xl'>
        <h2 className='text-display-xs font-bold lg:text-display-lg'>
          Trending Now
        </h2>

        <div className='flex gap-xl relative lg:gap-2xl'>
          {movies.map((movie) => (
            <div key={movie.id} className='w-33 shrink-0 lg:w-55'>
              <MovieCard movie={movie} />
            </div>
          ))}

          <div className='h-full w-10 sm:w-40 md:w-80 absolute right-none bg-linear-to-l from-base-black via-base-black/70 to-base-black/0' />
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
