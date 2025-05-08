import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// fetchUserData — асинхронный thunk-экшен, 
// который загружает данные пользователя.
import { fetchUserData } from './thunk';

// Компонент UserProfile принимает пропс userId 
// (идентификатор пользователя, данные которого нужно загрузить).
function UserProfile({ userId }) {

//dispatch для вызова action
  const dispatch = useDispatch();

// currentUser — объект с данными пользователя.
// loading — статус загрузки ('idle', 'pending', 'succeeded', 'failed').
// error — текст ошибки (если запрос не удался).
// useSelector из store достаем наши данные state.user
// эи значения мы задали в initialstate в нашем слайсе
  // initialState: {
  //   currentUser: null,
  //   loading: 'idle', // 'idle' | 'pending' | 'succeeded' | 'failed'
  //   error: null
  // },
  const { currentUser, loading, error } = useSelector(state => state.user);
  


// useEffect срабатывает при монтировании компонента и при изменении userId.
// dispatch(fetchUserData(1)) запускает асинхронный запрос за данными пользователя с userId = 1.
// Зависимости [dispatch, userId]:
// dispatch не меняется, но ESLint требует его указать.
// Если userId изменится, эффект выполнится заново.
  useEffect(() => {
    dispatch(fetchUserData(1));
  }, [dispatch, userId]);

// Если loading === 'pending' — показываем "Loading..." (данные загружаются).
// Если есть error — выводим сообщение об ошибке.
// Если currentUser отсутствует — показываем "No user data" (данные не загрузились, но и ошибки нет).
  if (loading === 'pending') return <div>загружаем данные...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!currentUser) return <div>Данные не загрузились</div>;


  //просто подставляем наши данные из обьекта с юзером
  // "id": 1,
  //   "name": "Leanne Graham",
  //   "email": "Sincere@april.biz",
  //   "address": {
  //     "street": "Kulas Light",
  //     "city": "Gwenborough",
  //   },
  //   "phone": "1-770-736-8031 x56442",
  //   "company": {
  //     "name": "Romaguera-Crona",
  //     "catchPhrase": "Multi-layered client-server neural-net",


  return (
    <div>
      <h2>{currentUser.name}</h2>
      <p>Email: {currentUser.email}</p>
      <p>Phone: {currentUser.phone}</p>
      <p>Address: {currentUser.address.street}, {currentUser.address.city}</p>
      <p>Company: {currentUser.company.name}</p>
      <p>Слоган компании: {currentUser.company.catchPhrase}</p>
    </div>
  );
}

export default UserProfile;