// Импорт необходимых зависимостей
import React, { useEffect, useState } from 'react'; // Хуки React
import { auth } from '../firebase'; // Объект аутентификации Firebase
import { signOut } from 'firebase/auth'; // Функция выхода из системы
import { useNavigate } from 'react-router-dom'; // Хук для навигации

import Mycomponent from '../mycomponent-roolkit/my-slices'; // Компонент с Redux Toolkit
import UserProfile from '../thunk/component-thunk'; // Компонент с Redux Thunk


// Компонент профиля пользователя
const Profile = () => {
  // Состояния компонента:
  const [user, setUser] = useState(null); // Для хранения данных пользователя
  const navigate = useNavigate(); // Получаем функцию навигации

  // Эффект для отслеживания состояния аутентификации
  useEffect(() => {
    // Подписываемся на изменения состояния аутентификации
    // onAuthStateChanged возвращает функцию отписки
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // Если пользователь аутентифицирован:
        setUser(currentUser); // Сохраняем данные пользователя в состояние
      } else {
        // Если пользователь не аутентифицирован:
        navigate('/signin'); // Перенаправляем на страницу входа
      }
    });

    // Функция очистки эффекта (выполняется при размонтировании компонента)
    return () => unsubscribe(); // Отписываемся от отслеживания изменений
  }, [navigate]); // Зависимости эффекта (navigate не изменяется, но ESLint требует его указания)

  // Обработчик выхода из системы
  const handleLogout = async () => {
    try {
      await signOut(auth); // Вызываем функцию выхода Firebase
      // После выхода onAuthStateChanged автоматически сработает и перенаправит на /signin
    } catch (err) {
      console.error('Ошибка при выходе:', err); // Логируем ошибку, если выход не удался
    }
  };

  // Если данные пользователя еще не загружены, показываем заглушку
  if (!user) {
    return <div>Загрузка...</div>;
  }

  // Рендер профиля пользователя
  return (
    <div>
 {/* Простые компоненты для демонстрации */}
    
      <Mycomponent></Mycomponent>
      <UserProfile></UserProfile>

      <h2>Профиль пользователя</h2>
      {/* Отображаем email пользователя */}
      <p>Email: {user.email}</p>
      {/* Отображаем уникальный идентификатор пользователя */}
      <p>ID пользователя: {user.uid}</p>
      {/* Кнопка выхода */}
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};

// Экспорт компонента
export default Profile;