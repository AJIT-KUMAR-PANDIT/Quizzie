import React, { useEffect, useState } from 'react';
import CssTakeQuiz from './TakeQuiz.module.css';
import TakeQuizText from '../../Components/TakeQuiz/TakeQuizText/TakeQuizText';
import TakeQuizImage from '../../Components/TakeQuiz/TakeQuizImage/TakeQuizImage';
import TakeQuizImageText from '../../Components/TakeQuiz/TakeQuizImageText/TakeQuizImageText';
import { useQuizContext } from '../../ContextApi/QuizContext/QuizContext';

const TakeQuiz = () => {

  const [count, setCount] = useState( localStorage.getItem("pageviews")||0);

  const { updateTimer } = useQuizContext();

  const impressions = () => {
    let value = count + 1;
    setCount(value);
    localStorage.setItem("pageviews", value);
  };
  useEffect(() => {
    

    impressions();
  }, []);

  const handleLoad = (e) => {
    e.preventDefault();
    impressions();
  };

  return (
    <>
      <div className={CssTakeQuiz.bodyQuiz} onLoad={handleLoad}>
        <TakeQuizText />
        <TakeQuizImage />
        <TakeQuizImageText />
        {console.log("page views", count)}
      </div>
    </>
  );
};

export default TakeQuiz;
