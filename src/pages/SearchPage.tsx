import { useSearchParams } from 'react-router-dom';
import { useSearchMovies } from '@/hooks/useMovies';

export default function SearchPage() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('q') ?? '';

  const searchResults = useSearchMovies(query);

  const movies =
    searchResults.data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <main className='border-2 border-amber-400 max-w-360 mx-auto mt-8xl px-xl xl:px-11xl'>
      <div className='border-2 border-blue-600 min-h-100'>
        <h1 className='text-center'>hasilnya akan tampil disini</h1>
        <h2 className='text-center'>Total loaded movies: {movies.length}</h2>

        <div className='border-2 border-blue-600 min-h-100'>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
