import { Search } from 'lucide-react';

export default function SearchEmptyState() {
  return (
    <div className='flex min-h-150 flex-col items-center justify-center gap-lg text-center'>
      <Search aria-hidden='true' className='size-12 text-neutral-500' />

      <div className='flex flex-col gap-sm'>
        <h2 className='text-lg font-semibold'>Find Your Next Favorite Movie</h2>

        <p className='text-md text-neutral-400'>
          Search for a movie by its title.
        </p>
      </div>
    </div>
  );
}
