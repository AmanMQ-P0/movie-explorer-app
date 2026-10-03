import { IMAGE_SIZES } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import type { Movie } from '@/types/movie';
import starIcon from '@/assets/icons/star-icon.svg';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = getImageUrl(movie.poster_path, IMAGE_SIZES.poster.medium);

  return (
    <article className='flex flex-col w-full h-full'>
      {posterUrl ? (
        <img
          src={posterUrl}
          alt={movie.title}
          className='w-full aspect-2/3 rounded-xl object-cover'
        />
      ) : (
        <div
          role='img'
          aria-label={`Poster ${movie.title} tidak tersedia`}
          className='w-full aspect-2/3 rounded-xl bg-neutral-800'
        />
      )}

      <h3 className='text-md font-semibold pt-md lg:text-lg'>{movie.title}</h3>

      <div className='flex items-center gap-xs'>
        <img src={starIcon} alt='' />

        <p className='text-sm font-normal text-neutral-400 lg:text-md'>
          {movie.vote_average.toFixed(1)}/10
        </p>
      </div>
    </article>
  );
}
