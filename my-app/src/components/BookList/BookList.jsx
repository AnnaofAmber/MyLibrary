import scss from './BookList.module.scss'

import { BookItem } from "../BookItem/BookItem"
import { useSelector } from 'react-redux'

const onFilteredBooks = (books, filter, ) => {
  return books.filter(book =>
    book.name.toLowerCase().includes(filter.toLowerCase()
  )||
      book.author.toLowerCase().includes(filter.toLowerCase()
  )
  );
};

export const BookList = ({showModalImage}) => {
    const books = useSelector(state=>state.books)
    const filter = useSelector(state=>state.filter)
    const filteredBooks = onFilteredBooks(books, filter);
    return(
         <ul className={scss.bookList}>
        {filteredBooks.map(book => (
            <BookItem
          id={book.id}
          key={book.id}
          name={book.name}
          author={book.author}
          year={book.year}
          genre={book.genre}
          cover ={book.cover}
          image={book.cover}
          pages={book.pages}
          color={book.color}
          textColor={book.textColor}
          showModalImage={showModalImage}
          />
        ))
    }
    </ul>
    )
}