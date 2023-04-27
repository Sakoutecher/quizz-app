//Librairies
import { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

//Store
import { useAnswerStore } from '../../hooks/useAnswer/useAnswer'
import { useStatusStore } from '../../hooks/useStatus'

type AnswerProps = {
  answer: string
  rightAnswer: string
  side: number
}

export const Answer: FC<AnswerProps> = ({ answer, rightAnswer, side }) => {
  const setAnswer = useAnswerStore((state) => state.setAnswer)
  const selectedAnswer = useAnswerStore((state) => state.answer)
  const status = useStatusStore((state) => state.status)
  const [styleInput, setStyleInput] = useState<string>(
    'inline-flex items-center justify-between rounded-md w-full h-full border-2 text-white peer-checked:border-blue-400 cursor-pointer peer-checked:text-blue-400'
  )
  const [styleContainer, setStyleContainer] = useState<string>(
    'bg-zinc-500 h-16 rounded-md'
  )

  useEffect(() => {
    if (status !== 'notSet') {
      if (answer === rightAnswer) {
        setStyleInput(
          'inline-flex items-center justify-between rounded-md w-full h-full border-green-500 border-2 text-white cursor-pointer'
        )
        setStyleContainer('bg-green-400 h-16 rounded-md')
      } else {
        setStyleInput(
          'inline-flex items-center justify-between rounded-md w-full h-full border-red-500 border-2 text-white cursor-pointer'
        )
        setStyleContainer('bg-red-400 h-16 rounded-md')
      }
    }
  }, [status])

  return (
    <motion.div
      className={styleContainer}
      initial={{
        transform:
          side === 0
            ? 'translateX(-20px)'
            : side === 2
            ? 'translateX(-20px)'
            : 'translateX(20px)',
        opacity: 0,
      }}
      animate={{ transform: 'translateX(0px)', opacity: 1 }}
      exit={{
        transform:
          side === 0
            ? 'translateX(-20px)'
            : side === 2
            ? 'translateX(-20px)'
            : 'translateX(20px)',
        opacity: 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <input
        type='checkbox'
        id={answer}
        disabled={status !== 'notSet' ? true : false}
        className='hidden peer'
        checked={selectedAnswer === answer ? true : false}
        onChange={() => {
          setAnswer(answer)
        }}
      />
      <label htmlFor={answer} className={styleInput}>
        <div className='block'>
          <div className='w-full text-sm lg:text-lg font-semibold px-4'>
            {answer}
          </div>
        </div>
      </label>
    </motion.div>
  )
}
