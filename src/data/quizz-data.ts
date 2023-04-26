//Types
import { QuizzData } from 'src/types'

export const quizzData: Array<QuizzData> = [
  {
    question: 'Comment faire un margin-top avec TailwindCss ?',
    answers: [
      {
        answer: 'mt-4',
        response: true,
      },
      {
        answer: 'pt-4',
        response: false,
      },
      {
        answer: 'text-xl',
        response: false,
      },
      {
        answer: 'flex',
        response: false,
      },
    ],
  },
  {
    question: 'Quelle commande pour démarrer un projet react vite avec pnpm ?',
    answers: [
      {
        answer: 'pnpm install vite',
        response: false,
      },
      {
        answer: 'pnpm remove',
        response: false,
      },
      {
        answer: 'npx run dev',
        response: false,
      },
      {
        answer: 'pnpm run dev',
        response: true,
      },
    ],
  },
  {
    question: 'Quelle librairie permet de faire du css-in-js ?',
    answers: [
      {
        answer: 'sass',
        response: false,
      },
      {
        answer: 'styled-components',
        response: true,
      },
      {
        answer: 'zustand',
        response: false,
      },
      {
        answer: 'react-uuid',
        response: false,
      },
    ],
  },
  {
    question: 'En quelle année à été crée React ?',
    answers: [
      {
        answer: '1990',
        response: false,
      },
      {
        answer: '2005',
        response: false,
      },
      {
        answer: '2011',
        response: true,
      },
      {
        answer: '2020',
        response: false,
      },
    ],
  },
  {
    question: 'Quelle mot clé permet de crée une constante en Javascript ?',
    answers: [
      {
        answer: 'let',
        response: false,
      },
      {
        answer: 'boolean',
        response: false,
      },
      {
        answer: 'var',
        response: false,
      },
      {
        answer: 'const',
        response: true,
      },
    ],
  },
]
