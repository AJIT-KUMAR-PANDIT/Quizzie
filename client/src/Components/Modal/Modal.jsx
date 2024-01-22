import CssModal from './Modal.module.css';
import ContextModalClose from '../../ContextApi/ContextModalClose/ContextModalClose';
import { useContext } from 'react';

const Modal = ({ isOpen, onClose, children }) => {

  const { close: onCloseq } = useContext(ContextModalClose);


  if (!isOpen) return null;

  return (
    <>
      {
        onCloseq ? (
          <div className={CssModal.modalOverlay} onClick={false}>
            <div className={CssModal.modalContent} onClick={(e) => e.stopPropagation()}>
              {children}
            </div>
          </div>
        ) : (
          <div className={CssModal.modalOverlay} onClick={onClose}>
            <div className={CssModal.modalContent} onClick={(e) => e.stopPropagation()}>
              {children}
            </div>
          </div >
        )
      }
    </>
  );
};

export default Modal; 
