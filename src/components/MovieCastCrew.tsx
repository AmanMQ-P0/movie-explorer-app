import type { MovieCreditsResponse } from '@/types/movie';
import MovieImage from './MovieImage';
import { IMAGE_SIZES } from '@/lib/constants';
import MovieCastCrewSkeleton from './MovieCastCrewSkeleton';
import ErrorInitialState from './ErrorInitialState';

interface MovieCastCrewProps {
  credits?: MovieCreditsResponse;
  isLoading: boolean;
  isError: boolean;
  onRetry: () => Promise<unknown>;
}

export default function MovieCastCrew({
  credits,
  isLoading,
  isError,
  onRetry,
}: MovieCastCrewProps) {
  if (isLoading) {
    return <MovieCastCrewSkeleton />;
  }

  if (isError) {
    return (
      <ErrorInitialState
        message='Failed to load cast & crew.'
        onRetry={onRetry}
      />
    );
  }

  if (!credits) {
    return null;
  }

  return (
    <section className='max-w-360 mx-auto px-xl xl:px-11xl'>
      <div className='my-3xl flex flex-col gap-xl lg:gap-3xl lg:mt-5xl lg:mb-7xl'>
        <h2 className='text-xl font-bold lg:text-display-md'>Cast & Crew</h2>

        <div className='grid grid-cols-1 gap-lg sm:grid-cols-2 sm:gap-3xl lg:grid-cols-3'>
          {credits.cast.slice(0, 5).map((cast) => (
            <div key={cast.id} className='flex gap-lg items-center'>
              <MovieImage
                path={cast.profile_path}
                size={IMAGE_SIZES.profile.medium}
                alt={cast.name}
                className='w-14 h-21 rounded-md lg:w-17 lg:h-27'
              />

              {/* hanya menampilkan 5 data dari cast, adapun data-data cast dan crew yang tersisa tidak ditampilkan ke UI karena menyesuaikan dengan desain figma yang hanya menampilkan 5 cast */}

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
      </div>
    </section>
  );
}
