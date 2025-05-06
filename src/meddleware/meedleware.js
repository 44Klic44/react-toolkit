
// 2. Создание и подключение кастомного middleware
const customLogger = (store) => (next) => (action) => {
    // 1. Выводим сообщение, что middleware сработал
    console.log('Middleware работает!'); 

    // 2. Группируем логи по типу action (удобно для чтения)
    console.group(action.type); 

    // 3. Логируем текущее состояние ДО обновления
    console.log('текущее состояние ДО обновления:', store.getState()); 

    // 4. Логируем сам action (что передали в dispatch)
    console.log('сам action (что передали в dispatch):', action); 
    
    // 5. Пропускаем action дальше по цепочке middleware → редюсеру
    const result = next(action); 
    
    // 6. Логируем новое состояние ПОСЛЕ обновления
    console.log('новое состояние ПОСЛЕ обновления:', store.getState()); 
    
    // 7. Закрываем группу в консоли
    console.groupEnd(); 
    
    // 8. Возвращаем результат (обычно это тот же action)
    return result;
};
  
  export default customLogger;

