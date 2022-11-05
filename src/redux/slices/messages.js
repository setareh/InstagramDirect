import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[]
}

export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        ADD_MESSAGE: (state,action) => {
            if(state.value[action.payload.id]){
                state.value[action.payload.id].push(action.payload);
            }else{
                state.value[action.payload.id] = [action.payload]
            }        
        }
    }
})

export const  { ADD_MESSAGE } = messageSlice.actions
export default messageSlice.reducer