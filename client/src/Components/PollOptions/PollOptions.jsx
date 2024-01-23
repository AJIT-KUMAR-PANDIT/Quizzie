import React, { useState } from 'react';
import CssPollOptions from './PollOptions.module.css';

const PollOptions = () => {
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
    <div className={CssPollOptions.bodyPollOptions}>
      <div>
        <div>
          {options.map((option) => (
            <div key={option.id} style={{ display: 'flex' }}>
              <input
                type="radio"
                value={option.text}
                checked={selectedOption === option.id}
                onChange={() => handleOptionChange(option.id)}
                className={`${CssPollOptions.radio1} ${option.selected ? CssPollOptions.selected : ''}`}
                id={`radio${option.id}`}
              />
              <input
                id={`input${option.id}`}
                type="text"
                placeholder={`Option ${option.id}`}
                className={`${CssPollOptions.inputOption} ${option.selected ? CssPollOptions.selected : ''}`}
                value={option.text}
                onChange={(e) => handleOptionTextChange(option.id, e.target.value)}
              />
              {options.length > 2 && option.id > 2 && (
                <span
                  className={`${CssPollOptions.crossIcon} ${CssPollOptions.crossButton}`}
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
        <div className={CssPollOptions.addButtonContainer}>
          &nbsp;&nbsp;
          {options.length < 4 && (
            <button onClick={handleAddOptionsClick} className={CssPollOptions.addButton}>
              Add option
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PollOptions;
