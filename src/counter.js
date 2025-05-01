import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter', // Уникальное имя слайса
  initialState, // Начальное состояние
  reducers: {
    // Здесь определяем редюсеры и действия
    increment: (state) => {
      state.value += 1; // В RTK можно напрямую изменять состояние (благодаря Immer)
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // payload - передаваемые данные
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Экспортируем генераторы действий (action creators)
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

// Экспортируем редюсер
export default counterSlice.reducer;