import { LoaderCircle } from 'lucide-react';

export default function SearchLoading() {
  return (
    <div
      className='flex min-h-150 flex-col items-center justify-center gap-lg'
      role='status'
      aria-live='polite'
    >
      <LoaderCircle
        aria-hidden='true'
        className='size-10 animate-spin text-neutral-400'
      />

      <p className='text-md font-normal text-neutral-400'>
        Searching movies...
      </p>
    </div>
  );
}
