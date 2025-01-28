import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./userSlice/userSlice.ts";
import {postSlice} from "./userSlice/postSlice.ts";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    }
});