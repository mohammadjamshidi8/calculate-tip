import React from 'react'

export default function Payment({bill , setBill , service , friendService}) {

  const tipPercent = ((Number(service) + Number(friendService)) / 2) / 100 

  setBill(Number(bill))

  const tip = bill * tipPercent

  const resetBtnHandler = () => {
    setBill(null)
  }

  return (
    <div className='flex flex-col items-center gap-y-5'>
        {bill ? <span className='text-xl font-semibold text-sky-500'>You pay $ {bill + tip} ($ {bill} + $ {tip})</span> : null}
        <button onClick={resetBtnHandler} className='px-14 py-3 rounded-md bg-orange-400 hover:bg-orange-500 transition-colors duration-300 text-white font-semibold'>Reset</button>
    </div>
  )
}
