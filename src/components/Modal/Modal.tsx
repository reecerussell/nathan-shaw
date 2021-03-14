import { FunctionComponent } from 'react';

interface ModalProps {
  open?: boolean;
  onClose?: CloseFunc;
}

interface CloseFunc {
  (open?: boolean): void;
}

const Modal: FunctionComponent<ModalProps> = ({ open, onClose, children }) => {
  const handleClose = (): void => {
    if (!open) {
      return;
    }

    if (onClose) {
      onClose();
    }
  };

  if (!open) {
    return null;
  }

  return (
    <div className="ns-modal" onClick={handleClose}>
      <div className="ns-modal-content">{children}</div>
    </div>
  );
};

export default Modal;
export type { ModalProps };
