import { configureStore } from '@reduxjs/toolkit';
// Импортируем наш будущий слайс
import { counterReducer } from "./counter"
import {myslscesRedicer} from "./mycomponent-roolkit/my-component"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mysleces: myslscesRedicer,
    // Здесь можно добавить другие редюсеры
  },
});