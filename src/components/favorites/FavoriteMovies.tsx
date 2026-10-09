import type { Movie } from '@/types/movie';
import FavoriteButton from '@/components/FavoriteButton';

interface FavoriteMoviesProps {
  movies: Movie[];
}

export default function FavoriteMovies({ movies }: FavoriteMoviesProps) {
  return (
    <section>
      {movies.map((movie) => (
        <article key={movie.id}>
          <h2>{movie.title}</h2>
          <FavoriteButton movie={movie} />
        </article>
      ))}
    </section>
  );
}
