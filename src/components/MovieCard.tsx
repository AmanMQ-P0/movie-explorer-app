import { IMAGE_SIZES } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import type { Movie } from '@/types/movie';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article>
      <img
        src={getImageUrl(movie.poster_path, IMAGE_SIZES.poster.medium)}
        alt={movie.title}
      />

      <h3>{movie.title}</h3>

      <p>{movie.vote_average.toFixed(1)}</p>
    </article>
  );
}
