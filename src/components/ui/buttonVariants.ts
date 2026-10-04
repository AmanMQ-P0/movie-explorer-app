import { cva } from 'class-variance-authority';

export const buttonVariants = cva('cursor-pointer', {
  variants: {
    variant: {
      primary:
        'bg-primary-300 hover:bg-primary-300/80 text-sm font-semibold rounded-full flex p-md justify-center items-center gap-md sm:w-57.5',
      secondary:
        'border border-neutral-900 text-sm font-semibold rounded-full flex p-md justify-center items-center bg-base-black/60 hover:bg-neutral-800 sm:w-57.5',
    },
  },
});
