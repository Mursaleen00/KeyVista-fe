import notFound from '@/../public/images/not found.jpg';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div>
      <Image
        src={notFound}
        alt='notFound'
        width={1000}
        height={500}
        className='grid w-full mt-14'
      />
    </div>
  );
};

export default NotFound;
