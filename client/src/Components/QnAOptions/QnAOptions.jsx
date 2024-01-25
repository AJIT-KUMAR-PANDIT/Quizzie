import React, { useState } from 'react';
import CssQnAOptions from './QnAOptions.module.css';

const QnAOptions = ({ onOptionTextChange }) => {
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

    // callback function to pass the updated text value
    onOptionTextChange(id,text);
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
                  <img src="assets/img/material-symbols_delete.svg" alt="crossIcon" />
                </span>
              )}
              <br />
              <br />
            </div>
          ))}
        </div>
        <div className={CssQnAOptions.addButtonContainer}>
          &nbsp;&nbsp;
          {options.length < 4 && (
            <button onClick={handleAddOptionsClick} className={CssQnAOptions.addButton}>
              Add option
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QnAOptions;
