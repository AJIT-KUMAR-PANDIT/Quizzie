import React, { useState } from 'react';
import CssImageOptions from './ImageOptions.module.css';
import { useQuizContext } from '../../ContextApi/QuizContext/QuizContext';


const ImageOptions = () => {

  const { updateImgUrl } = useQuizContext();

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
   
  // Passing the updatedOptions array to updateImgUrl
  const textArray = updatedOptions.map((option) => option.text);

  // Passing the textArray to updateImgUrl
  updateImgUrl(textArray);
  };

  const handleDeleteOptionClick = (id) => {
    if (options.length > 2) {
      const updatedOptions = options.filter((option) => option.id !== id);
      setOptions(updatedOptions);
    }
  };

  return (
    <div className={CssImageOptions.bodyImageOptions}>
      <div>
        <div>
          {options.map((option) => (
            <div key={option.id} style={{ display: 'flex' }}>
              <input
                type="radio"
                value={option.text}
                checked={selectedOption === option.id}
                onChange={() => handleOptionChange(option.id)}
                className={`${CssImageOptions.radio1} ${option.selected ? CssImageOptions.selected : ''}`}
                id={`radio${option.id}`}
              />
              <input
                id={`input${option.id}`}
                type="text"
                placeholder={`IMAGE URL ${option.id}`}
                className={`${CssImageOptions.inputOption} ${option.selected ? CssImageOptions.selected : ''}`}
                value={option.text}
                onChange={(e) => handleOptionTextChange(option.id, e.target.value)}
              />
              {options.length > 2 && option.id > 2 && (
                <div>
                  <span
                    className={`${CssImageOptions.crossIcon} ${CssImageOptions.crossButton}`}
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
        <div className={CssImageOptions.addButtonContainer}>
          &nbsp;&nbsp;
          {options.length < 4 && (
            <button onClick={handleAddOptionsClick} className={CssImageOptions.addButton}>
              Add option
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageOptions;
