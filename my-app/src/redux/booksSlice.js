import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: nanoid(),
      name: "Хроніки Амбера",
      author: "Роджер Желязни",
      year:'1970-1991',
      publishYear: "2020",
      genre: "фентезі",
      publisher: "Богдан",
      cover: "https://vivat.com.ua/resize_3840x3840x80/storage/1.d/files/3/1/31ded773_9789661060561.webp",
      pages: "720",
      color: "#a52321",
      textColor: "#f2dcda",
      read: true,
      series: true,
      seriesName: 'Хроніки Амбера',
      volumes: "2",
      part:'1',
      rating: "5",
      description: "Амбер і Хаос — єдині справжні світи в усьому Всесвіті. Їхнє протистояння — це одвічна боротьба між силами Порядку і Хаосу. Пройшовши ініціацію Лабіринтом чи Лоґрусом, члени королівської сім’ї Амбера та Дворів Хаосу можуть вільно мандрувати Тінями — відображеннями головних світів, а також маніпулювати реальністю. У приватній лікарні Тіні Земля чоловік на ім’я Карл Корі одужує після автокатастрофи. Утративши пам’ять, він і не здогадується, що насправді є одним із дев’яти принців Амбера — Корвіном. Чоловік тікає з лікарні. Йому вдається знайти свою сестру, а потім і брата, відшукати дивну колоду карт Таро, на яких зображений і він сам, а потім пройти Лабіринтом... Згадавши, хто він насправді, Корвін прагне здобути корону Амбера. Та він ще не знає, що проти королівства збираються злі сили...",
      language:'українська',
    },
    {
      id: nanoid(),
      name: "Хроніки Амбера",
      author: "Роджер Желязни",
      year:'1970-1991',
      publishYear: "2020",
      genre: "фентезі",
      publisher: "Богдан",
      cover: "https://vivat.com.ua/resize_3840x3840x80/storage/1.d/files/f/b/fb0bcb6f_khroniky-ambera-tom-2-piatyknyzhzhia-merlina.webp",
      pages: "864",
      color: "#00563a",
      textColor: "#dce5de",
      read: true,
      series: true,
      seriesName: 'Хроніки Амбера',
      volumes: "2",
      part:'2',
      rating: "5",
      description: "Здавалось би, після закінчення війни між двома головними світами — Амбером і Хаосом — у всьому Всесвіті запанував спокій. Трон Амбера очолює новий король, який понад усе прагне зберегти злагоду та мир. Однак... У Тіні Земля юнак Мерлін, син Корвіна Амберського і Дари з Дворів Хаосу, намагається жити нормальним земним життям, життям без підступів, війн, вендет… І це йому добре вдається, якщо не зважати на те, що трапляється з ним кожного 30 квітня. Саме цього дня упродовж восьми років хтось (чи щось?) намагається його вбити. Пожежа, витік газу, автокатастрофа, стрілянина… А цьогорічний убивця виявився схожою на собаку почварою, що загризла його колишню дівчину Джулію та ледь не вбила і його. Хтось повинен стояти за всім цим, але хто?",
      language:'українська',
    },
    
  ]
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
