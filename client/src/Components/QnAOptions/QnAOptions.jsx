import React, { useState } from 'react';
import CssQnAOptions from './QnAOptions.module.css';
import CssQnA from '../QnA/QnA.module.css';
const QnAOptions = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const [options, setOptions] = useState([
    { id: 1, text: '', selected: false },
    { id: 2, text: '', selected: false }
  ]);

  const handleOptionChange = (id) => {
    const updatedOptions = options.map((option) =>
      option.id === id ? { ...option, selected: !option.selected } : { ...option, selected: false }
    );
    setSelectedOption(id);
    setOptions(updatedOptions);
  };

  const handleAddOptionsClick = () => {
    if (options.length < 4) {
      const newOptions = [
        ...options,
        { id: options.length + 1, text: '', selected: false }
      ];
      setOptions(newOptions);
    }
  };

  const handleOptionTextChange = (id, text) => {
    const updatedOptions = options.map((option) =>
      option.id === id ? { ...option, text } : option
    );
    setOptions(updatedOptions);
  };

  const handleDeleteOptionClick = (id) => {
    if (options.length > 2) {
      const updatedOptions = options.filter((option) => option.id !== id);
      setOptions(updatedOptions);
    }
  };

  return (
    <div className={CssQnAOptions.bodyQnAOptions}>
      <div>
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
      </div>
      <div>
        <div>
          {options.map((option) => (
            <div key={option.id} style={{ display: 'flex' }}>
              <input
                type="radio"
                value={option.text}
                checked={selectedOption === option.id}
                onChange={() => handleOptionChange(option.id)}
                className={`${CssQnAOptions.radio1} ${option.selected ? CssQnAOptions.selected : ''}`}
                id={`radio${option.id}`}
              />
              <input
                id={`input${option.id}`}
                type="text"
                placeholder={`Option ${option.id}`}
                className={`${CssQnAOptions.inputOption} ${option.selected ? CssQnAOptions.selected : ''}`}
                value={option.text}
                onChange={(e) => handleOptionTextChange(option.id, e.target.value)}
              />
              {options.length > 2 && option.id > 2 && (
                <span
                  className={`${CssQnAOptions.crossIcon} ${CssQnAOptions.crossButton}`}
                  onClick={() => handleDeleteOptionClick(option.id)}
                >
                  &#x2716;
                </span>
              )}
            </div>
          ))}
        </div>
        {options.length < 4 && (
          <button onClick={handleAddOptionsClick}>Add More Options</button>
        )}
      </div>
    </div>
  );
};

export default QnAOptions;
