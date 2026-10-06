import { useParams } from 'react-router-dom';
import { useMovieDetails } from '@/hooks/useMovies';
import MovieDetailInfo from '@/components/MovieDetailInfo';

export default function MovieDetailPage() {
  const { movieId } = useParams<{ movieId: string }>();
  const idNumber = movieId ? Number(movieId) : undefined;

  const movieDetail = useMovieDetails(idNumber);

  if (!movieDetail.data) {
    return null;
  }

  return <MovieDetailInfo movie={movieDetail.data} />;
}
