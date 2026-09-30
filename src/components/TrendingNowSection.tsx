import MovieCard from '@/components/MovieCard';
import type { Movie } from '@/types/movie';

interface TrendingNowProps {
  movies: Movie[];
}

export default function TrendingNowSection({ movies }: TrendingNowProps) {
  return (
    <section className='border-2 border-amber-400 max-w-360 mx-auto px-xl py-5xl xl:pt-none xl:pb-8xl xl:pl-11xl xl:pr-none'>
      <div className='border-2 border-blue-600 overflow-hidden flex flex-col gap-3xl xl:gap-5xl'>
        <h2 className='text-display-xs font-bold lg:text-display-lg'>
          Trending Now
        </h2>

        <div className='flex gap-xl relative lg:gap-2xl'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}

          <div className='h-full w-10 sm:w-40 md:w-80 absolute right-none bg-linear-to-l from-base-black via-base-black/70 to-base-black/0' />
        </div>
      </div>
    </section>
  );
}
