//Librairies
import React from 'react'

export const Answer = () => {
  return (
    <div className='bg-zinc-500 h-16 rounded-md'>
      <input type='checkbox' id='answer-one' value='' className='hidden peer' />
      <label
        htmlFor='answer-one'
        className='inline-flex items-center justify-between rounded-md w-full h-full border-2 text-white peer-checked:border-blue-400 hover:border-gray-200 cursor-pointer peer-checked:text-blue-400'
      >
        <div className='block'>
          <div className='w-full text-lg font-semibold px-4'>React Js</div>
        </div>
      </label>
    </div>
  )
}
