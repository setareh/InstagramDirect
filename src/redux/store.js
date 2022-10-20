import { configureStore } from '@reduxjs/toolkit';
import friendReducer from "./slices/user"
// import messageReducer from "./slices/message"
import chatMsgReducer from './slices/chatMsg';

export const store = configureStore({
    reducer: {
        friend: friendReducer,
        // message: messageReducer,
        chat: chatMsgReducer,
    },
});