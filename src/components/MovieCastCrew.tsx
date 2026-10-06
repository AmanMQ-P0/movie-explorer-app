import { type MovieCreditsResponse } from '@/types/movie';

interface MovieCastCrewProps {
  credits: MovieCreditsResponse;
}

export default function MovieCastCrew({ credits }: MovieCastCrewProps) {
  return (
    <section>
      <h2>Cast & Crew</h2>

      {credits.cast.map((cast) => (
        <div key={cast.id}>
          <img src={cast.profile_path ?? ''} alt={cast.name} />

          <div>
            <h3>{cast.name}</h3>
            <p>{cast.character}</p>
          </div>
        </div>
      ))}

      {credits.crew.map((crew) => (
        <div key={crew.id}>
          <img src={crew.profile_path ?? ''} alt={crew.name} />

          <div>
            <h3>{crew.name}</h3>
            <p>{crew.job}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
