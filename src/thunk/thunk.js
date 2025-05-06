import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserData = createAsyncThunk(
  'users/fetchById', // Префикс для генерации типов actions
  async (userId, thunkAPI) => {
    try {
      // Реальный запрос к JSONPlaceholder API
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      
      if (!response.ok) {
        // Если статус ответа не в диапазоне 200-299
        throw new Error(`Server responded with status ${response.status}`);
      }
      
      const userData = await response.json();
      return userData; // Это станет payload для fulfilled action
    } catch (error) {
      // Обработка ошибок
      return thunkAPI.rejectWithValue({
        message: error.message,
        userId: userId // Добавляем ID пользователя для контекста ошибки
      });
    }
  }
);