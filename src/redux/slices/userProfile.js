import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUserProfile = createAsyncThunk("userProfile/getUserProfile",
  async () => {
    try {
      const response = await axios({
        url: "http://localhost:9000/friends",
        method: "GET",
      });
      return (response.data);
    } catch (error) {
      console.log(error);
    }
  }
);
export const getMyProfile = createAsyncThunk("myProfile/getMyProfile", async() => {
  try{
   const res = await axios({
       url: "http://localhost:9000/profile/",
       method: "GET"
   })
   return (res.data)
  }catch(er){
       console.log(er);
  }
})

const initialState = {
  value: [],
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserProfile.fulfilled]: (state, action) => {
      state.friends = action.payload;
    },
    [getMyProfile.fulfilled]: (state, action) => {
        state.friends = action.payload;
      },
  },
});

export default userProfileSlice.reducer;
