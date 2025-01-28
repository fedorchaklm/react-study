import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./userSlice/userSlice.ts";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer
    }
});