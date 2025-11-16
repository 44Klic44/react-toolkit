// Импортируем createSlice из Redux Toolkit
// createSlice автоматически создает actions и reducers
import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние (initial state) для нашего slice
// Это объект, который определяет структуру данных в store
const initialState = {
  value: 0,      // числовое значение для счетчика
  status: 'idle', // статус: 'idle', 'loading', 'succeeded', 'failed'
  data: null     // поле для хранения любых данных
};
// status: 'idle'       // начальное состояние, ничего не происходит
// status: 'loading'    // данные загружаются
// status: 'succeeded'  // операция успешно завершена
// status: 'failed'     // операция завершилась ошибкой

// Создаем slice с помощью createSlice
// Slice - это коллекция reducer логики и actions для определенной фичи
export const simpleSlice = createSlice({
  // Уникальное имя для slice
  // Используется в качестве префикса для названий actions
  name: 'simple',
  
  // Начальное состояние
  initialState,
  
  // Reducers - функции, которые определяют как обновляется состояние
  // Каждая функция получает текущий state и action
  reducers: {
    // Reducer для увеличения счетчика на 1
    // action типа: { type: 'simple/increment' }
    increment: (state) => {
      // В Redux Toolkit можно напрямую мутировать состояние
      // (под капотом используется Immer для иммутабельных обновлений)
      state.value += 1;
    },
    
    // Reducer для уменьшения счетчика на 1
    // action типа: { type: 'simple/decrement' }
    decrement: (state) => {
      state.value -= 1;
    },
    
    // Reducer для увеличения счетчика на произвольное значение
    // action типа: { type: 'simple/incrementByAmount', payload: number }
    incrementByAmount: (state, action) => {
      // action.payload - данные, переданные при dispatch
      state.value += action.payload;
    },
    
    // Reducer для установки данных
    // action типа: { type: 'simple/setData', payload: any }
    setData: (state, action) => {
      state.data = action.payload;
    },
    
    // Reducer для сброса состояния к начальным значениям
    // action типа: { type: 'simple/reset' }
    reset: (state) => {
      // Можно вернуть новый объект состояния
      // или мутировать отдельные поля
      state.value = 0;
      state.data = null;
    }
  }
});

// Экспортируем actions creators
// Эти функции используются для создания actions в компонентах
// Например: dispatch(increment()) или dispatch(incrementByAmount(5))
export const { 
  increment, 
  decrement, 
  incrementByAmount, 
  setData, 
  reset 
} = simpleSlice.actions;

// Селекторы - функции для получения данных из store
// Принимают весь state и возвращают нужную часть

// Получает значение счетчика из состояния simple из глобального состояния 
// приложение читаем наш слайсе и его значение в store
export const selectValue = (state) => state.simple.value;
// ↑ Эта функция говорит: "Дай мне значение value из раздела simple"
// Получает данные из состояния simple
export const selectData = (state) => state.simple.data;

// Получает статус из состояния simple
export const selectStatus = (state) => state.simple.status;

// Экспортируем reducer для добавления в store
// Reducer обрабатывает actions и обновляет состояние
export const simpleReducer = simpleSlice.reducer;

/*
КАК ЭТО РАБОТАЕТ ВМЕСТЕ:

1. STRUCTURE:
   - initialState: { value: 0, status: 'idle', data: null }
   - actions: increment, decrement, incrementByAmount, setData, reset
   - selectors: selectValue, selectData, selectStatus

2. ACTION TYPES (автоматически генерируются):
   - 'simple/increment'
   - 'simple/decrement' 
   - 'simple/incrementByAmount'
   - 'simple/setData'
   - 'simple/reset'

3. В КОМПОНЕНТАХ:
   - dispatch(increment()) -> отправляет action
   - useSelector(selectValue) -> получает данные

4. В STORE:
   store: {
     simple: {
       value: 0,
       status: 'idle',
       data: null
     }
   }
*/