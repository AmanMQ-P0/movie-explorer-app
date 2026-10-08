import type { Movie } from '@/types/movie';
import { useMovieStore } from '@/store/movieStore';
import { Heart } from 'lucide-react';
import heartIcon from '@/assets/icons/heart.svg';

interface FavoriteButtonProps {
  movie: Movie;
  onFavoriteChange?: (action: 'added' | 'removed') => void;
}

export default function FavoriteButton({
  movie,
  onFavoriteChange,
}: FavoriteButtonProps) {
  const isFavorite = useMovieStore((state) => state.isFavorite(movie.id));

  const addToFavorites = useMovieStore((state) => state.addToFavorites);

  const removeFromFavorites = useMovieStore(
    (state) => state.removeFromFavorites
  );

  const handleToggle = () => {
    if (isFavorite) {
      removeFromFavorites(movie.id);
      onFavoriteChange?.('removed');
    } else {
      addToFavorites(movie);
      onFavoriteChange?.('added');
    }
  };

  return (
    <button
      type='button'
      onClick={handleToggle}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      className='cursor-pointer w-11 h-11 bg-base-black/60 border border-neutral-900 flex justify-center items-center rounded-full lg:w-13 lg:h-13'
    >
      {isFavorite ? <img src={heartIcon} alt='' /> : <Heart />}
    </button>
  );
}
