import type {
  MovieDetail,
  MovieVideo,
  MovieReleaseDatesResult,
} from '@/types/movie';
import MovieImage from './MovieImage';
import { IMAGE_SIZES } from '@/lib/constants';
import { CalendarDays } from 'lucide-react';
import starIcon from '@/assets/icons/star-icon.svg';
import videoIcon from '@/assets/icons/video.svg';
import emojiHappyIcon from '@/assets/icons/emoji-happy.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { getMovieTrailer } from '@/lib/utils';
import MovieDetailSkeleton from './MovieDetailSkeleton';
import ErrorInitialState from './ErrorInitialState';
import FavoriteButton from './FavoriteButton';
import WatchTrailer from './WatchTrailer';

interface MovieDetailInfoProps {
  movie?: MovieDetail;
  videos: MovieVideo[];
  releaseDates: MovieReleaseDatesResult[];
  isLoading: boolean;
  isError: boolean;
  onRetry: () => Promise<unknown>;
}

export default function MovieDetailInfo({
  movie,
  videos,
  releaseDates,
  isLoading,
  isError,
  onRetry,
}: MovieDetailInfoProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [triggerScroll, setTriggerScroll] = useState<number | null>(null);

  const { scrollY } = useScroll();

  useEffect(() => {
    if (isLoading) return;

    const calculateTrigger = () => {
      if (!backdropRef.current || !infoRef.current) return;

      const backdropRect = backdropRef.current.getBoundingClientRect();
      const infoRect = infoRef.current.getBoundingClientRect();

      const backdropTop = backdropRect.top + window.scrollY;

      const backdropHeight = backdropRect.height;

      const infoTop = infoRect.top + window.scrollY;

      const threshold = backdropTop + backdropHeight * (2 / 3);

      const trigger = infoTop - threshold;

      setTriggerScroll(Math.max(0, trigger));
    };

    calculateTrigger();

    window.addEventListener('resize', calculateTrigger);

    return () => {
      window.removeEventListener('resize', calculateTrigger);
    };
  }, [isLoading]);

  const backdropY = useTransform(scrollY, (currentScroll) => {
    if (triggerScroll === null) return 0;

    return Math.min(0, -(currentScroll - triggerScroll));
  });

  if (isLoading) {
    return <MovieDetailSkeleton />;
  }

  if (isError) {
    return (
      <ErrorInitialState
        message='Failed to load movie details.'
        onRetry={onRetry}
      />
    );
  }

  if (!movie) {
    return null;
  }

  // Trailer dan age limit merupakan data pelengkap.
  // Kegagalan videos tidak mengganggu movie detail; jika trailer tidak tersedia,
  // tombol Watch Trailer tidak ditampilkan. Kegagalan release dates menggunakan
  // fallback 'N/A' untuk age limit. Keduanya tidak memerlukan error state khusus.

  const trailer = getMovieTrailer(videos);

  const ageLimit =
    releaseDates
      .find((release) => release.iso_3166_1 === 'ID')
      ?.release_dates.find((release) => release.certification)?.certification ??
    releaseDates
      .find((release) => release.iso_3166_1 === 'US')
      ?.release_dates.find((release) => release.certification)?.certification ??
    releaseDates
      .flatMap((release) => release.release_dates)
      .find((release) => release.certification)?.certification ??
    'N/A';

  return (
    <section className='max-w-360 mx-auto'>
      <motion.div
        ref={backdropRef}
        className='aspect-video overflow-hidden sticky top-none -z-10'
        style={{ y: backdropY }}
      >
        <MovieImage
          path={movie.backdrop_path}
          size={IMAGE_SIZES.backdrop.large}
          alt={movie.title}
          className='w-full h-full object-cover object-center'
        />
        <div className='absolute inset-none bg-linear-to-t from-base-black via-base-black/45 to-transparent' />
      </motion.div>

      <div
        id='navbar-scroll-trigger'
        className='px-xl xl:px-11xl'
        ref={infoRef}
      >
        <div className='flex flex-col gap-3xl mb-4xl'>
          <div className='flex flex-col gap-3xl sm:flex-row'>
            <MovieImage
              path={movie.poster_path}
              size={IMAGE_SIZES.poster.medium}
              alt={movie.title}
              className='min-w-50 lg:min-w-60 min-h-40 rounded-xl hidden sm:block'
            />

            <div className='flex flex-col gap-3xl w-full'>
              <div className='flex gap-xl'>
                <MovieImage
                  path={movie.poster_path}
                  size={IMAGE_SIZES.poster.medium}
                  alt={movie.title}
                  className='min-w-25 min-h-40 w-1/3 rounded-xl sm:hidden'
                />

                <div className='flex flex-col gap-xs lg:gap-xl'>
                  <h1 className='text-xl font-bold line-clamp-2 sm:line-clamp-1 lg:text-display-xl'>
                    {movie.title}
                  </h1>

                  <div className='flex gap-xs lg:gap-md'>
                    <CalendarDays />
                    <p className='text-sm font-normal text-base-white lg:text-md'>
                      {movie.release_date
                        ? `${movie.release_date}`
                        : 'No Release Date'}
                    </p>
                  </div>

                  {!trailer && <FavoriteButton movie={movie} />}
                </div>
              </div>

              <div className='flex justify-center gap-xl sm:justify-start'>
                {trailer && (
                  <WatchTrailer
                    trailer={trailer}
                    className='min-w-55 w-full max-w-100'
                  />
                )}

                {trailer && (
                  <div>
                    <FavoriteButton movie={movie} />
                  </div>
                )}
              </div>

              <div className='flex gap-lg justify-center lg:gap-2xl'>
                <div className='p-md border border-neutral-800 flex flex-col justify-center items-center gap-md rounded-2xl w-full sm:p-xl'>
                  <img src={starIcon} alt='' />
                  <p className='text-xs font-normal lg:text-md'>Rating</p>
                  <p className='text-lg font-semibold lg:text-xl'>
                    {movie.vote_average.toFixed(1)}/10
                  </p>
                </div>

                <div className='p-md border border-neutral-800 flex flex-col justify-center items-center gap-md rounded-2xl w-full sm:p-xl'>
                  <img src={videoIcon} alt='' />
                  <p className='text-xs font-normal lg:text-md'>Genre</p>
                  <p className='text-lg font-semibold text-center lg:text-xl'>
                    {movie.genres[0]?.name}
                  </p>
                </div>

                <div className='p-md border border-neutral-800 flex flex-col justify-center items-center gap-md rounded-2xl w-full sm:p-xl'>
                  <img src={emojiHappyIcon} alt='' />
                  <p className='text-xs font-normal lg:text-md text-nowrap'>
                    Age limit
                  </p>
                  <p className='text-lg font-semibold lg:text-xl'>{ageLimit}</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-md'>
            <h2 className='text-xl font-bold lg:text-display-md'>Overview</h2>

            <p className='text-sm font-normal text-neutral-400 lg:text-md'>
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
