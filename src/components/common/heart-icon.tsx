'use client';
import React, { useState } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { GoHeartFill } from 'react-icons/go';

const HeartIcon = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={`absolute top-3 right-3 bg-primary-light w-fit p-3 rounded-full items-center 
                justify-center text-primary`}
    >
      {liked ? <GoHeartFill /> : <IoMdHeartEmpty />}
    </button>
  );
};

export default HeartIcon;
