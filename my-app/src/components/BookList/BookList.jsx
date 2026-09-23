import scss from './BookList.module.scss'

import { BookItem } from "../BookItem/BookItem"
import { useSelector } from 'react-redux'


export const BookList = () => {
    const books = useSelector(state=>state.books)
    return(
        <ul className={scss.bookList}>
            <BookItem
          id={books.id}
          key={books.id}
          name={books.name}
          author={books.author}/>
        </ul>
    )
}