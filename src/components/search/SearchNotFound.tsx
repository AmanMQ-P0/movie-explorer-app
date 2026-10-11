import notFoundIcon from '@/assets/icons/not-found.svg';

export default function SearchNotFound() {
  return (
    <section className='w-full flex justify-center items-center'>
      <div className='max-w-80 mt-20 mb-30 flex flex-col justify-center items-center gap-3xl'>
        <img src={notFoundIcon} alt='' />
        <div className='flex flex-col justify-center items-center gap-md'>
          <h2 className='text-base-white text-md font-semibold'>
            Data Not Found
          </h2>
          <p className='text-sm font-normal text-neutral-400 text-center'>
            Try other keywords
          </p>
        </div>
      </div>
    </section>
  );
}
