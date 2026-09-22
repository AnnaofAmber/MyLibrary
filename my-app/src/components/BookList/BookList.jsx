import scss from './BookList.module.scss'

import { BookItem } from "../BookItem/BookItem"


export const BookList = () => {
    return(
        <ul className={scss.bookList}>
            <BookItem/>
        </ul>
    )
}