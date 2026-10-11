import { Logo } from './Logo';

export default function Footer() {
  return (
    <footer className='max-w-360 mx-auto py-3xl px-xl border-t border-neutral-800 md:mt-10 xl:px-11xl md:py-md'>
      <div className='h-30 flex flex-col gap-md md:flex-row md:justify-between md:items-center'>
        <Logo />

        <p className='text-xs font-normal text-neutral-600 md:text-md'>
          Copyright ©2025 Movie Explorer
        </p>
      </div>
    </footer>
  );
}
