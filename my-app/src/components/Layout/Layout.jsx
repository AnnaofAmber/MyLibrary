import scss from './Layout.module.scss' 

import { BookList } from '../BookList/BookList'
import { Modal } from '../Modal/Modal';
import { useState } from 'react';



export const Layout = () => {
  const [isMore, setIsMore] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [modalImage, setModalImage] = useState({});
  const showModalImage = image => {
    setModalImage(image);
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
      {isModal && <Modal largeImage={modalImage} onClose={closeModal} />}
</div>
)
}