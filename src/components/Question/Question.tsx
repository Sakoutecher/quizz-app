//Librairies
import { FC } from 'react'
import { motion } from 'framer-motion'

type QuestionProps = {
  question: string
}

export const Question: FC<QuestionProps> = ({ question }) => {
  return (
    <motion.h4
      initial={{ transform: 'translateY(-20px)', opacity: 0 }}
      animate={{ transform: 'translateY(0px)', opacity: 1 }}
      exit={{ transform: 'translateY(-20px)', opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='text-xl mb-2 font-semibold'
    >
      {question}
    </motion.h4>
  )
}
