// Импортируем необходимые хуки из React
import { createContext, useContext, useEffect, useState } from 'react';
// Импортируем объект аутентификации из Firebase
import { auth } from '../firebase';

// Создаем контекст аутентификации
const AuthContext = createContext();

// Кастомный хук для удобного доступа к контексту
export function useAuth() {
  return useContext(AuthContext);
}

// Провайдер контекста аутентификации
export function AuthProvider({ children }) {
  // Состояние для хранения текущего пользователя
  const [currentUser, setCurrentUser] = useState(null);
  // Состояние для отслеживания загрузки данных аутентификации
  const [loading, setLoading] = useState(true);

  // Эффект для подписки на изменения состояния аутентификации
  useEffect(() => {
    // Подписываемся на изменения состояния аутентификации
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // user будет содержать данные пользователя или null, если не авторизован
      setCurrentUser(user);
      // Устанавливаем loading в false после получения данных
      setLoading(false);
    });

    // Функция отписки при размонтировании компонента
    return unsubscribe;
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только при монтировании

  // Значение, которое будет доступно через контекст
  const value = {
    currentUser, // Текущий пользователь (или null)
    loading      // Состояние загрузки (true/false)
  };

  // Рендерим провайдер контекста
  return (
    <AuthContext.Provider value={value}>
      {/* Рендерим children только после завершения загрузки */}
      {!loading && children}
    </AuthContext.Provider>
  );
}