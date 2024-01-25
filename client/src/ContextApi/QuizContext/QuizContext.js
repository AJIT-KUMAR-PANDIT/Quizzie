import React, { createContext, useState, useContext } from 'react';

const QuizContext = createContext();

const initialQuizState = {
  timer: 'Off',
  impressions: 10,
  createDate: null,
  questions: [
    {
      questionTitle: 'What is the capital of France?',
      optionType: 'Text',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      imgUrl: [''],
      correctAnswerIndex: 0,
      attemptedCorrectly: 0,
      attemptedIncorrectly: 0,
      generatedUrl:" ",
    },
  ],
};


export const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState(initialQuizState);

  
  const updateTimer = (newTimer) => {
    setQuizData((prevData) => ({ ...prevData, timer: newTimer }));
  };

  const updateImpressions = (newImpressions) => {
    setQuizData((prevData) => ({ ...prevData, impressions: newImpressions }));
  };

  const updateCreateDate = (newCreateDate) => {
    setQuizData((prevData) => ({ ...prevData, createDate: newCreateDate }));
  };

  const updateQuestionTitle = (newTitle, questionIndex) => {
    setQuizData((prevData) => {
      const updatedQuestions = [...prevData.questions];
      updatedQuestions[questionIndex].questionTitle = newTitle;
      return { ...prevData, questions: updatedQuestions };
    });
  };

  const updateOptionType = (newOptionType, questionIndex) => {
    setQuizData((prevData) => {
      const updatedQuestions = [...prevData.questions];
      updatedQuestions[questionIndex].optionType = newOptionType;
      return { ...prevData, questions: updatedQuestions };
    });
  };

  const updateOptions = (newOptions, questionIndex) => {
    setQuizData((prevData) => {
      const updatedQuestions = [...prevData.questions];
      updatedQuestions[questionIndex].options = newOptions.split(' ');
      return { ...prevData, questions: updatedQuestions };
    });
  };

  const updateImgUrl = (newImgUrl, questionIndex) => {
    setQuizData((prevData) => {
      const updatedQuestions = [...prevData.questions];
      updatedQuestions[questionIndex].imgUrl = newImgUrl;
      return { ...prevData, questions: updatedQuestions };
    });
  };

  const updateCorrectAnswerIndex = (newCorrectAnswerIndex, questionIndex) => {
    setQuizData((prevData) => {
      const updatedQuestions = [...prevData.questions];
      updatedQuestions[questionIndex].correctAnswerIndex = newCorrectAnswerIndex;
      return { ...prevData, questions: updatedQuestions };
    });
  };

  const updateAttemptedCorrectly = (newAttemptedCorrectly, questionIndex) => {
    setQuizData((prevData) => {
      const updatedQuestions = [...prevData.questions];
      updatedQuestions[questionIndex].attemptedCorrectly = newAttemptedCorrectly;
      return { ...prevData, questions: updatedQuestions };
    });
  };

  const updateAttemptedIncorrectly = (newAttemptedIncorrectly, questionIndex) => {
    setQuizData((prevData) => {
      const updatedQuestions = [...prevData.questions];
      updatedQuestions[questionIndex].attemptedIncorrectly = newAttemptedIncorrectly;
      return { ...prevData, questions: updatedQuestions };
    });
  };

  const genUrl = (newGenUrl) => {
    setQuizData((prevData) => ({ ...prevData, generatedUrl: newGenUrl }));
  };

  const contextValue = {
    quizData,
    updateTimer,
    updateImpressions,
    updateCreateDate,
    updateQuestionTitle,
    updateOptionType,
    updateOptions,
    updateImgUrl,
    updateCorrectAnswerIndex,
    updateAttemptedCorrectly,
    updateAttemptedIncorrectly,
    genUrl
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
