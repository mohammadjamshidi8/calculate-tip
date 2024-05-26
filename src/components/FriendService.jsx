import React from 'react'

export default function FriendService() {
  return (
    <div className='flex items-center gap-x-5'>
        <span className='text-lg text-secondary font-bold'>How did your friend like the service ?</span>
        <select className='p-4 rounded-md'  id="">
            <option value="dissatisfied">Dissatisfied (0%)</option>
            <option value="okay">It was okay (5%)</option>
            <option value="good">It was good (10%)</option>
            <option value="amazing">Absolutely amazing (20%)</option>
        </select>
    </div>
  )
}
