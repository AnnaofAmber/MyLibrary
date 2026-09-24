import scss from './BookInfo.module.scss'

export const BookInfo = ({image, author, nameModal, year, genre}) =>{
    return(
    <div>
        <section>
            <h2>{nameModal}</h2>
            <p>{author}</p>
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
   
