//Librairies
import { FC } from 'react'

type QuestionProps = {
  question: string
}

export const Question: FC<QuestionProps> = ({ question }) => {
  return <h4 className='text-xl mb-2 font-semibold'>{question}</h4>
}
