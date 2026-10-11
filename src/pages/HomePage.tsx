import { useNowPlayingMovies, usePopularMovies } from '@/hooks/useMovies';
import HeroSection from '@/components/home/HeroSection';
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
    isFetchNextPageError,
    isError: isNowPlayingError,
    refetch: refetchNowPlaying,
  } = useNowPlayingMovies();

  const newReleaseMovies = [
    ...new Map(
      nowPlayingData?.pages
        .flatMap((page) => page.results)
        .map((movie) => [movie.id, movie])
    ).values(),
  ];

  // kode tersebut kalau dipisah:
  // const allMovies = nowPlayingData.pages.flatMap((page) => page.results);

  // const movieMap = new Map(allMovies.map((movie) => [movie.id, movie]));

  // const newReleaseMovies = [...movieMap.values()];

  return (
    <main>
      <HeroSection
        movies={popularMovies.data?.results ?? []}
        isLoading={popularMovies.isLoading}
        isError={popularMovies.isError && !popularMovies.data}
        onRetry={popularMovies.refetch}
      />

      <TrendingNowSection
        movies={popularMovies.data?.results ?? []}
        isLoading={popularMovies.isLoading}
        isError={popularMovies.isError && !popularMovies.data}
        onRetry={popularMovies.refetch}
      />

      <NewReleaseSection
        movies={newReleaseMovies}
        pageCount={nowPlayingData?.pages.length ?? 0}
        hasNextPage={hasNextPage ?? false}
        isFetchingNextPage={isFetchingNextPage}
        isFetchNextPageError={isFetchNextPageError}
        onLoadMore={fetchNextPage}
        isLoading={isNowPlayingLoading}
        isError={isNowPlayingError && !nowPlayingData}
        onRetry={refetchNowPlaying}
      />
    </main>
  );
}
