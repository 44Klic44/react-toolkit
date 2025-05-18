// Импортируем необходимые зависимости
import React, { useState } from 'react'; // useState - хук для управления состоянием
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Функция Firebase для регистрации по емаил и паролю
import { auth } from '../firebase'; // Наш инициализированный объект аутентификации в файле firebase.js
import { useNavigate } from 'react-router-dom'; // Хук из react-router-dom для программного перехода между страницами.

// Создаем функциональный компонент SignUp
const SignUp = () => {
  // Состояние для хранения email пользователя
  const [email, setEmail] = useState('');
  // Состояние для хранения пароля пользователя
  const [password, setPassword] = useState('');
  // Состояние для хранения ошибок (если они возникнут)
  const [error, setError] = useState('');
  
  // Функция для навигации, полученная из хука useNavigate.
  const navigate = useNavigate();





  // Обработчик отправки формы асинхронная функция
  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы  (перезагрузку страницы).
    setError(''); // Сбрасываем ошибки перед каждой попыткой регистрации

    // try/catch: Блок для обработки асинхронной операции регистрации.
    try {
      // Пытаемся создать нового пользователя с помощью Firebase
      // createUserWithEmailAndPassword: Вызов Firebase API для регистрации.
      // auth: наш инициализированный объект Firebase Auth
      // email: из состояния компонента
      // password: из состояния компонента
      await createUserWithEmailAndPassword(auth, email, password);
      
      // Если регистрация успешна, перенаправляем пользователя на страницу профиля
      navigate('/profile');
    } catch (err) {
      // Если возникла ошибка, сохраняем ее в состоянии
      setError(err.message);
      // Также выводим ошибку в консоль для отладки
      console.error('Ошибка регистрации:', err);
    }
  };





  // Возвращаем JSX разметку для рендеринга компонента
  return (
    <div>
      <h2>Регистрация</h2>
      
      {/* Если есть ошибка, показываем ее пользователю */}
      {/*error && : Условный рендеринг - показывает ошибку только если она есть. если error = true */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {/* Форма для регистрации */}
      {/*  При отправке формы вызывается handleSubmit. */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email" // Указываем тип поля как email
            value={email} // Привязываем значение к состоянию
            onChange={(e) => setEmail(e.target.value)} // Обновляем состояние при изменении
            required // Поле обязательно для заполнения
          />
        </div>
        
        <div>
          <label>Пароль:</label>
          <input
            type="password" // Тип поля - пароль (текст скрывается)
            value={password} // Привязываем значение к состоянию
            onChange={(e) => setPassword(e.target.value)} // Обновляем состояние
            required // Поле обязательно
          />
        </div>
        
        {/* Кнопка для отправки формы */}
        {/* Кнопка с type="submit": По умолчанию отправляет форму, в которой находится */}
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

// Экспортируем компонент для использования в других частях приложения
export default SignUp;


// Полный цикл работы компонента
// Пользователь вводит email и пароль

// При нажатии кнопки вызывается handleSubmit

// Форма предотвращает стандартное поведение (перезагрузку)

// Firebase пытается зарегистрировать пользователя

// При успехе - переход на /profile

// При ошибке - показ сообщения об ошибке