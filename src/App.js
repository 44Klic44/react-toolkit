// Импорт стилей
import './App.css';

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

function App() {
  const theme = 'light'; // Исправлено: должно быть 'dark' или 'light'

  // УБЕРИТЕ ЭТОТ console.log - он вызывает ошибку
  // console.log(<LessonOne name = {"ROM"} age = {30}></LessonOne>)

  return (
    <div className="App">
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