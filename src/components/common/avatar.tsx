// src/components/common/avatar.tsx

// Next & React Imports
import Image from 'next/image';

const Avatar: React.FC<{ avatar: string; className?: string }> = ({
  avatar,
  className,
}) => {
  return (
    // Avatar
    <Image
      alt={avatar}
      src={avatar || '/navbar/profile.svg'}
      width={40}
      height={40}
      className={`rounded-full w-10 h-10 cursor-pointer ${className}`}
    />
  );
};

export default Avatar;
