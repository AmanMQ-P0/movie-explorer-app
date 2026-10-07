import { useParams } from 'react-router-dom';
import {
  useMovieDetails,
  useMovieCredits,
  useMovieVideos,
  useMovieReleaseDates,
} from '@/hooks/useMovies';
import MovieDetailInfo from '@/components/MovieDetailInfo';
import MovieCastCrew from '@/components/MovieCastCrew';

export default function MovieDetailPage() {
  const { movieId } = useParams<{ movieId: string }>();
  const idNumber = movieId ? Number(movieId) : undefined;

  const movieDetail = useMovieDetails(idNumber);
  const movieCredits = useMovieCredits(idNumber);
  const movieVideos = useMovieVideos(idNumber);
  const movieReleaseDates = useMovieReleaseDates(idNumber);

  if (!movieDetail.data) {
    return null;
  }

  return (
    <main>
      <MovieDetailInfo
        movie={movieDetail.data}
        videos={movieVideos.data?.results ?? []}
        releaseDates={movieReleaseDates.data?.results ?? []}
      />

      {movieCredits.data && <MovieCastCrew credits={movieCredits.data} />}
    </main>
  );
}
