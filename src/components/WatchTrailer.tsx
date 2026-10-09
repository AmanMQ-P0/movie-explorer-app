import type { MovieVideo } from '@/types/movie';
import { Button } from './ui/button';
import playIcon from '@/assets/icons/play-icon.svg';

interface WatchTrailerProps {
  trailer: MovieVideo;
  className?: string;
}

export default function WatchTrailer({
  trailer,
  className,
}: WatchTrailerProps) {
  return (
    <Button variant='primary' className={className} asChild>
      <a
        href={`https://www.youtube.com/watch?v=${trailer.key}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <span>Watch Trailer</span>
        <img src={playIcon} alt='' />
      </a>
    </Button>
  );
}
