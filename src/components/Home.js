import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <h1>Добро пожаловать</h1>
      {currentUser ? (
        <p>Вы вошли как {currentUser.email}. <Link to="/profile">Перейти в профиль</Link></p>
      ) : (
        <div>
          <p>Пожалуйста, <Link to="/signin">войдите</Link> или <Link to="/signup">зарегистрируйтесь</Link></p>
        </div>
      )}
    </div>
  );
};

export default Home;