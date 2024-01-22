import CssModal from './Modal.module.css'; 
import ContextModalClose from '../../ContextApi/ContextModalClose/ContextModalClose';
import { useContext } from 'react';

const Modal = ({ isOpen, onClose, children }) => {

  const {close : closeBtnData} = useContext(ContextModalClose);


  if (!isOpen) return null;

  return (
    <div className={CssModal.modalOverlay} onClick={onClose ? closeBtnData  : onClose }>
      <div className={CssModal.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal; 
