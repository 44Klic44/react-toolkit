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

// ВРЕМЕННО ЗАКОММЕНТИРУЙТЕ ПРОБЛЕМНЫЕ ИМПОРТЫ:
// import Mytestcomponnt from './training/trenirovka';
// import MyMaterialComponent from './training/component-materialui';
// import IconExample from './training/button-materialui';
// import ProductCard from './training/propstype';

// ИСПРАВЛЕННЫЕ ИМПОРТЫ - ВСПОМИНАЮ РЕАКТ → reactnew
import LessonOne from './reactnew/Lesson-one/lesson-one';
import LessonToo from './reactnew/Lesson-too/lessonToo';
// import Calculator from './reactnew/Lesson-too/Calc'; // Временно закомментируйте
import MassageRobot from './reactnew/Lesson-too/massageRobot';
import Massage from './reactnew/Lesson-too/my-massage';
// import MessageToo from './reactnew/Lesson-too/my-massage';
import LesssonThree from './reactnew/lesson-three/lesson-three';


// Основной компонент приложения
function App() {
  const theme ='d'

  console.log(<LessonOne name = {"ROM"} age = {30}></LessonOne>)
  
  return (
    <div className="App">
      <LesssonThree></LesssonThree>
      {/* <MessageToo></MessageToo> */}
      <Massage></Massage>
      <MassageRobot></MassageRobot>

      <LessonOne name = {"ROM"} age = {30} theme = {theme}></LessonOne>
      <LessonToo data={'priv'}></LessonToo>
      {/* <Calculator></Calculator> */}
      
      {/* Простые компоненты для демонстрации */}
      {/* <Counter></Counter> */}
      {/* <Mycomponent></Mycomponent>
      <UserProfile></UserProfile> */}
      <Mycounter></Mycounter>
      <MyModal></MyModal>
      
      {/* Временно закомментируйте */}
      {/* <MyMaterialComponent></MyMaterialComponent> */}
      {/* <IconExample></IconExample> */}
      {/* <ProductCard 
        product={{
          id: '2',
          name: 'впыввыа',
          price: '1',
          discount: 10 // необязательно
        }}
      /> */}
      {/* <Mytestcomponnt  name={'ROMAN 2'} age={30}></Mytestcomponnt> */}
      
      {/* Настройка роутинга приложения */}
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
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