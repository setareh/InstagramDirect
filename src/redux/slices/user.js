import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    id: 0,
    friends: [],
    loading: false
}

export const getFriends = createAsyncThunk("friends/getFriends", async() => {
   try{
    const response = await axios({
        url: "http://localhost:9000/profile",
        method: "GET"
    })
    return (response.data.friends)
   }catch(error){
        console.log(error);
   }
})




export const friendSlice = createSlice({
    name: 'friend',
    initialState,
    extraReducers: {
        [getFriends.pending]: (state,action) => {
            state.loading = true
        },
        [getFriends.fulfilled]: (state, action) => {
            state.loading = false
            state.friends = action.payload
        },
        [getFriends.rejected]: (state,action) => {
            state.loading = false
        }
    }
})


export default friendSlice.reducer
