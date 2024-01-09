import React from 'react';
import { FaceSmileIcon, PaperClipIcon, MicrophoneIcon } from '@heroicons/react/24/outline';

const Chatbox = () => {
  return (
    <div className='p-2 flex bg-gray-100 items-center rounded-lg w-[90%] justify-center ml-2'>
      <div className='flex mt-2'>
      <PaperClipIcon className='h-8 w-8 mx-1 text-gray-400 cursor-pointer' />
        <input
          className=' text-gray-400 bg-gray-100 -mt-2 border-white  w-full h-10 px-2'
          placeholder='Write a message'
        />
  

        <FaceSmileIcon className='h-8 w-8 mx-1 text-gray-400 cursor-pointer' />
        
        <MicrophoneIcon className='h-8 w-8 mx-1 text-gray-400 cursor-pointer' />
        </div>
    </div>
  );
};

export default Chatbox;
