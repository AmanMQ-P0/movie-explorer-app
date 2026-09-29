import { useNowPlayingMovies, usePopularMovies } from '@/hooks/useMovies';

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
    <main>
      <section>
        <h1>Trending Now</h1>

        {popularMovies.data.results.map((movie) => (
          <article key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.vote_average}</p>
          </article>
        ))}
      </section>

      <section>
        <h1>New Release</h1>

        {nowPlayingMovies.data.results.map((movie) => (
          <article key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.vote_average}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
