import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterBooksSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    filterBooks(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterBooks } = filterBooksSlice.actions;
export const filterReducer = filterBooksSlice.reducer;
