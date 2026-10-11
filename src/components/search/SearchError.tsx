import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchErrorProps {
  onRetry: () => void;
}

export default function SearchError({ onRetry }: SearchErrorProps) {
  return (
    <section
      className='flex min-h-150 flex-col items-center justify-center gap-lg text-center'
      role='alert'
    >
      <AlertCircle aria-hidden='true' className='size-10 text-neutral-400' />

      <div className='flex flex-col gap-sm'>
        <h2 className='text-lg font-semibold text-base-white'>
          Something Went Wrong
        </h2>

        <p className='text-md text-neutral-400'>
          We couldn't load the search results. Please try again.
        </p>
      </div>

      <Button type='button' variant='primary' onClick={onRetry} className='min-w-50'>
        Try Again
      </Button>
    </section>
  );
}
