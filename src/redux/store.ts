import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./user-slice/userSlice.ts";
import {postSlice} from "./post-slice/postSlice.ts";
import {commentSlice} from "./comment-slice/commentSlice.ts";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer,
        commentSlice: commentSlice.reducer
    }
});