// Импорт необходимых зависимостей
import React, { useState } from 'react'; // Импорт React и хука состояния
import { signInWithEmailAndPassword } from 'firebase/auth'; // Функция аутентификации Firebase
import { auth } from '../firebase'; // Инициализированный объект auth из Firebase
import { useNavigate } from 'react-router-dom'; // Хук для программной навигации

// Компонент входа
const SignIn = () => {
  // Состояния компонента:
  const [email, setEmail] = useState(''); // Для хранения email
  const [password, setPassword] = useState(''); // Для хранения пароля
  const [error, setError] = useState(''); // Для хранения ошибок аутентификации
  const navigate = useNavigate(); // Получаем функцию навигации

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault(); // Отменяем стандартное поведение формы
    setError(''); // Сбрасываем предыдущие ошибки
    
    try {
      // Пытаемся войти с помощью Firebase Auth
      await signInWithEmailAndPassword(auth, email, password);
      // При успешном входе перенаправляем на страницу профиля
      navigate('/profile');
    } catch (err) {
      // Обработка ошибок:
      setError(err.message); // Сохраняем сообщение об ошибке для показа пользователю
      console.error('Ошибка входа:', err); // Логируем ошибку в консоль для отладки
    }
  };

  // Рендер компонента
  return (
    <div>
      <h2>Вход</h2>
      
      {/* Блок отображения ошибок (показывается только при наличии ошибки) */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {/* Форма входа */}
      <form onSubmit={handleSubmit}>
        {/* Поле для email */}
        <div>
          <label>Email:</label>
          <input
            type="email" // Указываем тип поля
            value={email} // Привязываем значение к состоянию
            onChange={(e) => setEmail(e.target.value)} // Обновляем состояние при изменении
            required // Поле обязательно для заполнения
          />
        </div>
        
        {/* Поле для пароля */}
        <div>
          <label>Пароль:</label>
          <input
            type="password" // Текст будет скрыт точками
            value={password} // Привязываем значение к состоянию
            onChange={(e) => setPassword(e.target.value)} // Обновляем состояние
            required // Поле обязательно
          />
        </div>
        
        {/* Кнопка отправки формы */}
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

// Экспорт компонента для использования в других частях приложения
export default SignIn;