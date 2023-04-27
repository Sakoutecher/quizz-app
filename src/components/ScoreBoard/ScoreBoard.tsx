import { FC } from 'react'
import uuid from 'react-uuid'

type ScoreBoardProps = {
  close: () => void
}

type ScoreType = Array<{ name: string; score: string }>

export const ScoreBoard: FC<ScoreBoardProps> = ({ close }) => {
  const scores: ScoreType = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i) as string
    const value = localStorage.getItem(key)
    scores.push({ name: key, score: value as string })
  }
  console.log(scores)

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
          {scores.map((score) => {
            return (
              <div
                key={uuid()}
                className='w-full h-10 bg-zinc-400 rounded flex items-center justify-between px-2'
              >
                <span>{score.name}</span>
                <span>{score.score}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
