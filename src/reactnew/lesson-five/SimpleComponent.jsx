// Импортируем необходимые зависимости
import React from 'react';
// useSelector - хук для получения данных из Redux store
// useDispatch - хук для отправки actions в Redux store
import { useSelector, useDispatch } from 'react-redux';
// Импортируем actions и селекторы из нашего slice файла
import { 
  increment, 
  decrement, 
  incrementByAmount, 
  reset,
  selectValue 
} from './simpleSlice';

// Создаем функциональный React компонент
export function SimpleComponent() {
  // useSelector - получаем текущее значение из Redux store
  // selectValue - это селектор, который берет value из состояния simple
  // При каждом изменении value в store компонент будет автоматически перерисовываться
// 2. Использовали его чтобы получить данные точеный селектор с запросом к определнным данным из store
// const value = useSelector(state => state.simple.value); вариант с прямое обращение через стор

const value = useSelector(selectValue);
// ↑ Результат: value = текущее число из store (например, 5)
  
  // useDispatch - получаем функцию dispatch для отправки actions
  const dispatch = useDispatch();

  // Возвращаем JSX разметку компонента
  return (
    <div>
      {/* Отображаем текущее значение счетчика */}
      <h2>Simple Counter: {value}</h2>
      
      {/* Кнопка увеличения на 1 */}
      {/* При клике dispatch отправляет action increment() в store */}
      <button onClick={() => dispatch(increment())}>+</button>
      
      {/* Кнопка уменьшения на 1 */}
      {/* При клике dispatch отправляет action decrement() в store */}
      <button onClick={() => dispatch(decrement())}>-</button>
      
      {/* Кнопка увеличения на 5 */}
      {/* incrementByAmount(5) создает action с payload = 5 */}
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      
      {/* Кнопка сброса счетчика */}
      {/* reset() сбрасывает значение в initialState */}
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}