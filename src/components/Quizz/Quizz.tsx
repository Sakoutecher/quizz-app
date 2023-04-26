//Librairies
import uuid from 'react-uuid'

//Components
import { Answer } from '#/Answer'

//Data
import { quizzData } from '../../data/quizz-data'

//Store
import { usePaginationStore } from '../../hooks/usePagination'
import { useAnswerStore } from '../../hooks/useAnswer/useAnswer'

export const Quizz = () => {
  const currentPage = usePaginationStore((state) => state.currentPage)
  const nextPage = usePaginationStore((state) => state.nextPage)
  const verifyAnswer = useAnswerStore((state) => state.verifyAnswer)

  const getRightAnswer = (currentPage: number) => {
    return quizzData[currentPage].answers.filter(
      (answers) => answers.response === true
    )[0].answer
  }

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
          return <Answer answer={answer} key={uuid()} />
        })}
      </div>
      <button
        onClick={() => {
          verifyAnswer(getRightAnswer(currentPage), nextPage)
        }}
        className='py-3 px-4 bg-blue-300 rounded-md flex items-center justify-center gap-2 hover:bg-blue-400 transition ease-linear'
      >
        VALIDER
      </button>
    </div>
  )
}
