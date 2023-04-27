//Librairies
import { useEffect, useState, useRef } from 'react'
import uuid from 'react-uuid'

//Components
import { Answer } from '#/Answer'
import { Score } from '#/Score'
import { Question } from '#/Question'
import { Status } from '#/Status'
import { Button } from '#/Button'
import { ScoreBoard } from '#/ScoreBoard'

//Data
import { quizzData } from '../../data/quizz-data'

//Store
import { usePaginationStore } from '../../hooks/usePagination'
import { useAnswerStore } from '../../hooks/useAnswer/useAnswer'
import { useStatusStore } from '../../hooks/useStatus'

export const Quizz = () => {
  const currentPage = usePaginationStore((state) => state.currentPage)
  const nextPage = usePaginationStore((state) => state.nextPage)
  const resetPage = usePaginationStore((state) => state.resetPage)
  const verifyAnswer = useAnswerStore((state) => state.verifyAnswer)
  const setStatus = useStatusStore((state) => state.setStatus)
  const status = useStatusStore((state) => state.status)
  const [score, setScore] = useState<number>(0)
  const [scoreBoardVisible, setScoreBoardVisible] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [showError, setShowError] = useState<boolean>(false)

  const getRightAnswer = (currentPage: number) => {
    return quizzData[currentPage].answers.filter(
      (answers) => answers.response === true
    )[0].answer
  }

  const goToNextPage = () => {
    nextPage()
    setStatus('notSet')
  }

  const closeScoreBoard = () => {
    setScoreBoardVisible(false)
  }

  const resetQuizz = () => {
    if (inputRef.current) {
      if (inputRef.current.value === '') {
        setShowError(true)
        return
      } else {
        localStorage.setItem(
          inputRef.current.value,
          `${score.toString()} / ${quizzData.length}`
        )
      }
    }
    resetPage()
    setStatus('notSet')
    setScore(0)
  }

  useEffect(() => {
    if (status === 'win') {
      setScore(score + 1)
    }
  }, [status])

  return (
    <>
      <div className=' bg-zinc-300 rounded-md flex justify-between items-start flex-col p-6 relative'>
        {currentPage !== quizzData.length ? (
          <>
            <div className='mb-4'>
              <Question question={quizzData[currentPage].question} />
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
              <Button
                status={status}
                goToNextPage={goToNextPage}
                getRightAnswer={getRightAnswer}
                verifyAnswer={verifyAnswer}
                setStatus={setStatus}
                currentPage={currentPage}
              />
              <Score score={score} maxScore={quizzData.length} />
              <Status status={status} />
            </div>
          </>
        ) : (
          <>
            <div className='flex flex-col items-start justify-center gap-4'>
              <span className='text-md font-semibold'>Le quizz est finis.</span>
              <div>
                <span className='text-md font-semibold'>
                  Voici votre score est de :
                </span>
                <Score
                  score={score}
                  maxScore={quizzData.length}
                  style='py-2 px-4 rounded-md bg-zinc-400 ml-4 border-2 text-white'
                />
              </div>
              <div className='mb-4'>
                <span className='text-md font-semibold'>Votre prénom :</span>
                <input
                  type='text'
                  className='py-2 px-4 rounded-md bg-zinc-400 ml-4 border-2 text-white'
                  ref={inputRef}
                />
              </div>
              {showError && (
                <span className='mb-4 text-red-500'>
                  Merci de bien vouloir saisir votre prénom.
                </span>
              )}
              <div className='flex gap-4'>
                <button
                  onClick={resetQuizz}
                  className='py-3 px-4 bg-blue-300 rounded-md flex items-center justify-center gap-2 hover:bg-blue-400 transition ease-linear'
                >
                  RELANCER LE QUIZZ
                </button>
                <button
                  onClick={() => {
                    setScoreBoardVisible(true)
                  }}
                  className='py-3 px-4 bg-blue-300 rounded-md flex items-center justify-center gap-2 hover:bg-blue-400 transition ease-linear'
                >
                  VOIR LE SCOREBOARD
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {scoreBoardVisible && <ScoreBoard close={closeScoreBoard} />}
    </>
  )
}
