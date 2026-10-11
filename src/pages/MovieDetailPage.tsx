import { useParams } from 'react-router-dom';
import {
  useMovieDetails,
  useMovieCredits,
  useMovieVideos,
  useMovieReleaseDates,
} from '@/hooks/useMovies';
import MovieDetailInfo from '@/components/MovieDetailInfo';
import MovieCastCrew from '@/components/movie-detail/MovieCastCrew';
// import ErrorInitialState from '@/components/ErrorInitialState';
// import MovieCastCrewSkeleton from '@/components/MovieCastCrewSkeleton';

export default function MovieDetailPage() {
  const { movieId } = useParams<{ movieId: string }>();
  const idNumber = movieId ? Number(movieId) : undefined;

  const movieDetail = useMovieDetails(idNumber);
  const movieCredits = useMovieCredits(idNumber);
  const movieVideos = useMovieVideos(idNumber);
  const movieReleaseDates = useMovieReleaseDates(idNumber);

  return (
    <main>
      <MovieDetailInfo
        movie={movieDetail.data}
        videos={movieVideos.data?.results ?? []}
        releaseDates={movieReleaseDates.data?.results ?? []}
        isLoading={movieDetail.isLoading}
        isError={movieDetail.isError}
        onRetry={movieDetail.refetch}
      />

      <MovieCastCrew
        credits={movieCredits.data}
        isLoading={movieCredits.isLoading}
        isError={movieCredits.isError}
        onRetry={movieCredits.refetch}
      />
    </main>
  );
}
