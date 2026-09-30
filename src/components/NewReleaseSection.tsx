import MovieCard from '@/components/MovieCard';
import type { Movie } from '@/types/movie';

interface NewReleaseProps {
  movies: Movie[];
}

export default function NewReleaseSection({ movies }: NewReleaseProps) {
  return (
    <section>
      <h2>New Release</h2>

      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
