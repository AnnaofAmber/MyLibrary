import scss from './BookList.module.scss'
import { BookItem } from "../BookItem/BookItem"

export const BookList = ({showModalImage, filteredBooks}) => {

    
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