import type { Movie } from '@/types/movie';
import { useMovieStore } from '@/store/movieStore';
import { Heart } from 'lucide-react';

interface FavoriteButtonProps {
  movie: Movie;
}

export default function FavoriteButton({ movie }: FavoriteButtonProps) {
  const isFavorite = useMovieStore((state) => state.isFavorite(movie.id));

  const addToFavorites = useMovieStore((state) => state.addToFavorites);

  const removeFromFavorites = useMovieStore(
    (state) => state.removeFromFavorites
  );

  const handleToggle = () => {
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <button
      type='button'
      onClick={handleToggle}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      className='w-11 h-11 bg-base-black/60 border border-neutral-900 flex justify-center items-center rounded-full lg:w-13 lg:h-13'
    >
      <Heart />
    </button>
  );
}
