import { Skeleton } from '@/components/ui/skeleton';

export default function HeroSkeleton() {
  return (
    <section className='max-w-360 mx-auto'>
      <div className='relative aspect-video'>
        {/* Backdrop */}
        <div className='h-full w-full'>
          <Skeleton className='bg-neutral-900 h-full w-full rounded-none' />
        </div>

        {/* Hero content */}
        <div className='px-xl pt-md sm:pt-lg xl:px-11xl h-75 w-full md:absolute md:top-1/3 md:h-73'>
          <div className='flex flex-col gap-3xl md:w-2/3 lg:gap-6xl'>
            <div className='flex flex-col gap-lg'>
              {/* Title */}
              <Skeleton className='bg-neutral-900 md:bg-neutral-950 h-8 w-3/4 lg:h-12 lg:w-2/3' />

              {/* Overview */}
              <div className='flex flex-col gap-md'>
                <Skeleton className='bg-neutral-900 md:bg-neutral-950 h-4 w-full' />
                <Skeleton className='bg-neutral-900 md:bg-neutral-950 h-4 w-5/6' />
                <Skeleton className='bg-neutral-900 md:bg-neutral-950 h-4 w-2/3' />
              </div>
            </div>

            {/* Buttons */}
            <div className='flex flex-col gap-xl sm:flex-row sm:justify-center sm:items-center md:justify-start'>
              <Skeleton className='bg-neutral-900 md:bg-neutral-950 h-10 w-full rounded-full sm:w-57' />
              <Skeleton className='bg-neutral-900 md:bg-neutral-950 h-10 w-full rounded-full sm:w-57' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
