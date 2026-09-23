import scss from "./BookItem.module.scss";

import { useDispatch } from "react-redux";
import { deleteBook } from "../../redux/booksSlice";

export const BookItem = ({ id, name, author, year, genre, cover, image, showModalImage, largeImage }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteBook(id));
  return (
    <li className={scss.bookItem}>
      <img
        className={scss.img}
        src={require(`../../covers/${cover}`)}
        alt="adss"
        onClick={() => showModalImage(image)}
      />
      <h2>Назва:{name}</h2>
      <p>Автор:{author}</p>
    </li>
  );
};
