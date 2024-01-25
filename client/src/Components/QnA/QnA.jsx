import React, { useState, useContext } from 'react';
import CssQnA from './QnA.module.css';
import QnAOptions from '../QnAOptions/QnAOptions';
import Timer from '../Timer/Timer';
import ImageOptions from '../ImageOptions/ImageOptions';
import TextImageOptions from '../TextImageOptions/TextImageOptions';
import ContextModalClose from '../../ContextApi/ContextModalClose/ContextModalClose';
import { useQuizContext } from '../../ContextApi/QuizContext/QuizContext';


const QnA = () => {
    const { updateClose } = useContext(ContextModalClose);
    const { updateTimer } = useQuizContext();
    const { quizData, updateQuestions } = useQuizContext();
    const [buttons, setButtons] = useState([1]);
    const [selectedOption, setSelectedOption] = useState('Text');
    const [optionsData, setOptionsData] = useState([]);


    // Handling the option text change
    const handleOptionTextChange = (id, text) => {
        console.log(`Option text value ${text}`);
        // Createing copy of optionsData
        const updatedOptionsData = [...optionsData];

        // Updating text  index with the new text
        updatedOptionsData[id] = text;

        // Seting the state with the updated array
        setOptionsData(updatedOptionsData);
        console.log(`Option text value3 ${text}`);
        console.log(`Option text value2 ${optionsData}`);

    };
    const handleTimerClick = (buttonNumber) => {
        console.log(`Button ${buttonNumber} clicked!`);
        updateTimer(buttonNumber);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleImgClick = () => {
        if (buttons.length < 5) {
            setButtons(prevButtons => [...prevButtons, prevButtons.length + 1]);
        }
    };

    const handleDeleteButtonClick = (buttonNumber) => {
        setButtons(prevButtons => prevButtons.filter(btn => btn !== buttonNumber));
    };

    const handleCancelClick = () => {
        console.log('Cancel button clicked');
        updateClose(false);
    };

    return (
        <div className={CssQnA.bodyQnA}>
            <div>
                <div style={{ display: 'flex' }}>
                    {buttons.map(buttonNumber => (
                        <div key={buttonNumber} className={CssQnA.buttonContainer}>
                            <button className={CssQnA.buttonAdded}>{buttonNumber}</button>
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
                    <input type="text" placeholder="Question" className={CssQnA.inputQuestion} />
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

                {selectedOption === 'Text' && (
                    <div id='qNaOptions' style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                        <div>
                            <QnAOptions onOptionTextChange={handleOptionTextChange} />
                        </div>
                        <div>
                            <Timer onTimerClick={handleTimerClick} />
                        </div>
                    </div>
                )}

                {selectedOption === 'Image URL' && (
                    <div id='qNaImage' style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                        <div>
                            <ImageOptions />
                        </div>
                        <div>
                            <Timer />
                        </div>
                    </div>
                )}

                {selectedOption === 'Text & Image URL' && (
                    <div id='qNaTimg' style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                        <div>
                            <TextImageOptions />
                        </div>
                        <div>
                            <Timer />
                        </div>
                    </div>
                )}

                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                    <button className={CssQnA.button5} onClick={handleCancelClick}>Cancel</button>
                    <button className={CssQnA.button3}> Create Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default QnA;
