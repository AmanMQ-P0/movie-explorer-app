import { Button } from './ui/button';

interface ErrorStateProps {
  message: string;
  onRetry: () => Promise<unknown>;
}

export default function ErrorInitialState({
  message,
  onRetry,
}: ErrorStateProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-xl w-full h-100'>
      <p role='alert' className='text-center xl:text-md'>
        {message}
      </p>

      <Button
        type='button'
        variant='secondary'
        onClick={onRetry}
        className='w-50 h-11 xl:w-58 xl:h-13 xl:text-md'
      >
        Try Again
      </Button>
    </div>
  );
}
