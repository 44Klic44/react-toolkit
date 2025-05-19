// Импорт стилей
import './App.css';

// Импорт компонентов
// import Counter from './component'; // Компонент счетчика
import Mycomponent from './mycomponent-roolkit/my-slices'; // Компонент с Redux Toolkit
import UserProfile from './thunk/component-thunk'; // Компонент с Redux Thunk

// Импорт роутинга и компонентов аутентификации
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp'; // Форма регистрации
import SignIn from './components/SignIn'; // Форма входа
import Profile from './components/Profile'; // Защищенный профиль
import PrivateRoute from './components/PrivateRoute'; // Защищенный маршрут
import { AuthProvider } from './context/AuthContext'; // Провайдер аутентификации
import Home from './components/Home'; // Домашняя страница

// Основной компонент приложения
function App() {
  return (
    <div className="App">
      {/* Простые компоненты для демонстрации */}
      {/* <Counter></Counter> */}
      {/* <Mycomponent></Mycomponent>
      <UserProfile></UserProfile> */}
      
      {/* Настройка роутинга приложения */}
      <Router>
        {/* Оборачиваем приложение в провайдер аутентификации */}
        <AuthProvider>
          {/* Система маршрутов */}
          <Routes>
            {/* Главная страница */}
            <Route path="/" element={<Home />} />
            
            {/* Страница регистрации */}
            <Route path="/signup" element={<SignUp />} />
            
            {/* Страница входа */}
            <Route path="/signin" element={<SignIn />} />
            
            {/* Защищенный маршрут профиля */}
            <Route
              path="/profile"
              element={
                // компонент обертка только для авторизованных пользователей
                <PrivateRoute>
                  {/* все компоненты внутри profile после входа в личный кабинет */}
                  <Profile />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;