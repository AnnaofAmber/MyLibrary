import scss from './Layout.module.scss' 

import { BookList } from '../BookList/BookList'
import { Modal } from '../Modal/Modal';
import { useState } from 'react';



export const Layout = () => {
  const [isModal, setIsModal] = useState(false);
  const [image, setModalImage] = useState({});

  const showModalImage = imageModal => {
    setModalImage(imageModal);
    setIsModal(true);
  };

  const closeModal = () => {
    setModalImage({});
    setIsModal(false);}
    console.log(image);
    
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
      {isModal && <Modal image={image} onClose={closeModal} />}
</div>
)
}