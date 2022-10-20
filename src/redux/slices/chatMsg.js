import { craeteSlice, createSlice } from '@reduxjs/toolkit';

import { DataBase } from '../../db'

const initialState ={
    value: []
}

export const chatMsg = createSlice({
    name: "message",
    initialState,
    reducer: {
        addMsg: (state, action) => {
            // console.log(state.value)
            state.value.push(action.Payload); 
        }
    }
})

export const { addMsg } = chatMsg.actions;
export default chatMsg.reducer;
