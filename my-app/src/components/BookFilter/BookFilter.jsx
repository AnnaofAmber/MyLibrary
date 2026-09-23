import css from './BookFilter.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { filterBooks } from '../../redux/filterBooksSlice';
import { readFilter } from '../../redux/readFilterSlice';

export const BookFilter = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.name);
  const author = useSelector(state => state.author);
  const isRead = useSelector(state => state.isRead)
  
  const handleFilterChange = event => {
    return dispatch(filterBooks(event.target.value));
  };


  const handleFilterChangeIsRead = event => {

    return dispatch(readFilter(event.target.id))
  }
  
  return (
<div>
      <div className={css.filter}>
      <label className={css.label} htmlFor="search">
        Пошук: 
      </label>
      <input
        className={css.input}
        id="search"
        name="filter"
        value={name||author}
        type="text"
        onChange={handleFilterChange}
      />
    </div>
    <div>
      <label for="all">Всі</label>
      <input id='all' type="checkbox" onChange={handleFilterChangeIsRead}/>

      <label for="read">Прочитані</label>
      <input id='read' type="checkbox" onChange={handleFilterChangeIsRead}/>

      <label for="not">Непрочитані</label>
      <input id='not' type="checkbox" onChange={handleFilterChangeIsRead}/>
    </div>
</div>
  );
};