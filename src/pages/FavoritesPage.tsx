import { useMovieStore } from '@/store/movieStore';

export default function FavoritesPage() {
  const favorites = useMovieStore((state) => state.favorites);

  return (
    <section className='mt-30'>
      <h1>Favorites</h1>
      {favorites.length === 0
        ? 'daftar favorites kosong'
        : favorites.map((favorite) => (
            <div key={favorite.id}>
              <h2>{favorite.title}</h2>
            </div>
          ))}
    </section>
  );
}
