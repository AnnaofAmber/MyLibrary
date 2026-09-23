import scss from "./BookItem.module.scss";

import { useDispatch } from "react-redux";
import { deleteBook } from "../../redux/booksSlice";

export const BookItem = ({ id, name, author, year, genre, image, showModalImage, largeImage }) => {
  const dispatch = useDispatch();
  console.log(`../../covers/${image}`);
  const onDelete = () => dispatch(deleteBook(id));
  return (
    <li className={scss.bookItem}>
      <img
        className={scss.img}
        src={require(`../../covers/${image}`)}
        alt="adss"
        onClick={() => showModalImage(largeImage)}

      />
      <h2>Назва:{name}</h2>
      <p>Автор:{author}</p>
    </li>
  );
};
