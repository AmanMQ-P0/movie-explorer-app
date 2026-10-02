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
    isLoading: isNowPlayingLoading,
    isError: isNowPlayingError,
    isFetchNextPageError,
  } = useNowPlayingMovies();

  if (popularMovies.isLoading || isNowPlayingLoading) {
    return <div>Loading...</div>;
  }

  if (
    (popularMovies.isError && !popularMovies.data) ||
    (isNowPlayingError && !nowPlayingData)
  ) {
    return <div>Failed to load movies.</div>;
  }

  if (!popularMovies.data || !nowPlayingData) {
    return null;
  }

  const newReleaseMovies = [
    ...new Map(
      nowPlayingData.pages
        .flatMap((page) => page.results)
        .map((movie) => [movie.id, movie])
    ).values(),
  ];

  // kode tersebut kalau dipisah:
  // const allMovies = nowPlayingData.pages.flatMap((page) => page.results);

  // const movieMap = new Map(allMovies.map((movie) => [movie.id, movie]));

  // const newReleaseMovies = [...movieMap.values()];

  return (
    <>
      <Navbar />

      <HeroSection movies={popularMovies.data.results} />

      <main>
        <TrendingNowSection movies={popularMovies.data.results} />

        <NewReleaseSection
          movies={newReleaseMovies}
          pageCount={nowPlayingData.pages.length}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          isFetchNextPageError={isFetchNextPageError}
          onLoadMore={fetchNextPage}
        />
      </main>

      <Footer />
    </>
  );
}
