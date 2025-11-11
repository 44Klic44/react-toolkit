import React, { useState } from "react";

// Интерфейс (типы) для пропсов компонента
// TypeScript будет проверять, что все переданные пропсы соответствуют этим типам
interface LessonOneProps {
  name: string;        // имя должно быть строкой
  age: number;         // возраст должен быть числом
  theme: 'dark' | 'light'; // тема может быть только 'dark' или 'light' (литеральный тип)
}

// Основной функциональный компонент
// Принимает пропсы с типами из LessonOneProps
function LessonOne({ name, age, theme }: LessonOneProps) {
  // useState для управления состоянием возраста
  // <number> - generic тип, указывает что состояние может хранить только числа
  const [currentAge, setCurrentAge] = useState<number>(age);
  
  // Состояние для отображения/скрытия сообщения об ошибке
  // <boolean> - может быть только true или false
  const [showError, setShowError] = useState<boolean>(false);

  // Обработчик клика по кнопке "Попробовать передать строку"
  const handleChangeToString = () => {
    // Показываем сообщение об ошибке
    setShowError(true);
    
    // ЗАКОММЕНТИРОВАННЫЙ КОД - пример того, что НЕЛЬЗЯ сделать:
    // setCurrentAge("25"); 
    // TypeScript выдаст ошибку: 
    // "Type 'string' is not assignable to type 'number'"
    // Это защита от неправильного типа данных
    
    // Выводим ошибку в консоль для демонстрации
    console.error("TypeScript Error: Type 'string' is not assignable to type 'number'");
    
    // Автоматически скрываем сообщение об ошибке через 3 секунды
    setTimeout(() => setShowError(false), 3000);
  };

  // Обработчик клика по кнопке "Увеличить возраст"
  const handleIncrementAge = () => {
    // Корректное обновление состояния - передаем число
    // prevAge автоматически типизирован как number благодаря generic типу useState<number>
    setCurrentAge(prevAge => prevAge + 1);
  };

  // Возвращаем JSX разметку компонента
  return(   
    <div style={{ 
      // Динамические стили в зависимости от темы
      color: theme === 'dark' ? 'blue' : 'red',
      padding: '20px',
      border: '1px solid #ccc',
      margin: '10px',
      borderRadius: '5px'
    }}>
      {/* Отображаем имя из пропсов */}
      <p className="name">УРОК 1 ПРИВЕТ, {name}</p>
      
      {/* Отображаем текущий возраст и его тип */}
      <p>Возраст: <strong>{currentAge}</strong></p>
      <p>Тип возраста: <strong>{typeof currentAge}</strong></p>
      
      {/* Контейнер для кнопок */}
      <div style={{ marginTop: '15px' }}>
        {/* Кнопка для увеличения возраста - работает корректно */}
        <button 
          onClick={handleIncrementAge}
          style={{
            margin: '5px',
            padding: '8px 16px',
            backgroundColor: '#4CAF50', // зеленый цвет - все ок
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Увеличить возраст (+1)
        </button>
        
        {/* Кнопка для демонстрации ошибки типа */}
        <button 
          onClick={handleChangeToString}
          style={{
            margin: '5px',
            padding: '8px 16px',
            backgroundColor: '#f44336', // красный цвет - будет ошибка
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Попробовать передать строку (ошибка TypeScript)
        </button>
      </div>

      {/* Условный рендеринг сообщения об ошибке */}
      {/* showError && ... - если showError true, то показываем div */}
      {showError && (
        <div style={{
          marginTop: '10px',
          padding: '10px',
          backgroundColor: '#ffebee', // светло-красный фон
          border: '1px solid #f44336',
          borderRadius: '4px',
          color: '#d32f2f'
        }}>
          ⚠️ Ошибка TypeScript: Проп 'age' ожидает тип number, но получен string
        </div>
      )}

      {/* Информационная панель о типах пропсов */}
      <div style={{ 
        marginTop: '15px', 
        padding: '10px', 
        backgroundColor: '#e3f2fd', // светло-голубой фон
        borderRadius: '4px',
        fontSize: '14px'
      }}>
        <strong>Типы пропсов:</strong>
        {/* Список ожидаемых типов */}
        <ul style={{ textAlign: 'left', margin: '10px 0' }}>
          <li><code>name: string</code></li>           {/* строка */}
          <li><code>age: number</code></li>            {/* число */}
          <li><code>theme: 'dark' | 'light'</code></li> {/* конкретные значения */}
        </ul>
      </div>
    </div>    
  );
}

export default LessonOne;