import scss from "./BookItem.module.scss";

// import { useDispatch } from "react-redux";
// import { deleteBook } from "../../redux/booksSlice";

export const BookItem = ({ id, name, author, year, genre, cover, image, showModalImage, pages }) => {
//   const dispatch = useDispatch();
//   const onDelete = () => dispatch(deleteBook(id));
const width = Number(pages)/10
let height = width*3

if (height<100){
    height = 200
}

  return (
    <li className={scss.bookItem} style={{width:`${width}px`, height:`${height}px`}}  onClick={() => showModalImage(image, name, author, year, genre)}>
        {/* <div className={scss.bookSpine}> */}
        <h2 className={scss.name}>{name}</h2>
        <p className={scss.author}>{author}</p> 
        {/* </div> */}
      {/* <img
        className={scss.img}
        src={require(`../../covers/${cover}`)}
        alt="adss"
        onClick={() => showModalImage(image, name, author, year, genre)}
      />
      <h2>Назва:{name}</h2>
      <p>Автор:{author}</p> */}
    </li>
  );
};
