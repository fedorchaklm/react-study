import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser.ts";
import {apiService} from "../../services/api.service.ts";
import {urls} from "../../constants/constants.ts";

type userSliceType = {
    users: Array<IUser>;
}

const userSliceInitialState: userSliceType = {
    users: [],
}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await apiService.getAll<IUser>(urls.USERS);
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    })

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: userSliceInitialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<Array<IUser>>) => {
            state.users = action.payload;
        })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(action.payload, state);
        })
})

export const userSliceActions = {...userSlice.actions, loadUsers};