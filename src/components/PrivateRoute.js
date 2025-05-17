// Импортируем необходимые компоненты
import { Navigate } from 'react-router-dom'; // Компонент для перенаправления
import { auth } from '../firebase'; // Объект аутентификации Firebase

// Компонент PrivateRoute принимает дочерние элементы (children)
const PrivateRoute = ({ children }) => {
  // Получаем текущего пользователя из Firebase Auth
  const user = auth.currentUser;
  
  // Если пользователь существует, рендерим дочерние элементы,
  // иначе перенаправляем на страницу входа
  return user ? children : <Navigate to="/signin" />;
};

// Экспортируем компонент для использования в других частях приложения
export default PrivateRoute;