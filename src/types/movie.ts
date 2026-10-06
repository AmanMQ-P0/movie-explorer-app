// TODO: Define TypeScript interfaces for Movie data
// Hint: Check TMDB API documentation for the movie object structure
// https://developer.themoviedb.org/reference/movie-details

export interface Movie {
  // TODO: Add movie properties based on TMDB API response
  // Examples: id, title, overview, poster_path, etc.
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
}

export interface MovieResponse {
  // TODO: Add pagination properties
  // Examples: page, results, total_pages, total_results
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieVideo {
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
}

export interface MovieVideosResponse {
  id: number;
  results: MovieVideo[];
}

// TODO: Add more types as needed (Genre, Video, etc.)
export interface MovieGenre {
  id: number;
  name: string;
}

export interface MovieDetail {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date: string;
  genres: MovieGenre[];
}
