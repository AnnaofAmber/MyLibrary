import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: nanoid(), name: 'Хроніки Амбера', author: 'Роджер Желязни', year:'', genre:'', publisher:'', cover: 'хронікиАмбера.jpg' },
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
      prepare(name, author) {
        return {
          payload: {
            name,
            id: nanoid(),
            author: author,
          },
        };
      },
    },
    deleteBook(state, action) {
      return state.filter(book => book.id !== action.payload);
    },
  },
});

export const { addBook, deleteBook } = bookSlice.actions;
export const booksReducer = bookSlice.reducer;
