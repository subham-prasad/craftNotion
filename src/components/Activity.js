import React from 'react'
import OtherUserList from './OtherUserList'
import Chatbox from './Chatbox'

const Activity = () => {
  return (
    <div className='row-span-8'>
        <div className='flex'>
          <hr />
          <p>Activity</p>
          <hr />
        </div>
        <OtherUserList />
        <Chatbox />
    </div>
  )
}

export default Activity