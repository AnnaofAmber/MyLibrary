import scss from './BookItem.module.scss'

export const BookItem = () => {

    return(
        <li className={scss.bookItem}>
            <img src="" alt="" />
            <h2>Назва</h2>
            <p>Автор</p>

        </li>
)
}