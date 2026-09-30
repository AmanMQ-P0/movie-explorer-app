import { IMAGE_SIZES } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import type { Movie } from '@/types/movie';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className='border-2 border-blue-600 flex flex-col justify-center gap-md w-42.5 h-90 shrink-0'>
      <img
        src={getImageUrl(movie.poster_path, IMAGE_SIZES.poster.medium)}
        alt={movie.title}
        className='w-full h-full'
      />

      <div className='flex flex-col justify-center gap-md'>
        <h3>{movie.title}</h3>

        <p>{movie.vote_average.toFixed(1)}/10</p>
      </div>
    </article>
  );
}
