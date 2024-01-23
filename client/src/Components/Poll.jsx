import React, { useState, useContext } from 'react';
import CssPoll from './Poll.module.css';
import PollOptions from '../PollOptions/PollOptions';
import ImageOptions from '../ImageOptions/ImageOptions';
import TextImageOptions from '../TextImageOptions/TextImageOptions';
import ContextModalClose from '../../ContextApi/ContextModalClose/ContextModalClose';

const Poll = () => {
    const { updateClose } = useContext(ContextModalClose);
    const [buttons, setButtons] = useState([1]);
    const [selectedOption, setSelectedOption] = useState('Text');

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
        <div className={CssPoll.bodyPoll}>
            <div>
                <div style={{ display: 'flex' }}>
                    {buttons.map(buttonNumber => (
                        <div key={buttonNumber} className={CssPoll.buttonContainer}>
                            <button className={CssPoll.buttonAdded}>{buttonNumber}</button>
                            {buttonNumber !== 1 && (
                                <span className={`${CssPoll.crossIcon} ${CssPoll.crossButton}`} onClick={() => handleDeleteButtonClick(buttonNumber)}>&#x2716;</span>
                            )}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                    ))}
                    <img src="assets/img/QnA+.svg" alt="Poll" onClick={handleImgClick} />
                    <div className={CssPoll.text1}>Max 5 questions</div>
                </div>
                <br />
                <div>
                    <input type="text" placeholder="Question" className={CssPoll.inputQuestion} />
                    <br /><br />
                    <div className={CssPoll.optionType}>
                        <label className={CssPoll.text2}>
                            <input
                                type="radio"
                                value="Text"
                                checked={selectedOption === 'Text'}
                                onChange={handleOptionChange}
                                className={CssPoll.radio1}
                                id='radio1'
                            />
                            Text
                        </label>
                        <label className={CssPoll.text2}>
                            <input
                                type="radio"
                                value="Image URL"
                                checked={selectedOption === 'Image URL'}
                                onChange={handleOptionChange}
                                className={CssPoll.radio1}
                                id='radio2'
                            />
                            Image URL
                        </label>
                        <label className={CssPoll.text2}>
                            <input
                                type="radio"
                                value="Text & Image URL"
                                checked={selectedOption === 'Text & Image URL'}
                                onChange={handleOptionChange}
                                className={CssPoll.radio1}
                                id='radio3'
                            />
                            Text & Image URL
                        </label>
                    </div >
                    <br />
                </div>

                {selectedOption === 'Text' && (
                    <div id='PollOptions' style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                        <div>
                            <PollOptions />
                        </div>
                        <div>
                        </div>
                    </div>
                )}

                {selectedOption === 'Image URL' && (
                    <div id='PollImage' style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                        <div>
                            <ImageOptions />
                        </div>
                        <div>
                        </div>
                    </div>
                )}

                {selectedOption === 'Text & Image URL' && (
                    <div id='PollTimg' style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                        <div>
                            <TextImageOptions />
                        </div>
                        <div>
                        </div>
                    </div>
                )}

                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                    <button className={CssPoll.button5} onClick={handleCancelClick}>Cancel</button>
                    <button className={CssPoll.button3}> Create Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default Poll;
