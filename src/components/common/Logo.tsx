import iconTv from '@/assets/icons/tv-icon.svg';

export function Logo() {
  return (
    <div className='flex items-center gap-xs lg:gap-md'>
      <img src={iconTv} alt='' className='md:w-10 md:h-10' />
      <span className='text-xl font-semibold tracking-[-0.04em] lg:text-display-sm'>
        Movie
      </span>
    </div>
  );
}
