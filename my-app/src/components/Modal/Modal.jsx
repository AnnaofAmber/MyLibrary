import { BookInfo } from '../BookInfo/BookInfo';
import scss from './Modal.module.scss';
import { useEffect } from 'react';

export const Modal = ({ onClose, image, nameModal, author, year, genre, publishYear, publisher, pages, read, series, seriesName,volumes, part, rating,description, language, dateOfReading, dateOfBuying}) => {
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
        <BookInfo           nameModal={nameModal}
          author={author}
          year={year}
          publisher={publisher}
          publishYear={publishYear}
          genre={genre}
          image={image}
          pages={pages}
          read={read}
          series={series}
          seriesName={seriesName}
          volumes={volumes}
          part={part}
          rating={rating}
          description={description}
          language={language}
          dateOfReading={dateOfReading}
          dateOfBuying={dateOfBuying}
          />
      </div>
    </div>
  );
};