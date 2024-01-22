import React, { useState } from 'react';
import  ContextModalClose from './ContextModalClose';

const ProviderModalClose = ({ children }) => {
  const [close, setclose] = useState(false);

  const updateclose = newclose => {
    setclose(newclose);
  };

  return (
    <ContextModalClose.Provider value={{ close, updateclose }}>
      {children}
    </ContextModalClose.Provider>
  );
};

export default ProviderModalClose;
