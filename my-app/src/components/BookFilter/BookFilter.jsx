import css from './BookFilter.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { filterBooks } from '../../redux/filterBooksSlice';

export const BookFilter = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.name);
  const author = useSelector(state => state.author);
  const isRead = useSelector(state => state.isRead)
  
  const handleFilterChange = event => {
    return dispatch(filterBooks(event.target.value));
  };
  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor="search">
        Find contacts by name:
      </label>
      <input
        className={css.input}
        id="search"
        name="filter"
        value={name}
        type="text"
        onChange={handleFilterChange}
      />
    </div>
  );
};