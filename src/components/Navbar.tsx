import { Link, NavLink } from 'react-router-dom';
import { Search, AlignJustify } from 'lucide-react';
import iconTv from '@/assets/icons/tv-icon.svg';

export default function Navbar() {
  return (
    <header className='border-2 border-amber-400 max-w-360 my-none mx-auto h-[64px] flex justify-center items-center px-xl'>
      <nav className='border-2 border-blue-600 flex justify-between w-full'>
        <Link
          to='/'
          aria-label='Movie Explorer home'
          className='flex justify-center gap-xs'
        >
          <img src={iconTv} alt='' />
          Movie
        </Link>

        <div className='hidden'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/favorites'>Favorites</NavLink>
        </div>

        <Link
          to='/search'
          aria-label='Search movies'
          className='flex justify-center gap-3xl'
        >
          <Search aria-hidden='true' />
          <span className='hidden'>Search Movie</span>
          <AlignJustify />
        </Link>
      </nav>
    </header>
  );
}
