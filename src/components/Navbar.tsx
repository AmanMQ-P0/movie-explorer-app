import { Link, NavLink } from 'react-router-dom';
import { Search, AlignJustify, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from './ui/button';
import { Logo } from './Logo';

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

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener('change', handleBreakpointChange);

    return () => {
      mediaQuery.removeEventListener('change', handleBreakpointChange);
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
          <Link to='/' aria-label='Movie Explorer home'>
            <Logo />
          </Link>

          <div className='hidden md:flex items-center gap-6xl'>
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
            className='flex justify-center items-center md:py-md md:px-xl md:border md:border-neutral-800 md:rounded-2xl md:gap-md md:w-60 md:justify-start'
          >
            <Search aria-hidden='true' className='md:text-neutral-500' />
            <span className='hidden md:block text-md font-normal text-neutral-500'>
              Search Movie
            </span>
          </Link>

          <Button
            type='button'
            variant='ghost'
            aria-label='Open menu'
            aria-expanded={isMenuOpen}
            aria-controls='mobile-menu'
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <AlignJustify aria-hidden='true' />
          </Button>
        </div>
      </nav>

      {createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              id='mobile-menu'
              className='bg-base-black fixed inset-0 z-110 md:hidden'
            >
              <div className='px-xl pt-xl'>
                <div className='max-h-7xl flex items-center justify-between'>
                  <Link
                    to='/'
                    aria-label='Movie Explorer home'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Logo />
                  </Link>

                  <Button
                    type='button'
                    variant='ghost'
                    aria-label='Close menu'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X aria-hidden='true' />
                  </Button>
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
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
}
