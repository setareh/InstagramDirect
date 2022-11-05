import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUserProfile = createAsyncThunk("userProfile/getUserProfile",
  async () => {
    try {
      const response = await axios({
        url: "http://localhost:9000/friends",
        method: "GET",
      });
      console.log("profile.js reducer", response.data);
      return (response.data);
    } catch (error) {
      console.log(error);
    }
  }
);
export const getMyProfile = createAsyncThunk("myProfile/getMyProfile", async() => {
    //return await fetch("http://localhost:9000/profile").then((res) => res.friends)
  try{
   const res = await axios({
       url: "http://localhost:9000/profile/",
       method: "GET"
   })
   console.log('res ', res.data)
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
      console.log("userprofile.js getUserProfile fulfilled", state.friends);
    },
    [getMyProfile.fulfilled]: (state, action) => {
        state.friends = action.payload;
        console.log("userprofile.js getMyProfile fulfilled", state.friends);
      },
  },
});

export default userProfileSlice.reducer;
