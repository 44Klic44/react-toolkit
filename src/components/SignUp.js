// Импортируем необходимые зависимости
import React, { useState } from 'react'; // useState - хук для управления состоянием
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Функция Firebase для регистрации
import { auth } from '../firebase'; // Наш инициализированный объект аутентификации
import { useNavigate } from 'react-router-dom'; // Хук для навигации между страницами

// Создаем функциональный компонент SignUp
const SignUp = () => {
  // Состояние для хранения email пользователя
  const [email, setEmail] = useState('');
  // Состояние для хранения пароля пользователя
  const [password, setPassword] = useState('');
  // Состояние для хранения ошибок (если они возникнут)
  const [error, setError] = useState('');
  
  // Хук useNavigate для программной навигации
  const navigate = useNavigate();

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы
    setError(''); // Сбрасываем ошибки перед каждой попыткой регистрации
    
    try {
      // Пытаемся создать нового пользователя с помощью Firebase
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

  // Возвращаем JSX для рендеринга компонента
  return (
    <div>
      <h2>Регистрация</h2>
      
      {/* Если есть ошибка, показываем ее пользователю */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {/* Форма для регистрации */}
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
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

// Экспортируем компонент для использования в других частях приложения
export default SignUp;