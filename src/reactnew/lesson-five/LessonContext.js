import React from 'react';

// Создаем и экспортируем контекст
const LessonContext = React.createContext();

// Создаем и экспортируем Provider для удобства
export const LessonProvider = ({ children }) => {
  return (
    <LessonContext.Provider value="Урок 5: Изучение React Context API">
      {children}
    </LessonContext.Provider>
  );
};

// Экспортируем контекст для использования в компонентах
export default LessonContext;