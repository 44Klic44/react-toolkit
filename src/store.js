import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from "./counter";
import { myslscesRedicer } from "./mycomponent-roolkit/my-component";
import logger from 'redux-logger';
import customLogger from './meddleware/meedleware'; 
import userSlices from './thunk/thunk-slices';
import { simpleReducer } from './reactnew/lesson-five/simpleSlice'; // Импортируем новый редюсер

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mysleces: myslscesRedicer,
    user: userSlices,
    simple: simpleReducer, // Добавляем новый редюсер
  },
  // подключение middleware вывод в консоль наших действий
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(logger)
      .concat(customLogger)
});