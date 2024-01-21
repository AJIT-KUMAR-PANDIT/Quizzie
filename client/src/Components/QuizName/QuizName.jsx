import React, { useContext, useState } from 'react';
import CssQuizName from './QuizName.module.css';
import ContextApiQuizModal from '../../ContextApi/QuizModal/ContextApiQuizModal';

const QuizName = ({ closeButton, Continue }) => {
  const [isQABtnActive, setIsQABtnActive] = useState('Q & A');
  const [isPollTBtnActive, setIsPollTBtnActive] = useState(false);

  const { updateData } = useContext(ContextApiQuizModal);

  const handleQABtnToggle = () => {
    setIsQABtnActive(true);
    setIsPollTBtnActive(false);
  };

  const handlePollTBtnToggle = () => {
    setIsPollTBtnActive(true);
    setIsQABtnActive(false);
  };

  const handleClose = () => {
    setIsQABtnActive(false);
    setIsPollTBtnActive(false);
    closeButton();
  };

  const handleContinue = () => {
    updateData((prevData) => !prevData);
  }

  return (
    <div className={CssQuizName.container}>
      <div>
        <input type="text" placeholder="   Quiz Name" className={CssQuizName.input} />
        <br />
        <br />
        <label className={CssQuizName.labelQuizT}>Quiz Type</label>
        <button
          className={`${CssQuizName.qAbtn} ${isQABtnActive ? CssQuizName.activeBtn : ''}`}
          onClick={handleQABtnToggle}
        >
          Q & A
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          className={`${CssQuizName.pollTbtn} ${isPollTBtnActive ? CssQuizName.activeBtn : ''}`}
          onClick={handlePollTBtnToggle}
        >
          Poll Type
        </button>
        <br />
        <br />
        <button className={CssQuizName.cancelbtn} onClick={handleClose}>
          Cancel
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <button className={CssQuizName.continuebtn} onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default QuizName;
