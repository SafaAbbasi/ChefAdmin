import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  userInfo: null,
  token: '',
  error: '',
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.userInfo = payload.userInfo;
      state.token = payload.token;
    },
    loginFailed: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    },
  },
});

const { reducer, actions } = AuthSlice;

export const { loginPending, loginSuccess, loginFailed } = actions;

export default reducer;
