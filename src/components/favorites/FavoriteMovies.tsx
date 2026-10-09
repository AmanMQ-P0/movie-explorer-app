import type { Movie } from '@/types/movie';
import FavoriteMovieItem from './FavoriteMovieItem';

interface FavoriteMoviesProps {
  movies: Movie[];
}

export default function FavoriteMovies({ movies }: FavoriteMoviesProps) {
  return (
    <section>
      {movies.map((movie) => (
        <FavoriteMovieItem key={movie.id} movie={movie} />
      ))}
    </section>
  );
}
