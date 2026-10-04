import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-primary-300 hover:bg-primary-300/90',
      },
    },
  }
);
