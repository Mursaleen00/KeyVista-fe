import Image from 'next/image';

const Avatar: React.FC<{ avatar: string }> = ({ avatar }) => {
  return (
    <Image
      alt={avatar}
      src={avatar || '/navbar/profile.svg'}
      width={40}
      height={40}
      className='rounded-full w-10 h-10 cursor-pointer'
    />
  );
};

export default Avatar;
