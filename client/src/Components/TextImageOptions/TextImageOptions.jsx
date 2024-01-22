import React, { useState } from 'react';
import CssTextImageOptions from './TextImageOptions.module.css';

const TextImageOptions = () => {
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
    <div className={CssTextImageOptions.bodyTextImageOptions}>
      <div>
        <div>
          {options.map((option) => (
            <div key={option.id} style={{ display: 'flex' }}>
              <input
                type="radio"
                value={option.text}
                checked={selectedOption === option.id}
                onChange={() => handleOptionChange(option.id)}
                className={`${CssTextImageOptions.radio1} ${option.selected ? CssTextImageOptions.selected : ''}`}
                id={`radio${option.id}`}
              />
              <input
                id={`inputText${option.id}`}
                type="text"
                placeholder={`Text ${option.id}`}
                className={`${CssTextImageOptions.inputOption} ${option.selected ? CssTextImageOptions.selected : ''}`}
                value={option.text}
                onChange={(e) => handleOptionTextChange(option.id, e.target.value)}
              />
              &nbsp;&nbsp;&nbsp;
              <input
                id={`inputImage${option.id}`}
                type="text"
                placeholder={`IMAGE URL ${option.id}`}
                className={`${CssTextImageOptions.inputOption} ${option.selected ? CssTextImageOptions.selected : ''}`}
                value={option.text}
                onChange={(e) => handleOptionTextChange(option.id, e.target.value)}
              />
              {options.length > 2 && option.id > 2 && (
                <div>
                  <span
                    className={`${CssTextImageOptions.crossIcon} ${CssTextImageOptions.crossButton}`}
                    onClick={() => handleDeleteOptionClick(option.id)}
                  >
                    <img src="assets/img/material-symbols_delete.svg" alt="crossIcon" />
                  </span>
                  <br />
                  <br />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={CssTextImageOptions.addButtonContainer}>
          &nbsp;&nbsp;
          {options.length < 4 && (
            <button onClick={handleAddOptionsClick} className={CssTextImageOptions.addButton}>Add option</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextImageOptions;
