import React from 'react'
import CssTakeQuiz from './TakeQuiz.module.css'
import TakeQuizText from '../../Components/TakeQuiz/TakeQuizText';

const TakeQuiz = () => {
  return (
    <>
    <div className={CssTakeQuiz.bodyQuiz}>
        <TakeQuizText />
    </div>
    </>
  )
}

export default TakeQuiz;