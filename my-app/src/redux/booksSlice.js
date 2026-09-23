import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],
};
const bookSlice = createSlice({
  name: 'books',
  initialState: initialState.books,
  reducers: {
    addBook: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            id: nanoid(),
            number: number,
          },
        };
      },
    },
    deleteBook(state, action) {
      return state.filter(book => book.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = bookSlice.actions;
export const booksReducer = bookSlice.reducer;
