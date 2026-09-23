import scss from './BookInfo.module.scss'

export const BookInfo = ({image}) =>{
    return(
    <div>
        <section>
        <img
        className={scss.img}
        src={require(`../../covers/${image}`)}
        alt="adss"
      />
        </section>
    </div>
    )
}