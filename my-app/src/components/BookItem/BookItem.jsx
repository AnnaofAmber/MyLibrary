import scss from "./BookItem.module.scss";

// import { useDispatch } from "react-redux";
// import { deleteBook } from "../../redux/booksSlice";

export const BookItem = ({ id, name, author, year, genre, cover, image, showModalImage, pages, color, textColor }) => {
//   const dispatch = useDispatch();
//   const onDelete = () => dispatch(deleteBook(id));
const width = Number(pages)/10
let height = width*3
if (height<100){
    height = 200
}
const fontSizeTitle = height/18

const fontSize = height/25

  return (
    <li className={scss.bookItem} style={{width:`${width}px`, height:`${height}px`, backgroundColor:`${color}`, color:`${textColor}`, }}  onClick={() => showModalImage(image, name, author, year, genre)}>
        {/* <div className={scss.bookSpine}> */}
        <h2 className={scss.name} style={{fontSize:`${fontSizeTitle}px`}}>{name}</h2>
        <p className={scss.author} style={{fontSize:`${fontSize}px`}}>{author}</p> 
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
