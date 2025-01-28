import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../models/IPost.ts";

type postSliceType = {
    posts: Array<IPost>
}

const initialState: postSliceType = {
    posts: []
}

const loadPosts = createAsyncThunk('postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json());
            return thunkAPI.fulfillWithValue(posts);
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    }
)

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadPosts.fulfilled, (state, action: PayloadAction<Array<IPost>>) => {
            state.posts = action.payload;
        })
            .addCase(loadPosts.rejected, (state, action) => {
                console.log(action.payload, state)
            })
})

export const  postSliceActions = {...postSlice.actions, loadPosts}