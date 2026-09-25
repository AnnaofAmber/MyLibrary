import scss from "./BookList.module.scss";
import { BookItem } from "../BookItem/BookItem";

export const BookList = ({ showModalImage, filteredBooks }) => {
  return (
    <ul className={scss.bookList}>
      {filteredBooks.map((book) => (
        <BookItem
          id={book.id}
          key={book.id}
          name={book.name}
          author={book.author}
          year={book.year}
          genre={book.genre}
          cover={book.cover}
          image={book.cover}
          color={book.color}
          textColor={book.textColor}
          showModalImage={showModalImage}
          publishYear={book.publishYear}
          publisher={book.publisher}
          pages={book.pages}
          read={book.read}
          series={book.series}
          seriesName={book.seriesName}
          volumes={book.volumes}
          part={book.part}
          rating={book.rating}
          description={book.description}
          language={book.language}
          dateOfReading={book.dateOfReading}
          dateOfBuying={book.dateOfBuying}
        />
      ))}
    </ul>
  );
};
