const HomeView = () => {
  return (
    <div className='grid grid-cols-6 gap-4 place-items-center px-4'>
      <div className='w-full flex items-center justify-center h-40 shadow-md rounded-2xl border bg-primary'>
        primary
      </div>
      <div className='w-full flex items-center justify-center h-40 shadow-md rounded-2xl border bg-primary-light'>
        primary-light
      </div>
      <div className='w-full flex items-center justify-center h-40 shadow-md rounded-2xl border bg-text'>
        text
      </div>
      <div className='w-full flex items-center justify-center h-40 shadow-md rounded-2xl border bg-text-light'>
        text-light
      </div>
      <div className='w-full flex items-center justify-center text-white h-40 shadow-md rounded-2xl border bg-heading'>
        heading
      </div>
      <div className='w-full flex items-center justify-center h-40 shadow-md rounded-2xl border bg-red'>
        red
      </div>
    </div>
  );
};

export default HomeView;
