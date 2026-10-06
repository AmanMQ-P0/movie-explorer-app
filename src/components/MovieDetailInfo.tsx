import type { MovieDetail } from '@/types/movie';
import MovieImage from './MovieImage';
import { IMAGE_SIZES } from '@/lib/constants';

interface MovieDetailInfoProps {
  movie: MovieDetail;
}

export default function MovieDetailInfo({ movie }: MovieDetailInfoProps) {
  return (
    <section>
      <h1>{movie.title}</h1>

      <p>{movie.release_date}</p>

      <p>{movie.vote_average}</p>

      <div>
        {movie.genres.map((genre) => (
          <span key={genre.id}>{genre.name}</span>
        ))}
      </div>

      <p>{movie.overview}</p>

      <MovieImage
        path={movie.poster_path}
        size={IMAGE_SIZES.poster.medium}
        alt={movie.title}
      />
    </section>
  );
}
