import {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";

type UserSliceType = {
    users: Array<IUser>,
    error: string,
    user: IUser | null,
    loadState: boolean,
}

const initialState: UserSliceType = {
    users: [],
    error: '',
    user: null,
    loadState: false,
}

const loadUsers = createAsyncThunk('userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json());

            thunkAPI.dispatch(userSliceActions.changeLoadState(true));

            return thunkAPI.fulfillWithValue(users);

        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    }
)

const loadUser = createAsyncThunk('userSlice/loadUsers',
    async (id: string, thunkAPI) => {
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users' + id)
                .then(response => response.json());

            // thunkAPI.dispatch(userSliceActions.changeLoadState(true));

            return thunkAPI.fulfillWithValue(users);

        } catch (error) {
            if (error instanceof Error) {
                // thunkAPI.dispatch(userSliceActions.changeLoadState(false));

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
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        }
    },
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<Array<IUser>>) => {
            state.users = action.payload
        })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log('> 2', action);
                state.error = action.payload as string;
            })
            .addMatcher(isFulfilled(loadUsers, loadUser), (state) => {
                state.loadState = true;
            })

})

export const userSliceActions = {...userSlice.actions, loadUsers, loadUser};