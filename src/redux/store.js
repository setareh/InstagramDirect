import { configureStore } from '@reduxjs/toolkit';
import friendReducer from "./slices/user"
import messageReducer from './slices/messages'
import userProfileReducer from './slices/userProfile'


export const store = configureStore({
    reducer: {
        friend: friendReducer,
        message: messageReducer,
        userprofile: userProfileReducer,   
    },
});