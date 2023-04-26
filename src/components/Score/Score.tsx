//Librairies
import { FC } from 'react'

type ScoreProps = {
  score: number
  maxScore: number
}

export const Score: FC<ScoreProps> = ({ score, maxScore }) => {
  return (
    <span>
      {score} / {maxScore}
    </span>
  )
}
