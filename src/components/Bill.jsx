import React from 'react'

export default function Bill({bill , setBill}) {

    const getBillNumberHandler = (ev) => {
        setBill(ev.target.value)
    }

  return (
    <div className='flex items-center gap-x-5'>
        <span className='text-lg text-secondary font-bold'>How much was the bill ?</span>
        <input value={bill} onChange={getBillNumberHandler} type="text"  className='px-5 py-3 rounded-md outline-none focus:shadow-md transition duration-300 border-[1px] border-gray-400'/>
    </div>
  )
}
