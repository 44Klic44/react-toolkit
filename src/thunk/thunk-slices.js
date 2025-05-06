import { createSlice } from '@reduxjs/toolkit';
import { fetchUserData } from './thunk';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    loading: 'idle', // 'idle' | 'pending' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = 'pending';
        state.error = null; // Очищаем предыдущие ошибки
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.currentUser = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = 'failed';
        // Используем payload из rejectWithValue
        state.error = action.payload?.message || 'Failed to fetch user';
      });
  }
});

export default userSlice.reducer;