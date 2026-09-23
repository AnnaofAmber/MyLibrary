import { BookInfo } from '../BookInfo/BookInfo';
import scss from './Modal.module.scss';
import { useEffect } from 'react';

export const Modal = ({ onClose, image }) => {
  useEffect(() => {
    window.addEventListener('keydown', onClose);

    return () => {
      window.removeEventListener('keydown', onClose);
    };
  }, [onClose]);

  const handleClick = e => {
    if (e.target.nodeName === 'DIV' || e.code === 'Escape') {
      onClose();
    }
  };
  return (
    <div className={scss.overlay} onClick={handleClick}>
      <div className={scss.modal}>
        <BookInfo image={image}/>
      </div>
    </div>
  );
};