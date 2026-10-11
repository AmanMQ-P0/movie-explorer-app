import { ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import SearchInput from '@/components/search/SearchInput';

export default function MobileSearchHeader() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className='flex w-full min-w-0 items-center gap-md md:hidden'>
      <Button type='button' aria-label='Back to home page' onClick={handleBack}>
        <ArrowLeft aria-hidden='true' />
      </Button>

      <div className='border border-neutral-800 rounded-xl px-md flex min-w-0 flex-1 items-center gap-md'>
        <Search aria-hidden='true' className='shrink-0 text-neutral-500' />
        <SearchInput />
      </div>
    </div>
  );
}
