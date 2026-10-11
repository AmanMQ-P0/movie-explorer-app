import { useSearchParams } from 'react-router-dom';
import { useSearchMovies } from '@/hooks/useMovies';
import SearchResults from '@/components/search/SearchResults';
import SearchNotFound from '@/components/search/SearchNotFound';
import SearchEmptyState from '@/components/search/SearchEmptyState';
import SearchLoading from '@/components/search/SearchLoading';
import SearchError from '@/components/search/SearchError';

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
      className='max-w-360 mx-auto mt-8xl px-xl xl:px-11xl'
    >
      <div className='min-h-150'>
        {!query.trim() ? (
          <SearchEmptyState />
        ) : searchResults.isPending ? (
          <SearchLoading />
        ) : searchResults.isError ? (
          <SearchError onRetry={() => searchResults.refetch()} />
        ) : movies.length === 0 ? (
          <SearchNotFound />
        ) : (
          <SearchResults movies={movies} />
        )}
      </div>
    </main>
  );
}
