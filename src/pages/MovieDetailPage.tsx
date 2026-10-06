import { useParams } from 'react-router-dom';
import { useMovieDetails } from '@/hooks/useMovies';

export default function MovieDetailPage() {
  const { movieId } = useParams<{ movieId: string }>();
  const idNumber = movieId ? Number(movieId) : undefined;

  const movieDetail = useMovieDetails(idNumber);

  return <div>MovieDetailPage</div>;
}
