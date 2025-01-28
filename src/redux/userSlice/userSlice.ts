import {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type UserSliceType = {
    users: Array<IUser>,
    error: string,
}

const initialState: UserSliceType = {
    users: [],
    error: ''
}

const loadUsers = createAsyncThunk('userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json());

            return thunkAPI.fulfillWithValue(users);

        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    }
)

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        // ['loadUsers/pending']: (state, action) => {
        //     console.log('> 1', action);
        // }
    },
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<Array<IUser>>) => {
            state.users = action.payload
        })
            .addCase(loadUsers.rejected, (state, action: PayloadAction<string>) => {
            console.log('> 2', action);
            state.error = action.payload;
        }),

})

export const userSliceActions = {...userSlice.actions, loadUsers};