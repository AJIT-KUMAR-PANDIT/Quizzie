import React, { useState } from 'react';
import CssQnA from './QnA.module.css';
import QnAOptions from '../QnAOptions/QnAOptions';
import Timer from '../Timer/Timer';

const QnA = () => {
    const [buttons, setButtons] = useState([1]);




    const [selectedOption, setSelectedOption] = useState('Text');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };





    const handleImgClick = () => {
        // Check if the current number of buttons is less than 5 before adding a new button
        if (buttons.length < 5) {
            setButtons(prevButtons => [...prevButtons, prevButtons.length + 1]);
        }
    };

    const handleDeleteButtonClick = (buttonNumber) => {
        // Remove the clicked button
        setButtons(prevButtons => prevButtons.filter(btn => btn !== buttonNumber));
    };

    return (
        <div className={CssQnA.bodyQnA}>
            <div>
                <div style={{ display: 'flex' }}>
                    {/* Render buttons dynamically */}
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
                        <label className={CssQnA.text2}>Option Type </label>
                        <label className={CssQnA.text2}>
                            <input
                                type="radio"
                                value="Text"
                                checked={selectedOption === 'Text'}
                                onChange={handleOptionChange}
                                className={CssQnA.radio1}
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
                            />
                            Text & Image URL
                        </label>
                    </div >
                    <br />
                </div>
                <div id='qNaOptions' style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }} className={`${selectedOption === 'text' ? CssQnA.show : CssQnA.hide}`}>
                    <div>
                        <QnAOptions />
                    </div>
                    <div>
                        <Timer />
                    </div>
                </div>
                <div id='qNaOptions' style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }} className={`${selectedOption === 'text' ? CssQnA.show : CssQnA.hide}`}>
                    <div>
                        <QnAOptions />
                    </div>
                    <div>
                        <Timer />
                    </div>
                </div>
                <div id='qNaOptions' style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }} className={`${selectedOption === 'text' ? CssQnA.show : CssQnA.hide}`}>
                    <div>
                        <QnAOptions />
                    </div>
                    <div>
                        <Timer />
                    </div>
                </div> 

                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                    <button className={CssQnA.button5}> Cancel</button>
                    <button className={CssQnA.button3}> Create Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default QnA;
