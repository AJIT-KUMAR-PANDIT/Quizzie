import React, { useContext, useState } from 'react';
import CssQuizName from './QuizName.module.css';
import ContextApiQuizModal from '../../ContextApi/QuizModal/ContextApiQuizModal';
import Poll from '../Poll/Poll';
import {Url} from '../../utils/URL/Url';
import axios from 'axios';

const QuizName = ({ closeButton, Continue }) => {

  const baseUrl = Url();

  const [isQABtnActive, setIsQABtnActive] = useState('Q & A');
  const [isPollTBtnActive, setIsPollTBtnActive] = useState(false);
  const [showPoll, setShowPoll] = useState(false); // State to manage Poll component visibility

  const { updateData } = useContext(ContextApiQuizModal);


  
  const handleQABtnToggle = () => {
    setIsQABtnActive(true);
    setIsPollTBtnActive(false);
    setShowPoll(false); // Hide the Poll component
  };

  const handlePollTBtnToggle = () => {
    setIsPollTBtnActive(true);
    setIsQABtnActive(false);
  };

  const handleClose = () => {
    setIsQABtnActive(false);
    setIsPollTBtnActive(false);
    setShowPoll(false);
    closeButton();
  };

  const handleContinue = () => {
   
    if (isPollTBtnActive) {
      setShowPoll(true); 
    }else{
      updateData((prevData) => !prevData);
    }
  };





// +++++++++++++++++++++++++++++++ quiz create backend connect start

const [quiz, setQuiz] = useState({
  userId: "12345",
  quizTitle: "My Quiz",
  quizType: "Q & A",
  timer: "Off",
  impressions: 10,
  createDate: 82828,
  questionTitle: "What is the capital of France?",
  optionType: "Text",
  options: "Paris London Berlin Madrid",
  imgUrl: "",
  correctAnswerIndex: 0,
  attemptedCorrectly: 0,
  attemptedIncorrectly: 0,
});



const handleSubmit = async (e) => {
  e.preventDefault();
  
    try {
      const response = await axios.post(`${baseUrl}/createQuizPoll`, quiz);
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
    console.log('Form submitted:', quiz);
  
};



// +++++++++++++++++++++++++++++++ quiz create backend connect end











  return (
    <div className={CssQuizName.container}>
      {handleSubmit}
      <div>
        <input type="text" placeholder="   Quiz Name" className={`${CssQuizName.input} ${showPoll ? CssQuizName.inactive : ''}`} />
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
        <button className={`${CssQuizName.continuebtn }  ${showPoll ? CssQuizName.inactive : ''}`} onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default QuizName;
