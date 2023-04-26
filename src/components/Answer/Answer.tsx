//Librairies
import { FC } from 'react'

//Store
import { useAnswerStore } from '../../hooks/useAnswer/useAnswer'

type AnswerProps = {
  answer: string
}

export const Answer: FC<AnswerProps> = ({ answer }) => {
  const setAnswer = useAnswerStore((state) => state.setAnswer)

  return (
    <div className='bg-zinc-500 h-16 rounded-md'>
      <input
        type='checkbox'
        id={answer}
        className='hidden peer'
        onChange={() => {
          setAnswer(answer)
        }}
      />
      <label
        htmlFor={answer}
        className='inline-flex items-center justify-between rounded-md w-full h-full border-2 text-white peer-checked:border-blue-400 hover:border-gray-200 cursor-pointer peer-checked:text-blue-400'
      >
        <div className='block'>
          <div className='w-full text-lg font-semibold px-4'>{answer}</div>
        </div>
      </label>
    </div>
  )
}
