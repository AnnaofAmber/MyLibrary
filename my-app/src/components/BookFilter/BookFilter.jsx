import scss from './BookFilter.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { filterBooks } from '../../redux/filterBooksSlice';
import { readFilter } from '../../redux/readFilterSlice';

export const BookFilter = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.name);
  // const author = useSelector(state => state.author);
  // const isRead = useSelector(state => state.isRead)

  
  const handleFilterChange = event => {
    console.log(event);
    
    return dispatch(filterBooks(event.target.value));
  };


  const handleFilterChangeIsRead = event => {
    return dispatch(readFilter(event.target.id))
  }
  
  return (
<div className={scss.container}>
      <div className={scss.filter}>
      <label className={scss.label} htmlFor="search">
      </label>
      <input
        className={scss.input}
        id="search"
        name="filter"
        value={name}
        type="text"
        onChange={handleFilterChange}
        placeholder='Пошук'
      />
    </div>
    <div className={scss.btnContaier}>
      <button className={scss.btn} id='all' onClick={handleFilterChangeIsRead}>Всі</button>
      <button className={scss.btn} id='read' onClick={handleFilterChangeIsRead}>Прочитані</button>
      <button className={scss.btn} id='not' onClick={handleFilterChangeIsRead}>Непрочитані</button>

      {/* <label for="all">Всі</label>
      <input id='all' type="checkbox" onChange={handleFilterChangeIsRead}/>

      <label for="read">Прочитані</label>
      <input id='read' type="checkbox" onChange={handleFilterChangeIsRead}/>

      <label for="not">Непрочитані</label>
      <input id='not' type="checkbox" onChange={handleFilterChangeIsRead}/> */}
    </div>
</div>
  );
};