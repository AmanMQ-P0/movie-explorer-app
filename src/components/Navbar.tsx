import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, AlignJustify, X } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from './ui/button';
import { Logo } from './Logo';

export default function Navbar() {
  const location = useLocation();
  const isSearchPage = location.pathname === '/search';
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbarScrollTrigger = document.getElementById(
        'navbar-scroll-trigger'
      );

      if (!navbarScrollTrigger) return;

      const navbarScrollTriggerSectionTop =
        navbarScrollTrigger.getBoundingClientRect().top;

      setIsScrolled(navbarScrollTriggerSectionTop <= 64);
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
      className={`max-w-360 mx-auto h-16 flex items-center px-xl fixed inset-x-none top-none z-100 lg:h-22.5 xl:px-11xl ${
        isScrolled ? 'bg-base-black/60 backdrop-blur-md' : 'bg-transparent'
      } transition-[background-color,backdrop-filter] duration-300 ease-in-out`}
    >
      <nav className='flex justify-between items-center w-full'>
        <div className='flex items-center gap-8xl'>
          <Link to='/' aria-label='Movie Explorer home'>
            <Logo />
          </Link>

          <div className='hidden md:flex items-center gap-6xl'>
            <NavLink
              to='/'
              className='group relative px-md py-sm text-md font-normal text-base-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-base-white after:transition-all after:duration-300 after:ease-out hover:after:w-full before:absolute before:inset-0 before:-z-10 before:bg-base-black/60 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100'
            >
              Home
            </NavLink>
            <NavLink
              to='/favorites'
              className='group relative px-md py-sm text-md font-normal text-base-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-base-white after:transition-all after:duration-300 after:ease-out hover:after:w-full before:absolute before:inset-0 before:-z-10 before:bg-base-black/60 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100'
            >
              Favorites
            </NavLink>
          </div>
        </div>

        <div className='flex items-center gap-3xl'>
          <Link
            to='/search'
            aria-label='Search movies'
            className='flex justify-center items-center md:py-md md:px-xl md:border md:border-neutral-800 md:rounded-2xl md:gap-md md:w-60 md:justify-start group md:hover:bg-base-black/60 md:hover:border-neutral-400 transition-colors duration-300 ease-in-out'
          >
            <Search
              aria-hidden='true'
              className='hover:text-neutral-400 md:text-neutral-500 md:group-hover:text-neutral-25 transition-colors duration-300 ease-in-out'
            />
            <span className='hidden md:block text-md font-normal text-neutral-500 group-hover:text-neutral-25 transition-colors duration-300 ease-in-out'>
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
                  <NavLink to='/' onClick={() => setIsMenuOpen(false)}>
                    <span className='relative text-md font-normal text-base-white transition-colors duration-300 ease-in-out hover:text-neutral-400 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100'>
                      Home
                    </span>
                  </NavLink>

                  <NavLink to='/favorites' onClick={() => setIsMenuOpen(false)}>
                    <span className='relative text-md font-normal text-base-white transition-colors duration-300 ease-in-out hover:text-neutral-400 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100'>
                      Favorites
                    </span>
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
