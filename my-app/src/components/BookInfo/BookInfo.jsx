import scss from './BookInfo.module.scss'

export const BookInfo = ({image, author, nameModal, year, genre, publishYear, publisher, pages, read, series, seriesName,volumes, part, rating,description, language, dateOfReading, dateOfBuying}) =>{
    return(
    <div>
        <section>
            <h2>{nameModal}</h2>
            <p>{author}</p>
            <p>{read}</p>
        <img
        className={scss.img}
        // src={require(`../../covers/${image}`)}
        src={image}
        alt="adss"
        loading="lazy"
      />
        </section>
    </div>
    )
}
   
