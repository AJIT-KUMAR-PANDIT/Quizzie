import React, { useState } from 'react';
import ContextModalClose from './ContextModalClose';

const ProviderModalClose = ({ children }) => {
  const [close, setClose] = useState(true);

  const updateClose = newClose => {
    console.log('Updating close state:', newClose);
    setClose(newClose);
  };

  return (
    <ContextModalClose.Provider value={{ close, updateClose }}>
      {children}
    </ContextModalClose.Provider>
  );
};


export default ProviderModalClose;
