import scss from './BookList.module.scss'

import { BookItem } from "../BookItem/BookItem"
import { useDispatch, useSelector } from 'react-redux';
import { readFilter } from '../../redux/readFilterSlice';


const onFilteredBooks = (books, filter, isRead, dispatch) => {
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

export const BookList = ({showModalImage}) => {
    const dispatch = useDispatch();
    const books = useSelector(state=>state.books)
    const filter = useSelector(state=>state.filter)
    const isRead = useSelector(state=>state.isRead)

    console.log(isRead);
    
    
    const filteredBooks = onFilteredBooks(books, filter, isRead, dispatch);
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