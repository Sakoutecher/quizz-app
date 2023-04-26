//Librairies
import { create } from 'zustand'

type AnswserStore = {
  answer: string
  setAnswer: (answer: string) => void
  verifyAnswer: (
    trueAnswer: string,
    setStatus: (status: 'win' | 'loose') => void
  ) => void
}

export const useAnswerStore = create<AnswserStore>((set) => ({
  answer: '',
  setAnswer: (answer) => set({ answer }),
  verifyAnswer: (trueAnswer, setStatus) => {
    const { answer } = useAnswerStore.getState()
    if (answer === trueAnswer) {
      console.log('Bonne réponse')
      setStatus('win')
    } else {
      console.log('Mauvais réponse')
      setStatus('loose')
    }
  },
}))
