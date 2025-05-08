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

    // fetchUserData.pending, -fulfilled -rejected
    // Это специальные action, которые автоматически генерируется createAsyncThunk:
    // fetchUserData.pending - action, который вызывается перед началом асинхронного запроса
      .addCase(fetchUserData.pending, (state) => { 

        // Это изменение состояния загрузки:
        // запрос начался, ждём ответ
        state.loading = 'pending';
        state.error = null; // Очищаем предыдущие ошибки
      })


  // fetchUserData.fulfilled - вызываеться при успешном завершении запроса
  // action – объект действия, который содержит данные (в payload), возвращённые из fetchUserData.
      .addCase(fetchUserData.fulfilled, (state, action) => {
// Обновляем статус загрузки
//state.loading = 'succeeded' – меняет состояние loading на 'succeeded', 
// что означает успешное завершение запроса.
// Обычно loading может быть:
// 'idle' – запрос не начат.
// 'pending' – запрос в процессе.
// 'succeeded' – запрос успешно завершён.
// 'failed' – запрос завершился ошибкой.
        state.loading = 'succeeded';
        // // записываем данные из action.payload
        // state.currentUser мы создаем initilstate
        state.currentUser = action.payload;
      })

   // fetchUserData.rejected - при ошибке
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = 'failed';
        // Используем payload из rejectWithValue
// Пытается получить action.payload.message (если payload существует).
// Если message нет или payload отсутствует, то записывает строку 'Что-то пошло не так'.
// Результат сохраняет в state.error (поле состояния Redux, отвечающее за ошибку).
        state.error = action.payload?.message || 'Что то пошло не так';
      });
  }
});

export default userSlice.reducer;