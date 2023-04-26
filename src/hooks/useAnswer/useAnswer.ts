//Librairies
import { create } from 'zustand'

type AnswserStore = {
  answer: string
  setAnswer: (answer: string) => void
  verifyAnswer: (trueAnswer: string, nextPage: () => void) => void
}

export const useAnswerStore = create<AnswserStore>((set) => ({
  answer: '',
  setAnswer: (answer) => set({ answer }),
  verifyAnswer: (trueAnswer, nextPage) => {
    const { answer } = useAnswerStore.getState()
    if (answer === trueAnswer) {
      console.log('Bonne réponse')
      nextPage()
    } else {
      console.log('Mauvais réponse')
    }
  },
}))
