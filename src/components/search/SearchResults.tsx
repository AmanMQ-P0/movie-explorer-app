import type { Movie } from '@/types/movie';
import SearchResultItem from './SearchResultItem';

interface SearchResultsProps {
  movies: Movie[];
}

export default function SearchResults({ movies }: SearchResultsProps) {
  return (
    <section>
      {movies.map((movie) => (
        <SearchResultItem key={movie.id} movie={movie} />
      ))}
    </section>
  );
}
