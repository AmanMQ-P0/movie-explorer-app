import { IMAGE_SIZES } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import type { Movie } from '@/types/movie';
import starIcon from '@/assets/icons/star-icon.svg';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className='flex flex-col gap-md w-42.5 h-90 shrink-0 lg:w-55 lg:h-120'>
      <img
        src={getImageUrl(movie.poster_path, IMAGE_SIZES.poster.medium)}
        alt={movie.title}
        className='w-full rounded-xl'
      />

      <div className='flex flex-col gap-md'>
        <h3 className='text-md font-semibold lg:text-lg'>{movie.title}</h3>

        <div className='flex items-center gap-xs'>
          <img src={starIcon} alt='' />

          <p className='text-sm font-normal text-neutral-400 lg:text-md'>
            {movie.vote_average.toFixed(1)}/10
          </p>
        </div>
      </div>
    </article>
  );
}
