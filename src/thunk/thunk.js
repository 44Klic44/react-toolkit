// createAsyncThunk — это функция из Redux Toolkit, 
import { createAsyncThunk } from '@reduxjs/toolkit';

// Создание асинхронного Thunk-действия fetchUserData
export const fetchUserData = createAsyncThunk(

// Это строка, которая служит префиксом для автоматически генерируемых Redux actions
// users/fetchById/pending — запрос начался,
// users/fetchById/fulfilled — запрос успешен,
// users/fetchById/rejected — запрос завершился ошибкой.
  'users/fetchById', // Префикс для генерации типов actions

// Асинхронная функция (payload creator)
// Функция принимает:
// userId — аргумент, переданный при вызове fetchUserData(userId),
// thunkAPI — объект с полезными методами (например, dispatch, getState, rejectWithValue).
  async (userId, thunkAPI) => {

    // Блок try — попытка выполнить запрос
    try {

      // fetch делает GET-запрос к API, передавая userId в URL.
      // await ждёт, пока запрос завершится.
      // Реальный запрос к JSONPlaceholder API
      //запрос по конкретному id пользователя чтобы не загружать всех пользователей ${userId}
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

      // response.ok — true, если статус ответа в диапазоне 200-299 (успешный запрос).
      // Если статус не успешный (например, 404 или 500), генерируется ошибка с сообщением.
      // Проверка статуса ответа
      if (!response.ok) {

        // throw — это оператор в JavaScript, который прерывает нормальное выполнение программы и генерирует (или "прокидывает") ошибку.
        // new Error() — создание объекта ошибки
        // ${response.status} - код ошибки
        throw new Error(`Что-то пошло не так ${response.status}`);
      }
      
      // Парсинг JSON-ответа
      // response.json() преобразует ответ в JSON (например, { id: 1, name: "John" }).
      // await ждёт завершения парсинга.
      const userData = await response.json();

      // Возврат данных (успешный случай)
      return userData; // Это станет payload для fulfilled action

// Если произошла ошибка (например, сетевой сбой или невалидный ответ), выполняется этот блок.
// thunkAPI.rejectWithValue — метод, который позволяет передать дополнительную информацию в action с ошибкой.
// Возвращаемый объект станет payload в action типа rejected:
    } catch (error) {
      // Обработка ошибок

      return thunkAPI.rejectWithValue({
        message: error.message,
        userId: userId // Добавляем ID пользователя для контекста ошибки
      });
    }
  }
);