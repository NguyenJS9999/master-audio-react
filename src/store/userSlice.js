import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  errorMessage: '',
  isAuthenticated: false,
  isLoading: false,
};

// Fetch API
export const login = createAsyncThunk('user/login', async (data) => {
  const response = await fetch(
    'https://fake-rest-api-nodejs.herokuapp.com/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  if (response.status !== 200 && response.status !== 400) {
    throw Error('Cannot connect to server!');
  }

  const jsonData = await response.json();
  return jsonData;
});

// Config slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    // Start login request
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });

    // Request successful
    builder.addCase(login.fulfilled, (state, action) => {
      const responseData = action.payload;

      state.isLoading = false;

      if (responseData.token) {
        state.isAuthenticated = true;
        state.currentUser = responseData;
      } else {
        state.errorMessage = responseData.message;
      }
    });

    // Request error
    builder.addCase(login.rejected, (state, action) => {
      state.errorMessage = action.error.message;
    });
  },
});

// Export actions
export const { logout } = userSlice.actions;

// Select state currentUser from slice
export const selectUser = (state) => state.user.currentUser;
export const selectLoading = (state) => state.user.isLoading;
export const selectAuthenticated = (state) => state.user.isAuthenticated;
export const selectErrorMessage = (state) => state.user.errorMessage;

// Export reducer
export default userSlice.reducer;
