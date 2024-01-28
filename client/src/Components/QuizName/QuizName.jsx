import React, { useContext, useState } from 'react';
import CssQuizName from './QuizName.module.css';
import ContextApiQuizModal from '../../ContextApi/QuizModal/ContextApiQuizModal';
import Poll from '../Poll/Poll';
import { Url } from '../../utils/URL/Url';
import axios from 'axios';
import { useQuizContext } from '../../ContextApi/QuizContext/QuizContext';

const QuizName = ({ closeButton, Continue }) => {
  const baseUrl = Url();
  const { quizData, updateUserId, updateQuizTitle, updateQuizeT } = useQuizContext();
  const { updateData } = useContext(ContextApiQuizModal);

  const [isQABtnActive, setIsQABtnActive] = useState(true);
  const [isPollTBtnActive, setIsPollTBtnActive] = useState(false);
  const [showPoll, setShowPoll] = useState(false);

  const handleQABtnToggle = () => {
    updateQuizeT("Q & A");
    setIsQABtnActive(true);
    setIsPollTBtnActive(false);
    setShowPoll(false);
  };

  const handlePollTBtnToggle = () => {
    updateQuizeT("Poll Type");
    setIsPollTBtnActive(true);
    setIsQABtnActive(false);
    setShowPoll(true);
  };

  const handleClose = () => {
    updateQuizTitle("");
    setIsQABtnActive(false);
    setIsPollTBtnActive(false);
    setShowPoll(false);
    closeButton();
  };

  const handleContinue = () => {
    if (quizData.quizTitle !== "") {
      if (isPollTBtnActive) {
        setShowPoll(true);
      } else {
        updateData((prevData) => !prevData);
      }
    }
  };

  const updateQuizTitleChange = (e) => {
    updateQuizTitle(e);
  };

  return (
    <div className={CssQuizName.container}>
      <div>
        <input
          type="text"
          placeholder="Quiz Name"
          onChange={(e) => updateQuizTitleChange(e.target.value)}
          className={`${CssQuizName.input} ${showPoll ? CssQuizName.inactive : ''}`}
        />
        <br />
        <br />
        <label className={`${CssQuizName.labelQuizT}  ${showPoll ? CssQuizName.inactive : ''}`}>Quiz Type</label>
        <button
          className={`${CssQuizName.qAbtn} ${isQABtnActive ? CssQuizName.activeBtn : ''}  ${showPoll ? CssQuizName.inactive : ''}`}
          onClick={handleQABtnToggle}
        >
          Q & A
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          className={`${CssQuizName.pollTbtn} ${isPollTBtnActive ? CssQuizName.activeBtn : ''}  ${showPoll ? CssQuizName.inactive : ''}`}
          onClick={handlePollTBtnToggle}
        >
          Poll Type
        </button>
        <br />
        <br />

        {showPoll && <Poll />}

        <br />
        <br />
        <button className={`${CssQuizName.cancelbtn}  ${showPoll ? CssQuizName.inactive : ''}`} onClick={handleClose}>
          Cancel
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <button className={`${CssQuizName.continuebtn}  ${showPoll ? CssQuizName.inactive : ''}`} onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default QuizName;
