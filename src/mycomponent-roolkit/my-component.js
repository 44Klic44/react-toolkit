import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 100,
};


export const mySlaces = createSlice({
name: "myslaces",
initialState,
reducers: {
// Redux запрещает прямое изменение состояния (мутации), но RTK использует Immer, который:
// Перехватывает "мутации" (вроде state.value -= 1).
// Автоматически создаёт копию состояния с изменениями.
// Возвращает новое состояние, соответствующее принципам иммутабельности.
// Пример без Immer (чистый Redux):
// Пришлось бы писать так:
// javascript
// decrement: (state) => {
//   return { ...state, value: state.value - 1 }; // Возвращаем новый объект
// }
  plus: (state)=>{
    state.value += 5; 
  },
minus:(state)=>{
    state.value -= 5;
},
myincrement: (state, action) => {
    // action.payload — данные, переданные при вызове действия. которые мы указываем при нажатии кнопки
    //  при вызове мы передаем число 5 и оно плюсуеться к текущему состоянию value

    state.value += action.payload; // payload - передаваемые данные
  },
},
});

 export const {plus,minus,myincrement } = mySlaces.actions;

 export const myslscesRedicer = mySlaces.reducer;