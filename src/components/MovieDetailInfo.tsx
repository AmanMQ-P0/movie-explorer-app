import type { MovieDetail } from '@/types/movie';
import MovieImage from './MovieImage';
import { IMAGE_SIZES } from '@/lib/constants';
import { CalendarDays, Heart } from 'lucide-react';
import { Button } from './ui/button';
import playIcon from '@/assets/icons/play-icon.svg';
import starIcon from '@/assets/icons/star-icon.svg';
import videoIcon from '@/assets/icons/video.svg';
import emojiHappyIcon from '@/assets/icons/emoji-happy.svg';

interface MovieDetailInfoProps {
  movie: MovieDetail;
}

export default function MovieDetailInfo({ movie }: MovieDetailInfoProps) {
  return (
    <section className='border-2 border-amber-400 max-w-360 mx-auto'>
      <div className='border relative aspect-video overflow-hidden'>
        <div className='absolute inset-0'>
          <MovieImage
            path={movie.backdrop_path}
            size={IMAGE_SIZES.backdrop.large}
            alt={movie.title}
            className='w-full h-full object-cover object-center'
          />
        </div>
        <div className='absolute inset-none bg-linear-to-t from-base-black via-base-black/45 to-transparent' />
      </div>

      <div className='px-xl xl:px-11xl'>
        <div className='border-2 border-blue-600 flex flex-col gap-3xl'>
          <div className='flex flex-col gap-3xl sm:flex-row'>
            <MovieImage
              path={movie.poster_path}
              size={IMAGE_SIZES.poster.medium}
              alt={movie.title}
              className='min-w-25 min-h-40 rounded-xl hidden sm:block'
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
                      {movie.release_date}
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex justify-center gap-xl sm:justify-start'>
                <Button
                  variant='primary'
                  className='min-w-55 w-full max-w-100'
                  asChild
                >
                  <a
                    href={`https://www.youtube.com/}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span>Watch Trailer</span>
                    <img src={playIcon} alt='' />
                  </a>
                </Button>

                <button
                  type='button'
                  className='w-11 h-11 bg-base-black/60 border border-neutral-900 flex justify-center items-center rounded-full lg:w-13 lg:h-13'
                >
                  <Heart />
                </button>
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
                  <p className='text-lg font-semibold lg:text-xl'>13</p>
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
