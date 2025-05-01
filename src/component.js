import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from './counter';

export function Counter() {
  // Получаем значение из хранилища
  const count = useSelector((state) => state.counter.value);
  // Получаем функцию dispatch для отправки действий
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;