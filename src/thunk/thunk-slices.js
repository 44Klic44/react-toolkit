import { createSlice } from '@reduxjs/toolkit';
import { fetchUserData } from './thunk'; //наша асинхронная функция

// Создание Slice
const userSlice = createSlice({
  name: 'user',

// Определяем начальное состояние:
// currentUser - null (пока нет данных о пользователе)
// loading - строка с возможными значениями:
// 'idle' - начальное состояние, запрос ещё не отправлялся
// 'pending' - запрос выполняется
// 'succeeded' - запрос успешно завершён
// 'failed' - запрос завершился ошибкой
// error - null (пока нет ошибок)
  initialState: {
    currentUser: null,
    loading: 'idle', // 'idle' | 'pending' | 'succeeded' | 'failed'
    error: null
  },


  reducers: {},

// Обработка асинхронных действий
// Что такое extraReducers?
// Это свойство в createSlice, которое позволяет:
// Реагировать на action'ы, которые были созданы вне этого slice (например, асинхронные thunk'и)
// Параметр builder - это callback-аргумент
// Первый builder - это параметр функции:
// javascript
// (builder) => {
//   // Здесь builder - это объект, переданный Redux Toolkit
// }
// Второй builder - начало цепочки вызовов:
// javascript
// builder
//   .addCase(...)  // Первый обработчик
//   .addCase(...)  // Второй обработчик
  extraReducers: (builder) => {
    
    //начало цепочки вызовов кейсов action
    builder
    // state - это текущее состояние вашего Redux-слайса. В нашем случае это объект:
    // Когда Redux вызывает редюсер, он передаёт ему:
    // Текущее состояние (state)
    // Объект действия (action)

    // fetchUserData.pending, - 
    // Это специальный action, который автоматически генерируется createAsyncThunk:
    // fetchUserData.pending - action, который вызывается перед началом асинхронного запроса
    // fetchUserData.fulfilled - при успешном завершении
    // fetchUserData.rejected - при ошибке
      .addCase(fetchUserData.pending, (state) => { 

        // Это изменение состояния загрузки:
        // запрос начался, ждём ответ
        state.loading = 'pending';
        state.error = null; // Очищаем предыдущие ошибки
      })



      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.currentUser = action.payload;
      })


      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = 'failed';
        // Используем payload из rejectWithValue
        state.error = action.payload?.message || 'Failed to fetch user';
      });
  }
});

export default userSlice.reducer;