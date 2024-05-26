import React from 'react'

export default function Services({service , setService}) {

    const selectServiceHandler = (ev) => {
        setService(ev.target.value)
    }

  return (
    <div className='flex items-center gap-x-5'>
        <span className='text-lg text-secondary font-bold'>How did you like the service ?</span>
        <select className='p-4 rounded-md' value={service} onChange={selectServiceHandler} id="">
            <option value="0">Dissatisfied (0%)</option>
            <option value="5">It was okay (5%)</option>
            <option value="10">It was good (10%)</option>
            <option value="20">Absolutely amazing (20%)</option>
        </select>
    </div>
  )
}
