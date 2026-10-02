import { Tv } from 'lucide-react';
import iconTv from '@/assets/icons/tv-icon.svg';

export default function Footer() {
  return (
    <footer className='max-w-360 mx-auto py-3xl px-xl border-t border-neutral-800 md:mt-10 xl:px-11xl md:py-md'>
      <div className='h-30 flex flex-col gap-md md:flex-row md:justify-between md:items-center'>
        <div className='flex items-center gap-xs lg:gap-md'>
          <img src={iconTv} alt='' className='md:w-10 md:h-10' />
          <span className='text-xl font-semibold tracking-[-0.04em] lg:text-display-sm'>
            Movie
          </span>
        </div>

        <p className='text-xs font-normal text-neutral-600 md:text-md'>
          Copyright ©2025 Movie Explorer
        </p>
      </div>
    </footer>
  );
}
