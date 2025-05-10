// Функция для получения данных пользователей с обработкой ошибок
function fetchUsersData() {

  //Создание константы apiUrl, содержащей URL API для получения данных пользователей.
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
  // Использование функции fetch() для выполнения GET-запроса к указанному URL. fetch возвращает Promise.
  return fetch(apiUrl)
  //Обработка успешного ответа от сервера. response содержит объект ответа.
    .then(response => {

// Проверка статуса ответа. Если статус не в диапазоне 200-299 (response.ok = false), генерируется ошибка.
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      //Если статус успешный, преобразуем тело ответа из JSON в JavaScript-объект. 
      // Это тоже возвращает Promise.
      return response.json();

    })

  // дополнительная обработка успешного запроса к API
  // Здесь users появляется как параметр функции-колбэка, переданной в метод .then(). 
  // Этот параметр содержит результат успешного выполнения предыдущего Promise в цепочке.
    .then(users => {
      // Дополнительная обработка данных перед возвратом
      // Преобразование массива пользователей с помощью map(). 
      // Для каждого пользователя создаем новый объект.

      return users.map(user => ({
        // Каждый user - это объект, представляющий одного пользователя из исходного массива users. 
        // в users содержиться все наши пользователи после запроса к апи в user уже обьекты отфильтрованные ток с нужными полями
        // Выбираем только нужные свойства из каждого объекта пользователя, 
        // включая вложенные свойства (address.city, company.name).
        id: user.id,
        name: user.name,
        email: user.email,
        city: user.address.city,
        company: user.company.name
      }));
    
    });
      // Закрываем callback функции map и возвращаем новый массив с преобразованными данными.
}

// Пример использования с выводом красивых результатов
fetchUsersData()
  .then(processedUsers => {
    console.log('%cСписок пользователей:', 'color: #1E90FF; font-size: 16px; font-weight: bold;');
    
    processedUsers.forEach(user => {
      console.log(`%cID: ${user.id}`, 'color: #32CD32;');
      console.log(`Имя: ${user.name}`);
      console.log(`Email: ${user.email}`);
      console.log(`Город: ${user.city}`);
      console.log(`Компания: ${user.company}`);
      console.log('-----------------------');
    });
    
    // Дополнительный анализ данных
    const cities = [...new Set(processedUsers.map(user => user.city))];
    console.log('%cГорода пользователей:', 'color: #FF8C00; font-weight: bold;', cities.join(', '));
  })
  .catch(error => {
    console.error('%cОшибка при загрузке данных:', 'color: #FF0000; font-weight: bold;', error);
    
    // Можно добавить дополнительную обработку ошибок
    if (error.message.includes('Failed to fetch')) {
      console.error('Проблема с сетью или URL не доступен');
    } else if (error.message.includes('HTTP error')) {
      console.error('Проблема на стороне сервера');
    }
  })
  .finally(() => {
    console.log('%cЗапрос завершен', 'color: #9370DB; font-style: italic;');
  });