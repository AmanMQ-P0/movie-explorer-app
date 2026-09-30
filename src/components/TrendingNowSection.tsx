import MovieCard from '@/components/MovieCard';
import type { Movie } from '@/types/movie';

interface TrendingNowProps {
  movies: Movie[];
}

export default function TrendingNowSection({ movies }: TrendingNowProps) {
  return (
    <section className='border-2 border-amber-400 max-w-360 mx-auto px-xl py-5xl xl:pt-none xl:pb-8xl xl:pl-11xl xl:pr-none'>
      <div className='border-2 border-blue-600 overflow-hidden flex flex-col gap-3xl lg:gap-5xl'>
        <h2 className='text-display-xs font-bold'>Trending Now</h2>

        <div className='flex gap-xl lg:gap-2xl'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
