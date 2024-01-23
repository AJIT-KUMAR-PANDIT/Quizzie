import React, { useState } from 'react';
import CssImagePollOptions from './ImagePollOptions.module.css';

const ImageOptions = () => {
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
    <div className={CssImagePollOptions.bodyImageOptions}>
      <div>
        <div>
          {options.map((option) => (
            <div key={option.id} style={{ display: 'flex' }}>
              <input
                type="radio"
                value={option.text}
                checked={selectedOption === option.id}
                onChange={() => handleOptionChange(option.id)}
                className={`${CssImagePollOptions.radio1} ${option.selected ? CssImagePollOptions.selected : ''}`}
                id={`radio${option.id}`}
              />
              <input
                id={`input${option.id}`}
                type="text"
                placeholder={`IMAGE URL ${option.id}`}
                className={`${CssImagePollOptions.inputOption} ${option.selected ? CssImagePollOptions.selected : ''}`}
                value={option.text}
                onChange={(e) => handleOptionTextChange(option.id, e.target.value)}
              />
              {options.length > 2 && option.id > 2 && (
                <div>
                  <span
                    className={`${CssImagePollOptions.crossIcon} ${CssImagePollOptions.crossButton}`}
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
        <div className={CssImagePollOptions.addButtonContainer}>
          &nbsp;&nbsp;
          {options.length < 4 && (
            <button onClick={handleAddOptionsClick} className={CssImagePollOptions.addButton}>
              Add option
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageOptions;
