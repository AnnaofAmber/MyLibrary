import scss from './Layout.module.scss' 

import { BookList } from '../BookList/BookList'
import { Modal } from '../Modal/Modal';
import { useState } from 'react';



export const Layout = () => {
  const [isModal, setIsModal] = useState(false);
  const [image, setModalImage] = useState({});
  const [name, setModalName] = useState({});
  const [author, setModalAuthor] = useState({});
  const [year, setModalYear] = useState({});
  const [genre, setModalGenre] = useState({});

  const showModalImage = (imageModal,name, author, genre, year) => {
    setModalImage(imageModal);
    setModalName(name)
    setModalAuthor(author)
    setModalGenre(genre)
    setModalYear(year)
    setIsModal(true);
  };

  const closeModal = () => {
    setModalImage({});
    setIsModal(false);}

    
return (
    <div className={scss.wrapper}>
        <div className={scss.container}>
    <header className={scss.header}>
        <h1 className={scss.headerTitle}>
            MyLibrary
        </h1>
    </header>
    <main>
        <BookList showModalImage={showModalImage}/>
    </main>
    <footer className={scss.footer}>
        <h3>2026</h3>
    </footer>
    </div>
      {isModal && <Modal nameModal={name} image={image} author={author} genre={genre} year={year} onClose={closeModal} />}
</div>
)
}