import MovieCard from '@/components/MovieCard';
import { useNowPlayingMovies, usePopularMovies } from '@/hooks/useMovies';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  const popularMovies = usePopularMovies(1);
  const nowPlayingMovies = useNowPlayingMovies(1);

  if (popularMovies.isLoading || nowPlayingMovies.isLoading) {
    return <div>Loading...</div>;
  }

  if (popularMovies.isError || nowPlayingMovies.isError) {
    return <div>Failed to load movies.</div>;
  }

  if (!popularMovies.data || !nowPlayingMovies.data) {
    return null;
  }

  return (
    <>
      <Navbar />
      
      <main>
        <section>
          <h1>Trending Now</h1>

          <div>
            {popularMovies.data.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        <section>
          <h1>New Release</h1>

          <div>
            {nowPlayingMovies.data.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
