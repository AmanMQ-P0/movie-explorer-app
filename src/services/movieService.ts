import api from '@/lib/axios';
import {
  type MovieResponse,
  type MovieVideosResponse,
  type MovieDetail,
  type MovieCreditsResponse,
  type MovieReleaseDatesResponse,
} from '@/types/movie';

export const movieService = {
  getPopularMovies: async (page: number): Promise<MovieResponse> => {
    const response = await api.get<MovieResponse>('movie/popular', {
      params: {
        page,
      },
    });

    return response.data;
  },

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

  getMovieReleaseDates: async (
    movieId: number
  ): Promise<MovieReleaseDatesResponse> => {
    const response = await api.get<MovieReleaseDatesResponse>(
      `/movie/${movieId}/release_dates`
    );

    return response.data;
  },

  searchMovies: async (query: string, page: number): Promise<MovieResponse> => {
    const response = await api.get<MovieResponse>('/search/movie', {
      params: {
        query,
        page,
        include_adult: false,
      },
    });

    return response.data;
  },
};
