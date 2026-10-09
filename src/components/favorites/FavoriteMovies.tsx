import type { Movie } from '@/types/movie';
import FavoriteButton from '@/components/FavoriteButton';
import MovieImage from '../MovieImage';
import { IMAGE_SIZES } from '@/lib/constants';
import starIcon from '@/assets/icons/star-icon.svg';
import { Button } from '../ui/button';
import playIcon from '@/assets/icons/play-icon.svg';

interface FavoriteMoviesProps {
  movies: Movie[];
}

export default function FavoriteMovies({ movies }: FavoriteMoviesProps) {
  return (
    <section>
      {movies.map((movie) => (
        <article
          key={movie.id}
          className='border-b border-b-neutral-800 py-4xl last:border-b-0 md:flex md:gap-xl'
        >
          <MovieImage
            path={movie.poster_path}
            size={IMAGE_SIZES.poster.medium}
            alt={movie.title}
            className='hidden w-47 h-68 rounded-xl md:block'
          />

          <div className='flex flex-col gap-3xl md:relative'>
            <div className='flex gap-xl'>
              <MovieImage
                path={movie.poster_path}
                size={IMAGE_SIZES.poster.medium}
                alt={movie.title}
                className='w-26 h-39 rounded-md md:hidden'
              />

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
              <Button variant='primary' className='min-w-55 w-full' asChild>
                <a
                  href={`https://www.youtube.com/`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='lg:text-md'>Watch Trailer</span>
                  <img src={playIcon} alt='' />
                </a>
              </Button>

              <div className='md:absolute md:top-none right-none'>
                <FavoriteButton movie={movie} />
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
