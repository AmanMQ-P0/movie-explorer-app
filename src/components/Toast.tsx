import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useToast } from '@/context/useToast';
import successIcon from '@/assets/icons/succes.svg';

export default function Toast() {
  const { message, hideToast } = useToast();

  useEffect(() => {
    if (!message) return;

    const timer = window.setTimeout(() => {
      hideToast();
    }, 3000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [message, hideToast]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -80 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          role='status'
          aria-live='polite'
          className='fixed z-20 left-1/2 -translate-x-1/2 top-8xl text-nowrap bg-base-black/25 backdrop-blur-xl w-74 h-10 flex justify-center items-center rounded-xl gap-xs sm:w-85 md:top-9xl md:w-95 lg:top-11xl lg:w-105 xl:w-125'
        >
          <img src={successIcon} alt='' />
          <p className='text-sm lg:text-md'>{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
