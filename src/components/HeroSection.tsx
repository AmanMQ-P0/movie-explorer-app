import { IMAGE_SIZES } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import { useMovieVideos } from '@/hooks/useMovies';
import type { Movie } from '@/types/movie';
import { Link } from 'react-router-dom';

interface HeroProps {
  movie: Movie;
}

export default function HeroSection({ movie }: HeroProps) {
  const videos = useMovieVideos(movie.id);

  const youtubeTrailers =
    videos.data?.results.filter(
      (video) => video.site === 'YouTube' && video.type === 'Trailer'
    ) ?? [];

  const trailer =
    youtubeTrailers.find((video) => video.official) ?? youtubeTrailers[0];

  if (videos.isLoading) {
    return <section>Loading trailer...</section>;
  }

  if (videos.isError) {
    return <section>Failed to load trailer.</section>;
  }

  return (
    <section>
      <img
        src={getImageUrl(movie.backdrop_path, IMAGE_SIZES.backdrop.large)}
        alt={movie.title}
      />

      <div>
        <h1>{movie.title}</h1>

        <p>{movie.overview}</p>

        {trailer && (
          <a
            href={`https://www.youtube.com/watch?v=${trailer.key}`}
            target='_blank'
            rel='noreferrer'
          >
            Watch Trailer
          </a>
        )}

        <Link to={`/movie/${movie.id}`}>See Detail</Link>
      </div>
    </section>
  );
}
