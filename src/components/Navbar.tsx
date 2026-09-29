import { Link, NavLink } from 'react-router-dom';
import { Tv, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link to='/' aria-label='Movie Explorer home'>
          <Tv aria-hidden='true' />
          Movie
        </Link>

        <div>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/favorites'>Favorites</NavLink>
        </div>

        <Link to='/search' aria-label='Search movies'>
          <Search aria-hidden='true' />
          Search Movie
        </Link>
      </nav>
    </header>
  );
}
