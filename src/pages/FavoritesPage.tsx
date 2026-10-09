import { useMovieStore } from '@/store/movieStore';
import FavoriteMovies from '@/components/favorites/FavoriteMovies';
import EmptyFavorites from '@/components/favorites/EmptyFavorites';

export default function FavoritesPage() {
  const favorites = useMovieStore((state) => state.favorites);

  return (
    <main className='border-2 border-amber-400'>
      <div className='border-2 border-blue-600'>
        <h1>Favorites</h1>

        {favorites.length === 0 ? (
          <EmptyFavorites />
        ) : (
          <FavoriteMovies movies={favorites} />
        )}
      </div>
    </main>
  );
}
