import scss from './Layout.module.scss' 

import { BookList } from '../BookList/BookList'
import {BookFilter} from '../BookFilter/BookFilter'
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const onFilteredBooks = (books, filter, isRead, ) => {
  if(filter){

    return books.filter(book =>
    book.name.toLowerCase().includes(filter.toLowerCase()
  )||
      book.author.toLowerCase().includes(filter.toLowerCase()
  )
  ||book.genre.toLowerCase().includes(filter.toLowerCase())
  );
  }

  if(isRead==='read'){
    
 return books.filter(book =>
    book.read === true)
  }

  else if (isRead==='not'){

    return  books.filter(book =>
    book.read === false)
  }
      else{
      return books
    }
};

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
    setIsModal(false);
}


    const books = useSelector(state=>state.books)
    const filter = useSelector(state=>state.filter)
    const isRead = useSelector(state=>state.isRead)

    
    
    const filteredBooks = onFilteredBooks(books, filter, isRead);
     
    let i = 0
      const counter = (filteredBooks) =>{
       filteredBooks.map(book=>{
          return i = i+1
        }
       )
        
      }

      counter(filteredBooks)


return (
    <div className={scss.wrapper}>
        <div className={scss.container}>
    <header className={scss.header}>
        <h1 className={scss.headerTitle}>
            MyLibrary
        </h1>
        <BookFilter/>
    </header>
    <main>
        <BookList filteredBooks={filteredBooks} showModalImage={showModalImage}/>
        <div>{i}</div>
    </main>
    <footer className={scss.footer}>
        <h3>2026</h3>
    </footer>
    </div>
      {isModal && <Modal nameModal={name} image={image} author={author} genre={genre} year={year} onClose={closeModal} />}
</div>
)
}