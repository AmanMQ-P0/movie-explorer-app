import MovieCard from '@/components/MovieCard';
import type { Movie } from '@/types/movie';

interface TrendingNowProps {
  movies: Movie[];
}

export default function TrendingNowSection({ movies }: TrendingNowProps) {
  return (
    <section>
      <h2>Trending Now</h2>

      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
