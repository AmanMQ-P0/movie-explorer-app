import { IMAGE_SIZES } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import { useMovieVideos } from '@/hooks/useMovies';
import type { Movie } from '@/types/movie';
import { Link } from 'react-router-dom';
import playIcon from '@/assets/icons/play-icon.svg';
import { useState, useEffect } from 'react';

interface HeroProps {
  movies: Movie[];
}

export default function HeroSection({ movies }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const movie = movies[activeIndex];

  useEffect(() => {
    if (movies.length <= 1) return;

    const intervalId = setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % movies.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [movies.length]);

  const videos = useMovieVideos(movie.id);

  const youtubeTrailers =
    videos.data?.results.filter(
      (video) => video.site === 'YouTube' && video.type === 'Trailer'
    ) ?? [];

  const trailer =
    youtubeTrailers.find((video) => video.official) ?? youtubeTrailers[0];

  return (
    <section className='border-2 border-amber-400 max-w-360 mx-auto lg:relative'>
      <div className='relative'>
        <img
          src={getImageUrl(movie.backdrop_path, IMAGE_SIZES.backdrop.large)}
          alt={movie.title}
          className='w-full object-cover object-center'
        />

        <div className='absolute inset-none bg-linear-to-t from-base-black via-base-black/45 to-transparent' />
      </div>

      <div className='px-xl xl:px-11xl lg:absolute lg:bottom-none xl:bottom-auto xl:top-75'>
        <div className='border-2 border-blue-600 flex flex-col gap-3xl lg:max-w-158.75 lg:gap-6xl'>
          <div className='flex flex-col gap-sm'>
            <h1 className='text-display-xs font-bold lg:text-display-2xl'>
              {movie.title}
            </h1>

            <p className='text-sm font-normal text-neutral-400 lg:text-md'>
              {movie.overview}
            </p>
          </div>

          <div className='flex flex-col gap-xl lg:flex-row'>
            {trailer && (
              <a
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target='_blank'
                rel='noreferrer'
                className='bg-primary-300 text-sm font-semibold rounded-full flex p-md justify-center items-center gap-md lg:w-57.5'
              >
                <span>Watch Trailer</span>
                <img src={playIcon} alt='' />
              </a>
            )}

            <Link
              to={`/movie/${movie.id}`}
              className='border border-neutral-900 text-sm font-semibold rounded-full flex p-md justify-center items-center bg-base-black/40 lg:w-57.5'
            >
              <span>See Detail</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
