import React, { useState } from 'react';
import CssQnA from './QnA.module.css';
import QnAOptions from '../QnAOptions/QnAOptions';

const QnA = () => {
    const [buttons, setButtons] = useState([1]);




    



    const handleImgClick = () => {
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
                    <div>
                        {/* <div style={{display: 'flex'}}>
                            <input
                                type="radio"
                                value="Text"
                                checked={selectedOption === 'Text & Image URL'}
                                onChange={handleOptionChange}
                                className={CssQnA.radio1}
                                id='radio1'
                            />
                            <input  id='input' type="text" placeholder="Option 1" className={CssQnA.inputOption} />
                        </div> */}
                        <QnAOptions />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default QnA;
