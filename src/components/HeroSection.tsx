import { IMAGE_SIZES } from '@/lib/constants';
import { useMovieVideos } from '@/hooks/useMovies';
import type { Movie } from '@/types/movie';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MovieImage from './common/MovieImage';
import { Button } from './ui/button';
import HeroSkeleton from './HeroSkeleton';
import ErrorInitialState from './ErrorInitialState';
import { getMovieTrailer } from '@/lib/utils';
import WatchTrailer from './common/WatchTrailer';

interface HeroProps {
  movies: Movie[];
  isLoading: boolean;
  isError: boolean;
  onRetry: () => Promise<unknown>;
}

export default function HeroSection({
  movies,
  isLoading,
  isError,
  onRetry,
}: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const movie = movies[activeIndex];

  useEffect(() => {
    if (movies.length <= 1) return;

    const intervalId = setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % movies.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [movies.length]);

  const videos = useMovieVideos(movie?.id);

  const trailer = getMovieTrailer(videos.data?.results ?? []);

  if (isLoading) {
    return <HeroSkeleton />;
  }

  if (isError) {
    return (
      <section className='max-w-360 mx-auto'>
        <ErrorInitialState message='Failed to load movies.' onRetry={onRetry} />
      </section>
    );
  }

  return (
    <section className='max-w-360 mx-auto md:relative'>
      <div className='relative aspect-video overflow-hidden'>
        <AnimatePresence initial={false}>
          <motion.div
            key={movie.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className='absolute inset-0'
          >
            <MovieImage
              path={movie.backdrop_path}
              alt={movie.title}
              size={IMAGE_SIZES.backdrop.large}
              className='w-full h-full object-cover object-center'
            />
          </motion.div>
        </AnimatePresence>

        <div className='absolute inset-none bg-linear-to-t from-base-black via-base-black/45 to-transparent' />
      </div>

      <div className='px-xl xl:px-11xl min-h-75 md:absolute md:top-1/3 md:min-h-73'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={movie.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className='flex flex-col gap-3xl md:w-2/3 lg:gap-6xl'
          >
            <div className='flex flex-col gap-sm'>
              <h1 className='text-display-xs font-bold line-clamp-1 lg:line-clamp-2 lg:text-display-2xl'>
                {movie.title}
              </h1>

              <p className='text-sm font-normal text-neutral-400 line-clamp-4 lg:line-clamp-5 xl:line-clamp-none lg:text-md'>
                {movie.overview}
              </p>
            </div>

            <div className='flex flex-col gap-xl sm:flex-row sm:justify-center sm:items-center md:justify-start'>
              {trailer && <WatchTrailer trailer={trailer} />}

              <Button asChild variant='secondary'>
                <Link to={`/movie/${movie.id}`}>
                  <span>See Detail</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
