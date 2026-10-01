import { useNowPlayingMovies, usePopularMovies } from '@/hooks/useMovies';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import TrendingNowSection from '@/components/TrendingNowSection';
import NewReleaseSection from '@/components/NewReleaseSection';

export default function HomePage() {
  const popularMovies = usePopularMovies(1);
  const {
    data: nowPlayingData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useNowPlayingMovies();

  if (popularMovies.isLoading || !nowPlayingData) {
    return <div>Loading...</div>;
  }

  if (popularMovies.isError) {
    return <div>Failed to load movies.</div>;
  }

  if (!popularMovies.data || !nowPlayingData) {
    return null;
  }

  const featuredMovie = popularMovies.data.results[0];

  if (!featuredMovie) {
    return null;
  }

  const newReleaseMovies =
    nowPlayingMovies.data.pages.flatMap((page) => page.results) ?? [];

  return (
    <>
      <Navbar />

      <HeroSection movie={featuredMovie} />

      <main>
        <TrendingNowSection movies={popularMovies.data.results} />

        <NewReleaseSection movies={newReleaseMovies} />
      </main>

      <Footer />
    </>
  );
}
