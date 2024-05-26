import React from 'react'

export default function Payment({bill}) {
  return (
    <div className='flex flex-col items-center gap-y-5'>
        <span className='text-xl font-semibold text-sky-500'>You pay {bill} $</span>
        <button className='px-14 py-3 rounded-md bg-orange-400 hover:bg-orange-500 transition-colors duration-300 text-white font-semibold'>Reset</button>
    </div>
  )
}
