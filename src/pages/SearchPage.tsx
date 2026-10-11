import { useSearchParams } from 'react-router-dom';
import { useSearchMovies } from '@/hooks/useMovies';
import SearchResults from '@/components/search/SearchResults';
import SearchNotFound from '@/components/search/SearchNotFound';
import SearchEmptyState from '@/components/search/SearchEmptyState';

// Pencarian film menggunakan useInfiniteQuery dengan maksimal 20 hasil per halaman.
// Hasil dari halaman berikutnya belum ditampilkan karena desain Figma
// belum menyediakan komponen Load More atau pagination.

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
      <div className='border-2 border-blue-600 min-h-150'>
        {!query.trim() ? (
          <SearchEmptyState />
        ) : searchResults.isPending ? null : searchResults.isError ? null : movies.length ===
          0 ? (
          <SearchNotFound />
        ) : (
          <SearchResults movies={movies} />
        )}
      </div>
    </main>
  );
}
