import MovieImage from '../MovieImage';
import { IMAGE_SIZES } from '@/lib/constants';
import starIcon from '@/assets/icons/star-icon.svg';
import { Button } from '../ui/button';
import FavoriteButton from '../FavoriteButton';
import WatchTrailer from '../WatchTrailer';
import type { Movie } from '@/types/movie';
import { getMovieTrailer } from '@/lib/utils';
import { useMovieVideos } from '@/hooks/useMovies';

interface SearchResultItemProps {
  movie: Movie;
}

export default function SearchResultItem({ movie }: SearchResultItemProps) {
  const videos = useMovieVideos(movie.id);
  const trailer = getMovieTrailer(videos.data?.results ?? []);

  return (
    <article className='py-4xl md:flex md:gap-xl'>
      <div className='hidden w-47 h-68 bg-neutral-900 rounded-xl shrink-0 md:block'>
        <MovieImage
          path={movie.poster_path}
          size={IMAGE_SIZES.poster.medium}
          alt={movie.title}
          className='w-full object-cover rounded-xl'
        />
      </div>

      <div className='w-full flex flex-col gap-3xl md:relative'>
        <div className='flex gap-xl'>
          <div className='bg-neutral-900 w-26 h-39 shrink-0 rounded-md md:hidden'>
            <MovieImage
              path={movie.poster_path}
              size={IMAGE_SIZES.poster.medium}
              alt={movie.title}
              className='w-full object-cover rounded-md'
            />
          </div>

          <div className='flex flex-col gap-xs md:gap-lg'>
            <h2 className='text-md font-bold line-clamp-2 lg:text-display-xs'>
              {movie.title}
            </h2>
            <div className='flex items-center gap-xs'>
              <img src={starIcon} alt='' />
              <p className='text-sm font-medium lg:text-lg'>
                {movie.vote_average.toFixed(1)}/10
              </p>
            </div>
            <p className='text-sm font-normal text-neutral-400 line-clamp-2 lg:text-md'>
              {movie.overview}
            </p>
          </div>
        </div>

        <div className='flex items-center gap-xl sm:justify-center sm:items-center md:justify-start'>
          {trailer ? (
            <WatchTrailer trailer={trailer} className='min-w-55 w-full' />
          ) : (
            <Button type='button' variant='primary' className='min-w-55 w-full'>
              <span>No Trailer</span>
            </Button>
          )}

          <div className='md:absolute md:top-none right-none'>
            <FavoriteButton movie={movie} />
          </div>
        </div>
      </div>
    </article>
  );
}
