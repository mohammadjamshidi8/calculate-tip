import React from 'react'

export default function FriendService({friendService , setFriendService}) {

  const selectFriendServiceHandler = (ev) => {
    setFriendService(ev.target.value)
    console.log('friend : ' , friendService);
  }

  return (
    <div className='flex items-center gap-x-5'>
        <span className='text-lg text-secondary font-bold'>How did your friend like the service ?</span>
        <select className='p-4 rounded-md' value={friendService} onChange={selectFriendServiceHandler} id="">
            <option value="0">Dissatisfied (0%)</option>
            <option value="5">It was okay (5%)</option>
            <option value="10">It was good (10%)</option>
            <option value="20">Absolutely amazing (20%)</option>
        </select>
    </div>
  )
}
