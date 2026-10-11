export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
}

export interface MovieResponse {
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

export interface MovieCast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface MovieCrew {
  id: number;
  name: string;
  job: string;
  profile_path: string | null;
}

export interface MovieCreditsResponse {
  id: number;
  cast: MovieCast[];
  crew: MovieCrew[];
}

export interface MovieReleaseDate {
  certification: string;
  descriptors: string[];
  iso_639_1: string;
  note: string;
  release_date: string;
  type: number;
}

export interface MovieReleaseDatesResult {
  iso_3166_1: string;
  release_dates: MovieReleaseDate[];
}

export interface MovieReleaseDatesResponse {
  id: number;
  results: MovieReleaseDatesResult[];
}
