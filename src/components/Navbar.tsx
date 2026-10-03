import { Link, NavLink } from 'react-router-dom';
import { Search, AlignJustify, X } from 'lucide-react';
import iconTv from '@/assets/icons/tv-icon.svg';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const trendingNowSection = document.getElementById('trending-now');

      if (!trendingNowSection) return;

      const trendingNowSectionTop =
        trendingNowSection.getBoundingClientRect().top;

      setIsScrolled(trendingNowSectionTop <= 64);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`border-2 border-amber-400 max-w-360 mx-auto h-16 flex items-center px-xl fixed inset-x-none top-none z-100 lg:h-22.5 xl:px-11xl ${
        isScrolled ? 'bg-base-black/60 backdrop-blur-md' : 'bg-transparent'
      } transition-[background-color,backdrop-filter] duration-300 ease-in-out`}
    >
      <nav className='border-2 border-blue-600 flex justify-between items-center w-full'>
        <div className='flex items-center gap-8xl'>
          <Link
            to='/'
            aria-label='Movie Explorer home'
            className='flex items-center gap-xs lg:gap-md'
          >
            <img src={iconTv} alt='' className='md:w-10 md:h-10' />
            <span className='text-xl font-semibold tracking-[-0.04em] lg:text-display-sm'>
              Movie
            </span>
          </Link>

          <div className='hidden lg:flex items-center gap-6xl'>
            <NavLink to='/' className='text-md font-normal text-base-white'>
              Home
            </NavLink>
            <NavLink
              to='/favorites'
              className='text-md font-normal text-base-white'
            >
              Favorites
            </NavLink>
          </div>
        </div>

        <div className='flex items-center gap-3xl'>
          <Link
            to='/search'
            aria-label='Search movies'
            className='flex justify-center items-center lg:py-md lg:px-xl lg:border lg:border-neutral-800 lg:rounded-2xl lg:gap-md lg:w-60 lg:justify-start'
          >
            <Search aria-hidden='true' className='lg:text-neutral-500' />
            <span className='hidden lg:block text-md font-normal text-neutral-500'>
              Search Movie
            </span>
          </Link>

          <button
            type='button'
            aria-label='Open menu'
            aria-expanded={isMenuOpen}
            aria-controls='mobile-menu'
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className='lg:hidden'
          >
            <AlignJustify aria-hidden='true' />
          </button>
        </div>
      </nav>

      {isMenuOpen &&
        createPortal(
          <div
            id='mobile-menu'
            className='bg-base-black fixed inset-0 z-110 lg:hidden'
          >
            <div className='px-xl pt-xl'>
              <div className='max-h-7xl flex items-center justify-between'>
                <Link
                  to='/'
                  aria-label='Movie Explorer home'
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center gap-xs'
                >
                  <img src={iconTv} alt='' />
                  <span className='text-xl font-semibold tracking-[-0.04em]'>
                    Movie
                  </span>
                </Link>

                <button
                  type='button'
                  aria-label='Close menu'
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X aria-hidden='true' />
                </button>
              </div>

              <nav className='mt-12 flex flex-col gap-xl'>
                <NavLink
                  to='/'
                  onClick={() => setIsMenuOpen(false)}
                  className='text-md font-normal text-base-white'
                >
                  Home
                </NavLink>

                <NavLink
                  to='/favorites'
                  onClick={() => setIsMenuOpen(false)}
                  className='text-md font-normal text-base-white'
                >
                  Favorites
                </NavLink>
              </nav>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
