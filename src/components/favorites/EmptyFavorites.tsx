import frameIcon from '@/assets/icons/frame.svg';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export default function EmptyFavorites() {
  return (
    <section className='w-full flex justify-center items-center'>
      <div className='max-w-80 mt-20 mb-30 flex flex-col justify-center items-center gap-3xl'>
        <img src={frameIcon} alt='' />
        <div className='flex flex-col justify-center items-center gap-xl'>
          <h2 className='text-base-white text-md font-semibold'>Data Empty</h2>
          <p className='text-sm font-normal text-neutral-400 text-center'>
            You don't have a favorite movie yet
          </p>
        </div>
        <Button
          type='button'
          variant={'primary'}
          className='w-50 lg:w-80'
          asChild
        >
          <Link to='/'>
            <span className='text-sm font-semibold lg:text-md'>
              Explore Movie
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
