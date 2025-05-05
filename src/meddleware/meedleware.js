
// 2. Создание и подключение кастомного middleware

const customLogger = (store) => (next) => (action) => {
    console.log('Middleware работает!'); // Добавьте эту строку
    console.group(action.type);
    console.log('Current state:', store.getState());
    console.log('Action:', action);
    
    const result = next(action);
    
    console.log('New state:', store.getState());
    console.groupEnd();
    
    return result;
  };
  
  export default customLogger;