import { Skeleton } from '@/components/ui/skeleton';

export default function TrendingNowSkeleton() {
  return (
    <div className='flex gap-xl overflow-hidden lg:gap-2xl'>
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index} className='w-33 sm:w-40 md:w-50 shrink-0 lg:w-55'>
          <div className='flex flex-col w-full h-full gap-md'>
            {/* Poster */}
            <Skeleton className='bg-neutral-900 w-full aspect-2/3 rounded-xl' />

            {/* Movie title */}
            <Skeleton className='bg-neutral-900 h-4 w-3/4' />

            {/* Rating */}
            <div className='flex items-center gap-xs'>
              <Skeleton className='bg-neutral-900 size-3 rounded-full' />
              <Skeleton className='bg-neutral-900 h-3 w-12' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
