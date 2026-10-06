import api from '@/lib/axios';
import {
  type MovieResponse,
  type MovieVideosResponse,
  type MovieDetail,
  type MovieCreditsResponse,
} from '@/types/movie';

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
  getNowPlayingMovies: async (page: number): Promise<MovieResponse> => {
    const response = await api.get<MovieResponse>('/movie/now_playing', {
      params: {
        page,
      },
    });

    return response.data;
  },

  getMovieVideos: async (movieId: number): Promise<MovieVideosResponse> => {
    const response = await api.get<MovieVideosResponse>(
      `/movie/${movieId}/videos`
    );

    return response.data;
  },

  // TODO: Implement getMovieDetails function
  // Endpoint: GET /movie/{movie_id}
  getMovieDetails: async (movieId: number): Promise<MovieDetail> => {
    const response = await api.get<MovieDetail>(`/movie/${movieId}`);

    return response.data;
  },

  getMovieCredits: async (movieId: number): Promise<MovieCreditsResponse> => {
    const response = await api.get<MovieCreditsResponse>(
      `/movie/${movieId}/credits`
    );

    return response.data;
  },

  // TODO: Implement searchMovies function
  // Endpoint: GET /search/movie

  // TODO: Add more endpoints as needed
};
