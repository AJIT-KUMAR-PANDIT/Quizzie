import CssModal from './Modal.module.css'; 

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={CssModal.modalOverlay} onClick={onClose}>
      <div className={CssModal.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
