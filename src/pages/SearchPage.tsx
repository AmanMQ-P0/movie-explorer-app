import { useSearchParams } from 'react-router-dom';
import { useSearchMovies } from '@/hooks/useMovies';
import SearchResults from '@/components/search/SearchResults';

export default function SearchPage() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('q') ?? '';

  const searchResults = useSearchMovies(query);

  const movies =
    searchResults.data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <main
      id='navbar-scroll-trigger'
      className='border-2 border-amber-400 max-w-360 mx-auto mt-8xl px-xl xl:px-11xl'
    >
      <div className='border-2 border-blue-600 min-h-100'>
        <SearchResults movies={movies} />
      </div>
    </main>
  );
}
