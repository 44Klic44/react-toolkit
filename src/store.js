import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from "./counter";
import { myslscesRedicer } from "./mycomponent-roolkit/my-component";
import logger from 'redux-logger';
import customLogger from './meddleware/meedleware'; 
import userSlices from './thunk/thunk-slices';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mysleces: myslscesRedicer,
    user: userSlices,
  },
  // подключение middleware вывод в консоль наших действий
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(logger)
      .concat(customLogger)
});