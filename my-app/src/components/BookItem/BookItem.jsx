import scss from './BookItem.module.scss'

import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/booksSlice';

export const BookItem = ({id, name, author, year, genre, image}) => {
const dispatch = useDispatch();
console.log(`../../covers/${image}`);
const onDelete = () => dispatch(deleteBook(id));
    return(
        <li className={scss.bookItem}>
            {/* <img src="" alt="" /> */}
            <h2>Назва:{name}</h2>
            <p>Автор:{author}</p>
            <img className={scss.img} src= {require(`../../covers/${image}`)} alt="adss" width="360" height="300"/>

        </li>
        
        
)
}