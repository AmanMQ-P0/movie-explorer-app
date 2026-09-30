import { useNowPlayingMovies, usePopularMovies } from '@/hooks/useMovies';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import TrendingNowSection from '@/components/TrendingNowSection';
import NewReleaseSection from '@/components/NewReleaseSection';

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
        <TrendingNowSection movies={popularMovies.data.results} />

        <NewReleaseSection movies={nowPlayingMovies.data.results} />
      </main>

      <Footer />
    </>
  );
}
