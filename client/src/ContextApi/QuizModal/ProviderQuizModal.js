import React, { useState } from 'react';
import ContextApiQuizModal from './ContextApiQuizModal';

const ProviderQuizModal = ({ children }) => {
  const [data, setData] = useState(false);

  const updateData = newData => {
    setData(newData);
  };

  return (
    <ContextApiQuizModal.Provider value={{ data, updateData }}>
      {children}
    </ContextApiQuizModal.Provider>
  );
};

export default ProviderQuizModal;
