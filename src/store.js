import { configureStore } from '@reduxjs/toolkit';
// Импортируем наш будущий слайс
import { counterReducer } from "./counter"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Здесь можно добавить другие редюсеры
  },
});