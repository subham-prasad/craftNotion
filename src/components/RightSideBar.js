import React from 'react'
import UserProflie from './UserProflie'
import Activity from './Activity'

const RightSideBar = () => {
  return (
    <div className='h-[100vh] col-span-3 text-center grid grid-rows-12 m-2'>
        <UserProflie />
        
        <Activity />
    </div>
  )
}

export default RightSideBar