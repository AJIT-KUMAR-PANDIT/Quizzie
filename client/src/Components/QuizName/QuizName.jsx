import React, { useContext, useState } from 'react';
import CssQuizName from './QuizName.module.css';
import ContextApiQuizModal from '../../ContextApi/QuizModal/ContextApiQuizModal';
import Poll from '../Poll/Poll'; // Import your Poll component

const QuizName = ({ closeButton, Continue }) => {
  const [isQABtnActive, setIsQABtnActive] = useState('Q & A');
  const [isPollTBtnActive, setIsPollTBtnActive] = useState(false);
  const [showPoll, setShowPoll] = useState(false); // State to manage Poll component visibility

  const { updateData } = useContext(ContextApiQuizModal);

  const handleQABtnToggle = () => {
    setIsQABtnActive(true);
    setIsPollTBtnActive(false);
    setShowPoll(false); // Hide Poll component when Q & A button is clicked
  };

  const handlePollTBtnToggle = () => {
    setIsPollTBtnActive(true);
    setIsQABtnActive(false);
    setShowPoll(true); // Show Poll component when Poll Type button is clicked
  };

  const handleClose = () => {
    setIsQABtnActive(false);
    setIsPollTBtnActive(false);
    setShowPoll(false); // Hide Poll component when closing the modal
    closeButton();
  };

  const handleContinue = () => {
    updateData((prevData) => !prevData);
  };

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
        
        {showPoll && <Poll />} {/* Render the Poll component when showPoll is true */}
        
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
