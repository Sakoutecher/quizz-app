//Librairies
import React from 'react'

//Components
import { Answer } from '#/Answer'

export const Quizz = () => {
  return (
    <div className='w-2/3 h-1/3 bg-zinc-300 rounded-md flex justify-between items-start flex-col p-6'>
      <div>
        <h4 className='text-xl mb-2'>
          Comment faire un margin-top avec Tailwindcss ?
        </h4>
        <span className='text-md'>
          Choisis une réponse parmis les 4 ci-dessous.
        </span>
      </div>
      <div className='w-full grid grid-cols-2 grid-rows-2 gap-2'>
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  )
}
