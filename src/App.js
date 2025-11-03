// Импорт стилей
import './App.css';

// Импорт компонентов
// import Counter from './component'; // Компонент счетчика
import Mycomponent from './mycomponent-roolkit/my-slices'; // Компонент с Redux Toolkit
import UserProfile from './thunk/component-thunk'; // Компонент с Redux Thunk
import { useSelector, useDispatch } from 'react-redux';
// Импорт роутинга и компонентов аутентификации
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp'; // Форма регистрации
import SignIn from './components/SignIn'; // Форма входа
import Profile from './components/Profile'; // Защищенный профиль
import PrivateRoute from './components/PrivateRoute'; // Защищенный маршрут
import { AuthProvider } from './context/AuthContext'; // Провайдер аутентификации
import Home from './components/Home'; // Домашняя страница
import Mycounter from './components/counter';
import MyModal from './components/modal';
import Mytestcomponnt from './ТРЕНИРОВКА/trenirovka';
import MyMaterialComponent from './ТРЕНИРОВКА/component-materialui'
import IconExample from './ТРЕНИРОВКА/button-materialui';
import ProductCard from './ТРЕНИРОВКА/propstype';
import LessonOne from './ВСПОМИНАЮ РЕАКТ/lesson-one';
// Основной компонент приложения
function App() {





console.log(<LessonOne name = {"ROM"} age = {30}></LessonOne>)
  return (
    <div className="App">
      <LessonOne name = {"ROM"} age = {30}></LessonOne>
      {/* Простые компоненты для демонстрации */}
      {/* <Counter></Counter> */}
      {/* <Mycomponent></Mycomponent>
      <UserProfile></UserProfile> */}
      <Mycounter></Mycounter>
      <MyModal></MyModal>
<MyMaterialComponent></MyMaterialComponent>
<IconExample></IconExample>
<ProductCard 
  product={{
    id: '2',
    name: 'впыввыа',
    price: '1',
    discount: 10 // необязательно
  }}
/>

      <Mytestcomponnt  name={'ROMAN 2'} age={30}></Mytestcomponnt>
      {/* Настройка роутинга приложения */}
      <Router>
        {/*  компонент контекста с данными о пользователе Оборачиваем приложение в провайдер аутентификации */}
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
                // компонент обертка только для авторизованных пользователей проверяет авторизован ли пользователь если да 
                // то рендерим то что внутри профиля
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