import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice/loginSlice'; // Path to your loginSlice

const store = configureStore({
  reducer: {
    login: loginReducer, // Assuming loginReducer handles login state
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // This will give the correct type for dispatch

export default store;
