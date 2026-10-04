import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'cursor-pointer flex items-center justify-center transition-colors duration-300 ease-in-out',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-300 hover:bg-primary-300/80 text-sm font-semibold rounded-full p-md gap-md sm:w-57.5',
        secondary:
          'border border-neutral-900 text-sm font-semibold rounded-full p-md bg-base-black/60 hover:bg-neutral-800 sm:w-57.5',
        circular:
          'absolute top-55 p-1.75 w-11 h-11 rounded-full lg:w-14 lg:h-14 lg:p-md lg:top-70',
        ghost: 'md:hidden',
      },
    },
  }
);
