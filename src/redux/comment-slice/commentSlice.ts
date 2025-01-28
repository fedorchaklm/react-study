import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IComment} from "../../models/IComment.ts";
import {apiService} from "../../services/api.service.ts";
import {urls} from "../../constants/constants.ts";

type commentSliceType = {
    comments: Array<IComment>
}

const commentSliceInitialState: commentSliceType = {
    comments: []
}

const loadComments = createAsyncThunk('commentSlice/loadComments',
    async (_, thunkAPI) => {
        try {
            const comments = await apiService.getAll<IComment>(urls.COMMENTS);
            return thunkAPI.fulfillWithValue(comments);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    })

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: commentSliceInitialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadComments.fulfilled, (state, action) => {
            state.comments = action.payload;
        })
})

export const commentSliceActions = {...commentSlice.actions, loadComments};