import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../services/auth/authSlice';
import chatReducer from '../services/chats/chatSlice';



export const store = configureStore({
    reducer: {
      auth: authReducer,
      chats: chatReducer
    },
})