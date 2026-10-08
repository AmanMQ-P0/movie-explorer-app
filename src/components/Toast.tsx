import { useToast } from '@/context/useToast';
import successIcon from '@/assets/icons/succes.svg';

export default function Toast() {
  const { message } = useToast();

  if (!message) {
    return null;
  }

  return (
    <div className='fixed left-1/2 -translate-x-1/2 top-8xl text-nowrap bg-base-black/25 backdrop-blur-xl w-74 h-10 flex justify-center items-center rounded-xl gap-xs sm:w-85 md:top-9xl md:w-95 lg:top-11xl lg:w-105 xl:w-125'>
      <img src={successIcon} alt='' />
      <p className='text-sm lg:text-md'>{message}</p>
    </div>
  );
}
