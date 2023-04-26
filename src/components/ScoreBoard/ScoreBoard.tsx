import React, { FC } from 'react'

type ScoreBoardProps = {
  close: () => void
}

export const ScoreBoard: FC<ScoreBoardProps> = ({ close }) => {
  return (
    <div className='absolute w-screen h-screen bg-zinc-700/90 z-30 flex justify-center items-center'>
      <div className='w-72 h-72 max-h-72 rounded-md bg-zinc-500 p-4 overflow-y-scroll'>
        <button
          onClick={close}
          className='py-1 px-2 bg-blue-300 rounded-md flex items-center justify-center gap-2 hover:bg-blue-400 transition ease-linear mb-2'
        >
          FERMER
        </button>
        <div className='w-full mb-2'>
          <span>SCOREBOARD</span>
          <div className='w-full h-0.5 bg-black'></div>
        </div>
        <div className='w-full flex flex-col items-start justify-center gap-2'>
          <div className='w-full h-10 bg-zinc-400 rounded flex items-center justify-between px-2'>
            <span>Hugo</span>
            <span>0 / 5</span>
          </div>
        </div>
      </div>
    </div>
  )
}
