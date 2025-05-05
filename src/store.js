import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from "./counter";
import { myslscesRedicer } from "./mycomponent-roolkit/my-component";
import logger from 'redux-logger';
import customLogger from './meddleware/meedleware'; // Проверьте путь к файлу!

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mysleces: myslscesRedicer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(logger)
      .concat(customLogger)
});