// Импорт стилей
import './App.css';
import React, { useState } from 'react';
// Импорт компонентов
import Mycomponent from './mycomponent-roolkit/my-slices';
import UserProfile from './thunk/component-thunk';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Добавлен Link
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Home from './components/Home'; // Один импорт Home
import Mycounter from './components/counter';
import MyModal from './components/modal';

// Импорты из reactnew
import LessonOne from './reactnew/Lesson-one/lesson-one';
import LessonToo from './reactnew/Lesson-too/lessonToo';
import MassageRobot from './reactnew/Lesson-too/massageRobot';
import Massage from './reactnew/Lesson-too/my-massage';
import LesssonThree from './reactnew/lesson-three/lesson-three';
import LessonFO from './reactnew/Lesson-fo/lessonFo';
import About from './reactnew/Lesson-fo/About'; // Убран дублирующий импорт Home
import LessonFive from './reactnew/lesson-five/lessonFive';
import { LessonProvider } from './reactnew/lesson-five/LessonContext';


function App() {
  const theme = 'light';
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
     <LessonProvider>
    <div className="App">


     

<LessonFive></LessonFive>















      {/* ОДИН Router на всё приложение */}
      <Router>
        <AuthProvider>
          {/* Навигация */}
          <div className="app">
            <nav className="navigation">
              <h1>Мое приложение</h1>
              <ul className="nav-links">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/signup">Регистрация</Link></li>
                <li><Link to="/signin">Вход</Link></li>
                <li><Link to="/profile">Профиль</Link></li>
              </ul>
            </nav>

            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
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
            </main>
          </div>

          {/* Остальной контент */}
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

          {/* Модальные окна */}
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

          {/* Другие компоненты */}
          <div style={{ border: '2px solid red', padding: '10px', margin: '10px' }}>
            <LessonOne name={"ROM"} age={30} theme={theme} />
          </div>

          <LesssonThree />
          <Massage />
          <MassageRobot />
          <LessonToo data={'priv'} />
          
          <Mycounter />
          <MyModal />
          <Mycomponent />
          <UserProfile />

        </AuthProvider>
      </Router>
    </div>
    </LessonProvider>
  );
}

export default App;