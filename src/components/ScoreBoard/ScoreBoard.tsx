//Librairies
import { FC, useEffect, useState } from 'react'
import uuid from 'react-uuid'

//Icons
import { IconSquareX } from '@tabler/icons-react'

type ScoreBoardProps = {
  close: () => void
}

interface Scores {
  name: string
  score: string
}

export const ScoreBoard: FC<ScoreBoardProps> = ({ close }) => {
  const [scores, setScores] = useState<Scores[]>([])

  useEffect(() => {
    const keys = Object.keys(localStorage)
    const allScores: Scores[] = keys.map((key) => {
      const value = localStorage.getItem(key)
      return { name: key, score: value as string }
    })
    setScores(allScores)
  }, [])

  const removeScore = (name: string) => {
    const filteredData = scores.filter((item) => item.name !== name)
    setScores(filteredData)
    localStorage.removeItem(name)
  }

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
                <div className='flex items-center justify-center gap-6'>
                  <span>{score.score}</span>
                  <IconSquareX
                    onClick={() => removeScore(score.name)}
                    size={24}
                    color='#ef4444'
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
