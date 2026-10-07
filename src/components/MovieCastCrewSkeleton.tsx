import { Skeleton } from './ui/skeleton';

export default function MovieCastCrewSkeleton() {
  return (
    <section className='border-2 border-amber-400 max-w-360 mx-auto px-xl xl:px-11xl'>
      <div className='border-2 border-blue-600 my-3xl flex flex-col gap-xl lg:gap-3xl lg:mt-5xl lg:mb-7xl'>
        {/* Section title */}
        <Skeleton className='bg-neutral-900 h-12 w-60' />

        {/* Cast list */}
        <div className='grid grid-cols-1 gap-lg sm:grid-cols-2 sm:gap-3xl lg:grid-cols-3'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className='flex gap-lg items-center'>
              {/* Profile image */}
              <Skeleton className='bg-neutral-900 w-14 h-21 rounded-md lg:w-17 lg:h-27' />

              {/* Name + character */}
              <div className='flex flex-col gap-md w-full'>
                <Skeleton className='bg-neutral-900 h-6 w-[90%]' />
                <Skeleton className='bg-neutral-900 h-6 w-[80%]' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
