import React from 'react';
import user from '../utils/images/user-img.jpg';
import { PhoneIcon, VideoCameraIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';

const UserProflie = () => {
  return (
    <div className="flex flex-col items-center justify-center relative mt-5 bg-gray-100 rounded-lg p-4 h-full row-span-4">
      <div className="w-20 h-20 rounded-full bg-gray-300 mr-4 relative overflow-visible ">
        <img
          src={user}
          alt="user"
          className="w-full h-full object-cover rounded-full border-4 border-white absolute"
        />
        <div className={`w-5 h-5 rounded-full bg-offline absolute bottom-1 right-1 border-2 border-white`}></div>
      </div>
      <div>
        <p className=" font-semibold">Megan Morton</p>
        <p className='text-gray-400'>@meganmortan</p>
      </div>
      <div className='mt-3 flex '>
        <PhoneIcon className='h-9 w-9 p-2 bg-white rounded-full mx-1 relative'>
          <div className="w-3 h-3 rounded-full bg-offline absolute bottom-1 right-1 border-2 border-white"></div>
        </PhoneIcon>
        <VideoCameraIcon className='h-9 w-9 p-2 bg-white rounded-full mx-2 relative'>
          <div className="w-3 h-3 rounded-full bg-offline absolute bottom-1 right-1 border-2 border-white"></div>
        </VideoCameraIcon>
        <EllipsisVerticalIcon className='h-9 w-9 p-2 bg-white rounded-full mx-2 relative'>
          <div className="w-3 h-3 rounded-full bg-offline absolute bottom-1 right-1 border-2 border-white"></div>
        </EllipsisVerticalIcon>
      </div>
    </div>
  );
};

export default UserProflie;
