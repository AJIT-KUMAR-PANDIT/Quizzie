import React, { useState } from 'react';
import CssTimer from './Timer.module.css';

const Timer = () => {
  const [toggleState, setToggleState] = useState(1);

  const handleToggle = (buttonNumber) => {
    setToggleState(buttonNumber);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
        <div className={CssTimer.timer}>Timer</div>
        <button
          className={`${CssTimer.buttonOff} ${toggleState === 1 ? CssTimer.activeButton : ''}`}
          onClick={() => handleToggle(1)}
        >
          OFF
        </button>
        <button
          className={`${CssTimer.buttonSec} ${toggleState === 2 ? CssTimer.activeButton : ''}`}
          onClick={() => handleToggle(2)}
        >
          5 sec
        </button>
        <button
          className={`${CssTimer.buttonSec} ${toggleState === 3 ? CssTimer.activeButton : ''}`}
          onClick={() => handleToggle(3)}
        >
          10 sec
        </button>
      </div>
    </>
  );
};

export default Timer;
