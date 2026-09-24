import scss from "./BookItem.module.scss";

// import { useDispatch } from "react-redux";
// import { deleteBook } from "../../redux/booksSlice";

export const BookItem = ({ id, name, author, year, genre, cover, image, showModalImage, pages, color, textColor }) => {
//   const dispatch = useDispatch();
//   const onDelete = () => dispatch(deleteBook(id));
const width = (Number(pages)+100)/10
let height = width*2.5
// if (height<200){
//     height = 200
// }
const fontSizeTitle = height/15

const fontSize = height/22

  return (
    <li className={scss.bookItem}   onClick={() => showModalImage(image, name, author, year, genre)}>
        <div className={scss.bookSpine} style={{width:`${width}px`, height:`${height}px`, backgroundColor:`${color}`, color:`${textColor}`, }}>
        <h2 className={scss.name} style={{fontSize:`${fontSizeTitle}px`}}>{name}</h2>
        <p className={scss.author} style={{fontSize:`${fontSize}px`}}>{author}</p> 
        </div>
        <div className={scss.shelf}></div>
    </li>
  );
};
