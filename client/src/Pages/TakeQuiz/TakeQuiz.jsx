import React from 'react'
import CssTakeQuiz from './TakeQuiz.module.css'
import TakeQuizText from '../../Components/TakeQuiz/TakeQuizText/TakeQuizText';
import TakeQuizImage from '../../Components/TakeQuiz/TakeQuizImage/TakeQuizImage';
import TakeQuizImageText from '../../Components/TakeQuiz/TakeQuizImageText/TakeQuizImageText';

const TakeQuiz = () => {
  return (
    <>
    <div className={CssTakeQuiz.bodyQuiz}>
        <TakeQuizText />
        <TakeQuizImage/>
        <TakeQuizImageText/>
    </div>
    </>
  )
}

export default TakeQuiz;