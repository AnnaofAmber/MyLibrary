import css from './BookFilter.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { filterBooks } from '../../redux/filterBooksSlice';

export const BookFilter = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.name);
  const author = useSelector(state => state.author);
  const isRead = useSelector(state => state.isRead)
  // const filter = useSelector(state=>state.filter)
  
  const handleFilterChange = event => {
    console.log(event.target.value);
    
    return dispatch(filterBooks(event.target.value));
  };


  const handleFilterChangeIsRead = event => {
    console.log(event.target);
    
    // return dispatch(filterBooks(event));
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
      <input type="checkbox" onChange={handleFilterChangeIsRead}/>
    </div>
</div>
  );
};