import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Подписываемся на изменения состояния аутентификации
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // Если пользователь не аутентифицирован, перенаправляем на вход
        navigate('/signin');
      }
    });

    // Отписываемся при размонтировании компонента
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Ошибка при выходе:', err);
    }
  };

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h2>Профиль пользователя</h2>
      <p>Email: {user.email}</p>
      <p>ID пользователя: {user.uid}</p>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};

export default Profile;