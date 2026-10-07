import type { MovieCreditsResponse } from '@/types/movie';
import MovieImage from './MovieImage';
import { IMAGE_SIZES } from '@/lib/constants';

interface MovieCastCrewProps {
  credits: MovieCreditsResponse;
}

export default function MovieCastCrew({ credits }: MovieCastCrewProps) {
  return (
    <section className='border-2 border-amber-400 max-w-360 mx-auto px-xl xl:px-11xl'>
      <div className='border-2 border-blue-600 my-3xl flex flex-col gap-xl lg:gap-3xl lg:mt-5xl lg:mb-7xl'>
        <h2 className='text-xl font-bold lg:text-display-md'>Cast & Crew</h2>

        <div className='grid grid-cols-1 gap-lg sm:grid-cols-2 sm:gap-3xl lg:grid-cols-3'>
          {credits.cast.map((cast) => (
            <div key={cast.id} className='flex gap-lg items-center'>
              <MovieImage
                path={cast.profile_path}
                size={IMAGE_SIZES.profile.medium}
                alt={cast.name}
                className='w-14 h-21 rounded-md lg:w-17 lg:h-27'
              />

              <div>
                <h3 className='text-sm font-semibold lg:text-md'>
                  {cast.name}
                </h3>
                <p className='text-sm font-normal text-neutral-400 lg:text-md'>
                  {cast.character}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 gap-lg sm:grid-cols-2 sm:gap-3xl lg:grid-cols-3'>
          {credits.crew.map((crew) => (
            <div key={crew.id} className='flex gap-lg items-center'>
              <MovieImage
                path={crew.profile_path}
                size={IMAGE_SIZES.profile.medium}
                alt={crew.name}
                className='w-14 h-21 rounded-md lg:w-17 lg:h-27'
              />

              <div>
                <h3 className='text-sm font-semibold lg:text-md'>
                  {crew.name}
                </h3>
                <p className='text-sm font-normal text-neutral-400 lg:text-md'>
                  {crew.job}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
