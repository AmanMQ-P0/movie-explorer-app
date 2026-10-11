import { Skeleton } from '@/components/ui/skeleton';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function NewReleaseSkeleton() {
  const isSm = useMediaQuery('(min-width: 640px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const isXl = useMediaQuery('(min-width: 1280px)');

  const skeletonCount = isXl ? 15 : isMd ? 16 : isSm ? 12 : 8;

  return (
    <div className='grid grid-cols-2 gap-x-xl gap-y-4xl sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5'>
      {Array.from({ length: skeletonCount }, (_, index) => (
        <div key={index}>
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
