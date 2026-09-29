import api from '@/lib/axios';
import { type MovieResponse } from '@/types/movie';

// TODO: Create service functions to fetch data from TMDB API
// Reference: https://developer.themoviedb.org/reference/intro/getting-started

export const movieService = {
  // TODO: Implement getPopularMovies function
  // Endpoint: GET /movie/popular
  getPopularMovies: async (page: number): Promise<MovieResponse> => {
    const response = await api.get<MovieResponse>('movie/popular', {
      params: {
        page,
      },
    });

    return response.data;
  },

  // TODO: Implement getNowPlayingMovies function
  // Endpoint: GET /movie/now_playing

  // TODO: Implement getMovieDetails function
  // Endpoint: GET /movie/{movie_id}

  // TODO: Implement searchMovies function
  // Endpoint: GET /search/movie

  // TODO: Add more endpoints as needed
};
