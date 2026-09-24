import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: nanoid(),
      name: "Хроніки Амбера",
      author: "Роджер Бл",
      year:'',
      publishYear: "",
      genre: "фентезі, дарк",
      publisher: "",
      cover: "хронікиАмбера.jpg",
      pages: "864",
      color: "#102f20",
      textColor: "#d8e2d6",
      read: true,
      series: "",
      volumes: "",
      part:'',
      rating: "",
      description: "",
      language:'',
    },]
  }
const bookSlice = createSlice({
  name: "books",
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
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, deleteBook } = bookSlice.actions;
export const booksReducer = bookSlice.reducer;
