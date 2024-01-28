import React, { createContext, useState, useContext } from 'react';

const QuizContext = createContext();

const initialQuizState = {
  userId: "",
  quizTitle: "",
  quizeT: "Q & A",
  timer: 'Off',
  questionTitle: ["What is the capital of France?"],
  optionType: "Text",
  options: ["Paris","London","sss"],
  imgUrl: [" "],
  correctAnswerIndex: 0,
  attemptedCorrectly: 0,
  attemptedIncorrectly: 0,
  generatedUrl: " ",
};

export const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState(initialQuizState);



  const updateUserId = (newUserId) => {
    setQuizData((prevData) => ({ ...prevData, userId: newUserId }));
  };

  const updateQuizTitle = (newQuizTitle) => {
    setQuizData((prevData) => ({ ...prevData, quizTitle: newQuizTitle }));
  };

  const updateQuizeT = (newQuizeT) => {
    setQuizData((prevData) => ({ ...prevData, quizeT: newQuizeT }));
  };










  const updateTimer = (newTimer) => {
    setQuizData((prevData) => ({ ...prevData, timer: newTimer }));
  };

  const updateQuestionTitle = (newTitle) => {
    setQuizData((prevData) => ({ ...prevData, questionTitle: newTitle }));
  };

  const updateOptionType = (newOptionType) => {
    setQuizData((prevData) => ({ ...prevData, optionType: newOptionType }));
  };



  const updateOptions = (newOptions) => {
    setQuizData((prevData) => ({ ...prevData, options: newOptions }));
  };
  
  

  const updateImgUrl = (newImgUrl) => {
    setQuizData((prevData) => ({ ...prevData, imgUrl: newImgUrl }));
  };

  const updateCorrectAnswerIndex = (newCorrectAnswerIndex) => {
    setQuizData((prevData) => ({ ...prevData, correctAnswerIndex: newCorrectAnswerIndex }));
  };

  const updateAttemptedCorrectly = (newAttemptedCorrectly) => {
    setQuizData((prevData) => ({ ...prevData, attemptedCorrectly: newAttemptedCorrectly }));
  };

  const updateAttemptedIncorrectly = (newAttemptedIncorrectly) => {
    setQuizData((prevData) => ({ ...prevData, attemptedIncorrectly: newAttemptedIncorrectly }));
  };

  const genUrl = (newGenUrl) => {
    setQuizData((prevData) => ({ ...prevData, generatedUrl: newGenUrl }));
  };

  const contextValue = {
    quizData,
    updateUserId,
    updateQuizTitle,
    updateQuizeT,
    updateTimer,
    updateQuestionTitle,
    updateOptionType,
    updateOptions,
    updateImgUrl,
    updateCorrectAnswerIndex,
    updateAttemptedCorrectly,
    updateAttemptedIncorrectly,
    genUrl,
  };

  return <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>;
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuizContext provider error: Context not found');
  }
  return context;
};
