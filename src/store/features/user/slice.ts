import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { User } from '../../../types/entities'

type UserSliceState = {
    data: User
}

const initialState: UserSliceState = {
    data: {
        id: 0,
        age: 0,
        first_name: "",
        last_name: ""
    },
}

const getUserData = createAsyncThunk(
    'users/get',
    async () => {
        // receive data logic
    },
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUserData: state => {
            state.data = initialState.data
        }
    },
})

export const { resetUserData } = userSlice.actions
export const userReducer = userSlice.reducer