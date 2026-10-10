import { create } from 'zustand';
import type { Movie } from '@/types/movie';
import { persist } from 'zustand/middleware';
import { STORAGE_KEYS } from '@/lib/constants';

// TODO: Define your store state interface
interface MovieStore {
  // TODO: Add state properties
  // Examples: favorites, watchlist, selectedMovie, etc.

  // TODO: Add action methods
  // Examples: addToFavorites, removeFromFavorites, etc.
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
}

// TODO: Create Zustand store
// Reference: https://zustand.docs.pmnd.rs/getting-started/introduction

export const useMovieStore = create<MovieStore>()(
  persist(
    (set, get) => ({
      // TODO: Initialize state and implement actions
      favorites: [],

      addToFavorites: (movie) =>
        set((state) => {
          const currentMovie = state.favorites.some(
            (favorite) => favorite.id === movie.id
          );

          if (currentMovie) return state;

          return {
            favorites: [...state.favorites, movie],
          };
        }),

      removeFromFavorites: (movieId) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (favorite) => favorite.id !== movieId
          ),
        })),

      isFavorite: (movieId) =>
        get().favorites.some((favorite) => favorite.id === movieId),
    }),
    {
      name: STORAGE_KEYS.favorites,
      partialize: (state) => ({
        favorites: state.favorites,
      }),
    }
  )
);
