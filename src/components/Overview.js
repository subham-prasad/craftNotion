import React from 'react'
import {ChartBarIcon, ClockIcon, HandThumbUpIcon} from "@heroicons/react/24/outline"

const Overview = () => {
  return (
    <div className='m-3 p-4'>
        <div className='flex justify-between'>
        <div className='flex  '>
            <div className='p-1 h-10 w-10 bg-gray-200 rounded-full '>
                <HandThumbUpIcon className='p-1 h-8 w-8 text-black'/>
            </div>
            <div className='ml-3 '>
                <div>
                    <h1 className='font-semibold'>Finished</h1>
                </div>
                <div className='flex'>
                    <h1 className='font-bold text-xl'>18</h1>
                    <p className='text-green-400 mt-1'>&nbsp; +8 tasks</p>
                </div>
            </div>
        </div>
        <div className='flex  '>
            <div className='p-1 h-10 w-10 bg-gray-200 rounded-full '>
                <ClockIcon className='p-1 h-8 w-8 text-black'/>
            </div>
            <div className='ml-3 '>
                <div>
                    <h1 className='font-semibold'>Tracked</h1>
                </div>
                <div className='flex'>
                    <h1 className='font-bold text-xl'>31h</h1>
                    <p className='text-red-400 mt-1'>&nbsp; -6 hours</p>
                </div>
            </div>
        </div>
        <div className='flex  '>
            <div className='p-1 h-10 w-10 bg-gray-200 rounded-full '>
                <ChartBarIcon className='p-1 h-8 w-8 text-black'/>
            </div>
            <div className='ml-3 '>
                <div>
                    <h1 className='font-semibold'>Efficiency</h1>
                </div>
                <div className='flex'>
                    <h1 className='font-bold text-xl'>93%</h1>
                    <p className='text-green-400 mt-1'>&nbsp; +12%</p>
                </div>
            </div>
        </div>
        </div>
        <div className='divide-x-2 divide-blue-300'/>
    </div>
  )
}

export default Overview