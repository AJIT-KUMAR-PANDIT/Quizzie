import React, { useState } from 'react';
import CssTimer from './Timer.module.css';

const Timer = ({onTimerClick}) => {
  const [toggleState, setToggleState] = useState("off");

  const handleToggle = (buttonNumber) => {
    setToggleState(buttonNumber);
    onTimerClick(buttonNumber);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
        <div className={CssTimer.timer}>Timer</div>
        <button
          className={`${CssTimer.buttonOff} ${toggleState === "off" ? CssTimer.activeButton : ''}`}
          onClick={() => handleToggle("off")}
        >
          OFF
        </button>
        <button
          className={`${CssTimer.buttonSec} ${toggleState === "5 Sec" ? CssTimer.activeButton : ''}`}
          onClick={() => handleToggle("5 Sec")}
        >
          5 sec
        </button>
        <button
          className={`${CssTimer.buttonSec} ${toggleState === "10 Sec" ? CssTimer.activeButton : ''}`}
          onClick={() => handleToggle("10 Sec")}
        >
          10 sec
        </button>
      </div>
    </>
  );
};

export default Timer;
