import React, { useState } from "react";

function MassageRobot() {
  // Создаем состояния для хранения данных
  // useState - это хук React для управления состоянием компонента
  const [inputName, setInputName] = useState('');     // Для хранения имени
  const [inputPhone, setInputPhone] = useState('');   // Для хранения телефона
  const [message, setMessage] = useState('');         // Для хранения сообщения от робота

  // Функция, которая выполняется при нажатии кнопки "Отправить"
  const handleSend = () => {
    // Проверяем, что оба поля заполнены (убираем пробелы и проверяем длину) trim() убирает пробелы в начале и конце строки
    if (inputName.trim() && inputPhone.trim()) {
      // Если оба поля заполнены, формируем сообщение
      setMessage(`Здравствуйте, ${inputName}! Ваш телефон: ${inputPhone}`);
    } else {
      // Если какое-то поле пустое, показываем сообщение об ошибке
      setMessage('Пожалуйста, заполните все поля');
    }
  };

  // Функция для очистки всех полей
  const handleReset = () => {
    setInputName('');     // Очищаем поле имени
    setInputPhone('');    // Очищаем поле телефона
    setMessage('');       // Очищаем сообщение
  };

  return (
    <div style={{ padding: '20px', maxWidth: '100%' }}>
      
      {/* Поле для ввода имени */}
      <div>
        <input 
          className="name" 
          placeholder="Ваше имя"                    // Текст-подсказка внутри поля
          value={inputName}                         // Связываем значение с состоянием inputName
          onChange={(e) => setInputName(e.target.value)} // При изменении текста обновляем состояние
          // e.target.value - это текущее значение в поле ввода
        />
      </div>
      
      {/* Поле для ввода телефона */}
      <div style={{ marginTop: '10px' }}>
        <input 
          className="phone" 
          placeholder="Ваш телефон"
          value={inputPhone}
          onChange={(e) => setInputPhone(e.target.value)}
        />
      </div>
      
      {/* Кнопки управления */}
      <div style={{ marginTop: '10px' }}>
        {/* Кнопка отправки - вызывает функцию handleSend при клике */}
        <button onClick={handleSend} style={{ marginRight: '10px' }}>
          Отправить
        </button>
        
        {/* Кнопка сброса - вызывает функцию handleReset при клике */}
        <button onClick={handleReset}>
          Сбросить
        </button>
      </div>
      
      {/* Блок для отображения сообщения от робота */}
      {/* message && ... - это условный рендеринг: 
          если message не пустой, то показываем div */}
      {message && (
        <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          border: '1px solid #ccc',
          backgroundColor: '#f9f9f9'
        }}>
          <strong>Ответ робота:</strong> {message}
        </div>
      )}
    </div>
  );
}

export default MassageRobot;