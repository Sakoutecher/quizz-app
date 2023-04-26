//Librairies
import { FC } from 'react'

type StatusProps = {
  status: string
}

export const Status: FC<StatusProps> = ({ status }) => {
  return (
    <>
      {status === 'notSet' ? null : status === 'win' ? (
        <span className='bg-green-400 p-2 rounded-md border-2 border-green-500 text-white'>
          Bonne réponse !
        </span>
      ) : (
        <span className='bg-red-400 p-2 rounded-md border-2 border-red-500 text-white'>
          Mauvaise réponse...
        </span>
      )}
    </>
  )
}
