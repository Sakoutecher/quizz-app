//Librairies
import { FC } from 'react'

type ScoreProps = {
  score: number
  maxScore: number
  style?: string
}

export const Score: FC<ScoreProps> = ({ score, maxScore, style }) => {
  return (
    <span className={style}>
      {score} / {maxScore}
    </span>
  )
}
