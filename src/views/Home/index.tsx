import PropertyByCategory from '@/components/common/property-by-category';

const HomeView = () => {
  return (
    <div className='grid '>
      {/* <div className='w-full flex items-center justify-center h-40 shadow-md rounded-2xl border bg-primary'>
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
      </div> */}
      <PropertyByCategory />

      <div>
        {/* Text section  */}
        <div className='flex flex-col w-full justify-center pl-4'>
          {/* <div className='flex flex-col gap-y-2'> */}

          <h1 className='text-2xl font-semibold'>Our Work in Action</h1>
          {/* </div> */}
          <div className='flex flex-col gap-y-3 pt-5'>
            <p className='text-sm text-text-light'>
              Explore our gallery to see how we’ve helped customers with expert
              generator and cooler maintenance. From routine servicing to
              complex repairs, our work speaks for itself.
            </p>
          </div>
        </div>

        {/* button Section  */}

        <div className='flex gap-x-4 sm:gap-x-14 justify-start pl-8 py-4 text-text-light'>
          <button
          // onClick={() => setSelectedTab('all')}
          // className={` ${
          //   selectedTab === 'all'
          //     ? 'text-primary border-b-2 border-b-primary font-semibold '
          //     : 'border-none'
          // }`}
          >
            All
          </button>
          <button
          // onClick={() => setSelectedTab('generator')}
          // className={` ${
          //   selectedTab === 'generator'
          //     ? 'text-primary border-b-2 border-b-primary font-semibold pb-[1px]'
          //     : ' border-none'
          // } `}
          >
            Buy
          </button>
          <button
          // onClick={() => setSelectedTab('cooling tower')}
          // className={` ${
          //   selectedTab === 'cooling tower'
          //     ? 'text-primary border-b-2 border-b-primary font-semibold'
          //     : ' border-none'
          // }`}
          >
            Rent
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
