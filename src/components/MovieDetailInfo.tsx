import type { MovieDetail } from '@/types/movie';
import MovieImage from './MovieImage';
import { IMAGE_SIZES } from '@/lib/constants';

interface MovieDetailInfoProps {
  movie: MovieDetail;
}

export default function MovieDetailInfo({ movie }: MovieDetailInfoProps) {
  return (
    <section>
      <MovieImage
        path={movie.backdrop_path}
        size={IMAGE_SIZES.backdrop.large}
        alt={movie.title}
      />

      <div>
        <div>
          <MovieImage
            path={movie.poster_path}
            size={IMAGE_SIZES.poster.medium}
            alt={movie.title}
          />

          <div>
            <h1>{movie.title}</h1>

            <p>{movie.release_date}</p>
          </div>
        </div>

        <div>
          <p>watch trailer</p>
          <p>button favorite</p>
        </div>

        <div>
          <p>{movie.vote_average}</p>

          <div>
            {movie.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>

          <p>Age limit</p>
        </div>

        <div>
          <h2>Overview</h2>

          <p>{movie.overview}</p>
        </div>
      </div>
    </section>
  );
}
