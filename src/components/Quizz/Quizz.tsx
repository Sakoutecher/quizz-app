//Librairies
import { useEffect, useState } from 'react'
import uuid from 'react-uuid'

//Components
import { Answer } from '#/Answer'
import { Score } from '#/Score'

//Data
import { quizzData } from '../../data/quizz-data'

//Store
import { usePaginationStore } from '../../hooks/usePagination'
import { useAnswerStore } from '../../hooks/useAnswer/useAnswer'
import { useStatusStore } from '../../hooks/useStatus'

export const Quizz = () => {
  const currentPage = usePaginationStore((state) => state.currentPage)
  const nextPage = usePaginationStore((state) => state.nextPage)
  const verifyAnswer = useAnswerStore((state) => state.verifyAnswer)
  const setStatus = useStatusStore((state) => state.setStatus)
  const status = useStatusStore((state) => state.status)
  const [score, setScore] = useState<number>(0)

  const getRightAnswer = (currentPage: number) => {
    return quizzData[currentPage].answers.filter(
      (answers) => answers.response === true
    )[0].answer
  }

  const goToNextPage = () => {
    nextPage()
    setStatus('notSet')
  }

  useEffect(() => {
    if (status === 'win') {
      setScore(score + 1)
    }
  }, [status])

  return (
    <div className='w-2/3 bg-zinc-300 rounded-md flex justify-between items-start flex-col p-6'>
      <div className='mb-4'>
        <h4 className='text-xl mb-2 font-semibold'>
          {quizzData[currentPage].question}
        </h4>
        <span className='text-md text-gray-500'>
          Choisis une réponse parmis les 4 ci-dessous.
        </span>
      </div>
      <div className='w-full grid grid-cols-2 grid-rows-2 gap-2 mb-4'>
        {quizzData[currentPage].answers.map(({ answer }) => {
          return (
            <Answer
              rightAnswer={getRightAnswer(currentPage)}
              answer={answer}
              key={uuid()}
            />
          )
        })}
      </div>
      <div className='flex items-center gap-10'>
        {status === 'notSet' ? (
          <button
            onClick={() => {
              verifyAnswer(getRightAnswer(currentPage), setStatus)
            }}
            className='py-3 px-4 bg-blue-300 rounded-md flex items-center justify-center gap-2 hover:bg-blue-400 transition ease-linear'
          >
            VALIDER
          </button>
        ) : (
          <button
            onClick={goToNextPage}
            className='py-3 px-4 bg-blue-300 rounded-md flex items-center justify-center gap-2 hover:bg-blue-400 transition ease-linear'
          >
            SUIVANT
          </button>
        )}
        <Score score={score} maxScore={quizzData.length} />
        {status === 'notSet' ? null : status === 'win' ? (
          <span className='bg-green-400 p-2 rounded-md border-2 border-green-500 text-white'>
            Bonne réponse !
          </span>
        ) : (
          <span className='bg-red-400 p-2 rounded-md border-2 border-red-500 text-white'>
            Mauvaise réponse...
          </span>
        )}
      </div>
    </div>
  )
}
