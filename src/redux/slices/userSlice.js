//this file will contain actions and reducers related to user along with initial state
import { createSlice } from "@reduxjs/toolkit";

//create initial slice 
const initialState = {
    currentUser: null,

};
//user slice
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //action to set user data in redux store
        loginSuccessful : (state, action) => {
            //modify the initial state
            state.currentUser = action.payload;

        }, 
    }
});
//export the action to be used in components
export const { loginSuccessful } = userSlice.actions;
//export the reducer to be used in store
export default userSlice.reducer;
