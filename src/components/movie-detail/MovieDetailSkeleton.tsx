import { Skeleton } from '../ui/skeleton';

export default function MovieDetailSkeleton() {
  return (
    <section className='max-w-360 mx-auto px-xl xl:px-11xl'>
      {/* Backdrop */}
      <div className='aspect-video'>
        <Skeleton className='bg-neutral-900 h-full w-full rounded-none' />
      </div>

      {/* Movie information */}
      <div className='mt-xl'>
        <div className='flex flex-col gap-xl sm:flex-row'>
          {/* Poster */}
          <Skeleton className='bg-neutral-900 w-60 h-65 rounded-xl hidden sm:block lg:w-70 lg:h-75 xl:w-80 xl:h-90' />

          <div className='w-full'>
            <div className='flex gap-xl'>
              <Skeleton className='bg-neutral-900 min-w-25 min-h-40 rounded-xl sm:hidden' />
              {/* Title + release date */}
              <div className='flex flex-col gap-md'>
                <Skeleton className='w-40 h-8 bg-neutral-900 rounded-xl' />
                <Skeleton className='w-11xl h-5 bg-neutral-900 rounded-xl' />
              </div>
            </div>
            <div>
              {/* Buttons */}
              <div className='flex items-center justify-center gap-xl mt-xl sm:justify-start'>
                <Skeleton className='bg-neutral-900 min-w-55 w-full max-w-100 h-8 rounded-full sm:w-55' />
                <Skeleton className='w-6 h-6 rounded-xl bg-neutral-900' />
              </div>

              {/* Rating / Genre / Age Limit */}
              <div className='flex gap-md mt-xl'>
                <Skeleton className='min-w-10 w-full h-20 bg-neutral-900 sm:h-23 md:h-26 lg:h-30 xl:h-11xl' />
                <Skeleton className='min-w-10 w-full h-20 bg-neutral-900 sm:h-23 md:h-26 lg:h-30 xl:h-11xl' />
                <Skeleton className='min-w-10 w-full h-20 bg-neutral-900 sm:h-23 md:h-26 lg:h-30 xl:h-11xl' />
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className='mt-3xl flex flex-col gap-xl'>
          <Skeleton className='bg-neutral-900 h-12 w-60' />
          <div className='flex flex-col gap-md'>
            <Skeleton className='bg-neutral-900 h-6 w-full' />
            <Skeleton className='bg-neutral-900 h-6 w-[90%]' />
            <Skeleton className='bg-neutral-900 h-6 w-[80%]' />
            <Skeleton className='bg-neutral-900 h-6 w-[70%] lg:hidden' />
            <Skeleton className='bg-neutral-900 h-6 w-[60%] md:hidden' />
          </div>
        </div>
      </div>
    </section>
  );
}
