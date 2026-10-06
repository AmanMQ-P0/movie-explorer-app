import { useParams } from 'react-router-dom';
import { useMovieDetails } from '@/hooks/useMovies';
import MovieDetailInfo from '@/components/MovieDetailInfo';
import { useMovieCredits } from '@/hooks/useMovies';
import MovieCastCrew from '@/components/MovieCastCrew';

export default function MovieDetailPage() {
  const { movieId } = useParams<{ movieId: string }>();
  const idNumber = movieId ? Number(movieId) : undefined;

  const movieDetail = useMovieDetails(idNumber);

  const movieCredits = useMovieCredits(idNumber);

  if (!movieDetail.data) {
    return null;
  }

  return (
    <main>
      <MovieDetailInfo movie={movieDetail.data} />

      {movieCredits.data && <MovieCastCrew credits={movieCredits.data} />}
    </main>
  );
}
