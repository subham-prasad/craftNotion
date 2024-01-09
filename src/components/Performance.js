import React from 'react'
import {ChevronDownIcon} from '@heroicons/react/24/solid'
import graph from'../utils/images/graph.jpg'
const Performance = () => {
  return (
    <div>
        <div className='flex justify-between px-4 mt-2'>
            <h1 className='text-xl font-bold'>Performance</h1>
            <div className='flex bg-gray-200 px-2 rounded-full'>
                <h1>01-07 May</h1>
            <ChevronDownIcon className='h-3 w-3 mt-2 mx-1' />
            </div>
        </div>
        <div>
            <img className='h-60 w-full' 
            src={graph} alt='Graph'/>
        </div>
    </div>
  )
}

export default Performance