import Image from 'next/image';
import React from 'react';

export default function ImageCard() {
  return (
    <div className='border rotate-45 h-[329.84px] w-[260.43px] rounded-md flex justify-center items-center flex-col'>
      <Image
        src='/images/libra-scale.svg'
        alt='bapak'
        width={400}
        height={400}
      />
      <p>sasasa</p>
    </div>
  );
}
