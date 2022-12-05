import { configureStore } from '@reduxjs/toolkit';

/* reducers */
import AuthReducer from './reducers/authSlice';

export const store = configureStore({
  reducer: {
    Auth: AuthReducer,
  },
});
