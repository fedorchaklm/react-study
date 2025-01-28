import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../models/IPost.ts";
import {apiService} from "../../services/api.service.ts";
import {urls} from "../../constants/constants.ts";

type postSliceType = {
    posts: Array<IPost>;
}

const postSliceInitialState: postSliceType = {
    posts: []
}

const loadPosts = createAsyncThunk('postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await apiService.getAll<IPost>(urls.POSTS);
            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    });

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: postSliceInitialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadPosts.fulfilled, (state, action: PayloadAction<Array<IPost>>) => {
            state.posts = action.payload;
        })

})

export const postSliceActions= {...postSlice.actions, loadPosts}