//Librairies
import { ReactElement } from 'react'

//Components
import { Quizz } from '#/Quizz'

//Logo
import GitHubLogo from '../public/github-mark.svg'

const App = (): ReactElement => {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col bg-zinc-200 font-jetbrains'>
      <h1 className='mb-8 text-3xl underline'>QUIZZ APP</h1>
      <Quizz />
      <span className='text-md fixed bottom-5 left-6 flex items-center justify-center gap-3'>
        Star the project on{' '}
        <a
          href='https://github.com/Sakoutecher/quizz-app'
          target='_blank'
          rel='noreferrer'
          className='py-3 px-4 bg-zinc-300 rounded-md flex items-center justify-center gap-2 hover:bg-zinc-400 transition ease-linear'
        >
          <img className='w-6' src={GitHubLogo} />
          Github
        </a>
      </span>
    </div>
  )
}

export default App
