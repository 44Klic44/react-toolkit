// Импорт стилей
import './App.css';
import React, { useState } from 'react';
// Импорт компонентов
import Mycomponent from './mycomponent-roolkit/my-slices';
import UserProfile from './thunk/component-thunk';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Home from './components/Home';
import Mycounter from './components/counter';
import MyModal from './components/modal';

// Импорты из reactnew
import LessonOne from './reactnew/Lesson-one/lesson-one';
import LessonToo from './reactnew/Lesson-too/lessonToo';
import MassageRobot from './reactnew/Lesson-too/massageRobot';
import Massage from './reactnew/Lesson-too/my-massage';
import LesssonThree from './reactnew/lesson-three/lesson-three';
import LessonFO from './reactnew/Lesson-fo/lessonFo';

function App() {
  const theme = 'light'; // Исправлено: должно быть 'dark' или 'light'
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  // УБЕРИТЕ ЭТОТ console.log - он вызывает ошибку
  // console.log(<LessonOne name = {"ROM"} age = {30}></LessonOne>)

  return (
    <div className="App">
<h1>УРОК 4 модальное окно и роутеры</h1>
<div style={{ padding: '20px' }}>
        <button onClick={() => setIsInfoModalOpen(true)}>
          Открыть информационную модалку
        </button>
        
        <button onClick={() => setIsFormModalOpen(true)}>
          Открыть модалку с формой
        </button>
        
        <button onClick={() => setIsImageModalOpen(true)}>
          Открыть модалку с изображением
        </button>
      </div>

      <LessonFO 
        isOpen={isInfoModalOpen} 
        onClose={() => setIsInfoModalOpen(false)}
      >
        <h2>Информация</h2>
        <p>Это простая информационная модалка с текстом</p>
        <button onClick={() => setIsInfoModalOpen(false)}>
          Закрыть
        </button>
      </LessonFO>

       {/* 2. Модалка с формой */}
      <LessonFO 
        isOpen={isFormModalOpen} 
        onClose={() => setIsFormModalOpen(false)}
      >
        <h2>Форма обратной связи</h2>
        <form>
          <input type="text" placeholder="Ваше имя" style={{ margin: '5px', padding: '8px' }} />
          <br />
          <input type="email" placeholder="Email" style={{ margin: '5px', padding: '8px' }} />
          <br />
          <textarea placeholder="Сообщение" rows="4" style={{ margin: '5px', padding: '8px', width: '100%' }} />
          <br />
          <button type="submit">Отправить</button>
        </form>
      </LessonFO>

      {/* 3. Модалка с изображением */}
      <LessonFO 
        isOpen={isImageModalOpen} 
        onClose={() => setIsImageModalOpen(false)}
      >
        <h2>Изображение</h2>
        <img 
          src="https://via.placeholder.com/400x200" 
          alt="Пример" 
          style={{ width: '100%', height: 'auto' }}
        />
        <p>Описание изображения</p>
      </LessonFO>
      {/* Проверьте порядок - сначала простые компоненты */}
      
      {/* Тестируем LessonOne отдельно */}
      <div style={{ border: '2px solid red', padding: '10px', margin: '10px' }}>
        <LessonOne name={"ROM"} age={30} theme={theme} />
      </div>

      {/* Остальные компоненты */}
      <LesssonThree />
      <Massage />
      <MassageRobot />
      <LessonToo data={'priv'} />
      
      <Mycounter />
      <MyModal />

      {/* Роутинг */}
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