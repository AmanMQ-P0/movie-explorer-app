import type { MovieCreditsResponse } from '@/types/movie';
import MovieImage from './MovieImage';
import { IMAGE_SIZES } from '@/lib/constants';

interface MovieCastCrewProps {
  credits: MovieCreditsResponse;
}

export default function MovieCastCrew({ credits }: MovieCastCrewProps) {
  return (
    <section>
      <h2>Cast & Crew</h2>

      {credits.cast.map((cast) => (
        <div key={cast.id}>
          <MovieImage
            path={cast.profile_path}
            size={IMAGE_SIZES.profile.medium}
            alt={cast.name}
          />

          <div>
            <h3>{cast.name}</h3>
            <p>{cast.character}</p>
          </div>
        </div>
      ))}

      {credits.crew.map((crew) => (
        <div key={crew.id}>
          <MovieImage
            path={crew.profile_path}
            size={IMAGE_SIZES.profile.medium}
            alt={crew.name}
          />

          <div>
            <h3>{crew.name}</h3>
            <p>{crew.job}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
