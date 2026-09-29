import MovieCard from '@/components/MovieCard';
import { useNowPlayingMovies, usePopularMovies } from '@/hooks/useMovies';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

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

  const featuredMovie = popularMovies.data.results[0];

  if (!featuredMovie) {
    return null;
  }

  return (
    <>
      <Navbar />

      <HeroSection movie={featuredMovie} />

      <main>
        <section>
          <h2>Trending Now</h2>

          <div>
            {popularMovies.data.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        <section>
          <h2>New Release</h2>

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
