import { useMovieStore } from '@/store/movieStore';
import FavoriteMovies from '@/components/favorites/FavoriteMovies';
import EmptyFavorites from '@/components/favorites/EmptyFavorites';

export default function FavoritesPage() {
  const favorites = useMovieStore((state) => state.favorites);

  return (
    <main
      id='navbar-scroll-trigger'
      className='max-w-360 mx-auto mt-8xl px-xl xl:px-11xl'
    >
      <div className='pt-3xl pb-5xl'>
        <h1 className='text-display-xs font-bold lg:text-display-lg'>
          Favorites
        </h1>

        {favorites.length === 0 ? (
          <EmptyFavorites />
        ) : (
          <FavoriteMovies movies={favorites} />
        )}
      </div>
    </main>
  );
}
