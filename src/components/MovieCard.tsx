import { IMAGE_SIZES } from '@/lib/constants';
import type { Movie } from '@/types/movie';
import starIcon from '@/assets/icons/star-icon.svg';
import MovieImage from './MovieImage';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: Movie;
  rank?: number;
}

export default function MovieCard({ movie, rank }: MovieCardProps) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className='group transition-transform duration-300 hover:scale-[1.03]'
    >
      <article className='flex flex-col w-full h-full relative'>
        <MovieImage
          path={movie.poster_path}
          alt={movie.title}
          size={IMAGE_SIZES.poster.medium}
          className='w-full aspect-2/3 rounded-xl object-cover'
        />

        <h3 className='text-md font-semibold pt-md lg:text-lg'>
          {movie.title}
        </h3>

        <div className='flex items-center gap-xs'>
          <img src={starIcon} alt='' />

          <p className='text-sm font-normal text-neutral-400 lg:text-md'>
            {movie.vote_average.toFixed(1)}/10
          </p>
        </div>

        {rank !== undefined && (
          <span className='absolute top-md left-md bg-base-black/60 w-4xl h-4xl rounded-full flex justify-center items-center text-sm font-semibold md:w-6xl md:h-6xl md:top-lg md:left-lg md:text-lg'>
            {rank}
          </span>
        )}

        <div className='absolute inset-0 group-hover:bg-base-black/40 transition-colors duration-300' />
      </article>
    </Link>
  );
}
