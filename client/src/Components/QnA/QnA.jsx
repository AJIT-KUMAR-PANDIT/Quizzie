import React, { useState, useContext } from 'react';
import CssQnA from './QnA.module.css';
import QnAOptions from '../QnAOptions/QnAOptions';
import Timer from '../Timer/Timer';
import ImageOptions from '../ImageOptions/ImageOptions';
import TextImageOptions from '../TextImageOptions/TextImageOptions';
import ContextModalClose from '../../ContextApi/ContextModalClose/ContextModalClose';
import { useQuizContext } from '../../ContextApi/QuizContext/QuizContext';
import { Url } from '../../utils/URL/Url';
import axios from 'axios';

const QnA = () => {

    const baseUrl = Url();

    
    // const [quizTitle, setQuizTitle] = useState("");
    // const [quizeT, setQuizeT] = useState("Q & A");


    const { updateClose } = useContext(ContextModalClose);
    const { quizData, updateUserId, quizTitle, updateTimer, updateQuestionTitle, updateOptionType } = useQuizContext();
    const [buttons, setButtons] = useState([1]);
    const [selectedOption, setSelectedOption] = useState('Text');
    const [clickedButtons, setClickedButtons] = useState(1);

    // Handling the option text change and updateQuestionTitle
    const handleTimerClick = (buttonNumber) => {
        console.log(`Button ${buttonNumber} clicked!`);
        updateTimer(buttonNumber);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        updateOptionType(event.target.value);
    };

    const handleImgClick = () => {
        if (buttons.length < 5) {
            setButtons(prevButtons => [...prevButtons, prevButtons.length + 1]);
            setClickedButtons(prevButtons => prevButtons + 1);
        }
       
    };

    const handleDeleteButtonClick = (buttonNumber) => {
        setButtons(prevButtons => prevButtons.filter(btn => btn !== buttonNumber));
        setClickedButtons(prevButtons => prevButtons -1);
    };

    const handleCancelClick = () => {
        console.log('Cancel button clicked');
        updateClose(false);
    };
















// +++++++++++++++++++++++++++++++ quiz create backend connect start

const [quiz, setQuiz] = useState({
    userId: "",
    qNo: 0,
    quizTitle: "",
    quizType: "Q & A",
    timer: "Off",
    createDate: new Date().getTime(),
    questionTitle: [
      "What is the capital of France?"
    ],
    optionType: "Text",
    options: [
      "Paris London Berlin Madrid"
    ],
    imgUrl: [
      " "
    ],
    correctAnswerIndex: 0,
    attemptedCorrectly: 0,
    attemptedIncorrectly: 0,
    generatedUrl: " ",
  });

  

  const beforeSubmit = () => {
    updateUserId(localStorage.getItem("id"));
    setQuiz([{
      ...quiz,
      userId: quizData.userId,
      qNo: 0,
      quizTitle: quizData.quizTitle,
      quizType: quizData.quizeT,
      timer: quizData.timer,
      createDate: new Date().getTime(),
      questionTitle: quizData.questionTitle,
      optionType: quizData.optionType,
      options: quizData.options,
      imgUrl: quizData.imgUrl,
    }])
  }


  const handleSubmit = async (e) => {
    beforeSubmit();
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
        <div className={CssQnA.bodyQnA}>







{
        console.log("userid:", quizData.userId)
      }
      {
        console.log("quizTitle:", quizData.quizTitle)
      }
      {
        console.log("quizType:", quizData.quizeT)
      }
      {
        console.log("timer:", quizData.timer)
      }
      {
        console.log("createDate:", new Date().getTime())
      }
      {
        console.log("questionTitle:", quizData.questionTitle)
      }
      {
        console.log("optionType:", quizData.optionType)
      }
      {
        console.log("options:", quizData.options)
      }
      {
        console.log("imgUrl:", quizData.imgUrl)
      }









            <div>
                <div style={{ display: 'flex' }}>
                    {buttons.map(buttonNumber => (
                        <div key={buttonNumber} className={CssQnA.buttonContainer} >
                            <button className={CssQnA.buttonAdded} onClick={() => setClickedButtons(buttonNumber)}>{buttonNumber}</button>
                            {buttonNumber !== 1 && (
                                <span className={`${CssQnA.crossIcon} ${CssQnA.crossButton}`} onClick={() => handleDeleteButtonClick(buttonNumber)}>&#x2716;</span>
                            )}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                    ))}
                    <img src="assets/img/QnA+.svg" alt="QnA" onClick={handleImgClick} />
                    <div className={CssQnA.text1}>Max 5 questions</div>
                </div>
                <br />
                <div>
                    {buttons.map(buttonNumber => (
                        <input
                            key={buttonNumber}
                            id={`qTitle${buttonNumber}`}
                            type="text"
                            placeholder={`Question ${buttonNumber}`}
                            className={`${CssQnA.inputQuestion} ${buttonNumber === clickedButtons ? CssQnA.show : CssQnA.hide}`}
                            onChange={e => updateQuestionTitle(e.target.value, buttonNumber)}
                        />
                    ))}
                    <br /><br />
                    <div className={CssQnA.optionType}>
                        <label className={CssQnA.text2}>
                            <input
                                type="radio"
                                value="Text"
                                checked={selectedOption === 'Text'}
                                onChange={handleOptionChange}
                                className={CssQnA.radio1}
                                id='radio1'
                            />
                            Text
                        </label>
                        <label className={CssQnA.text2}>
                            <input
                                type="radio"
                                value="Image URL"
                                checked={selectedOption === 'Image URL'}
                                onChange={handleOptionChange}
                                className={CssQnA.radio1}
                                id='radio2'
                            />
                            Image URL
                        </label>
                        <label className={CssQnA.text2}>
                            <input
                                type="radio"
                                value="Text & Image URL"
                                checked={selectedOption === 'Text & Image URL'}
                                onChange={handleOptionChange}
                                className={CssQnA.radio1}
                                id='radio3'
                            />
                            Text & Image URL
                        </label>
                    </div >
                    <br />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                {buttons.map(buttonNumber => (
                    <div key={buttonNumber} className={`${buttonNumber === clickedButtons ? CssQnA.show : CssQnA.hide}`}>
                        {selectedOption === 'Text' && (
                            <div
                                id={`qNaOptions${buttonNumber}`}
                                style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}
                                className={` ${buttonNumber === buttons ? CssQnA.show : CssQnA.hide}`}
                            >
                                <div>
                                    <QnAOptions />
                                </div>

                            </div>
                        )}

                        {selectedOption === 'Image URL' && (
                            <div id={`qNaImage${buttonNumber}`} style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                                <div>
                                    <ImageOptions />
                                </div>

                            </div>
                        )}

                        {selectedOption === 'Text & Image URL' && (
                            <div id={`qNaTimg${buttonNumber}`} style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                                <div>
                                    <TextImageOptions />
                                </div>

                            </div>
                        )}

                    </div>
                ))}
                <div>
                    <Timer onTimerClick={handleTimerClick} />
                </div>
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                    <button className={CssQnA.button5} onClick={handleCancelClick}>Cancel</button>
                    <button className={CssQnA.button3} onClick={handleSubmit}> Create Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default QnA;
