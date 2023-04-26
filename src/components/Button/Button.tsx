//Librairies
import { FC } from 'react'

type ButtonProps = {
  status: string
  goToNextPage: () => void
  getRightAnswer: (currentPage: number) => string
  verifyAnswer: (
    rightAnswer: string,
    setStatus: (status: 'win' | 'loose' | 'notSet') => void
  ) => void
  setStatus: (status: 'win' | 'loose' | 'notSet') => void
  currentPage: number
}

export const Button: FC<ButtonProps> = ({
  status,
  goToNextPage,
  getRightAnswer,
  verifyAnswer,
  setStatus,
  currentPage,
}) => {
  return (
    <>
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
    </>
  )
}
