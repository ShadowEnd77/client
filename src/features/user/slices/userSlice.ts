import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../../types/entities'
import { UserRegisterReq, UserRegisterRes } from '../../../types/api/user.api.types'
import { UserApi } from '../api/user.api'
import { AxiosResponse } from 'axios'

type UserSliceState = {
    token: boolean
    data: User
    register: {
        loading: boolean
        error: string
    }
}

const initialState: UserSliceState = {
    token: false,
    data: {
        id: 0,
        age: 0,
        first_name: "",
        last_name: "",
        city_id: 0,
        school: ""
    },
    register: {
        loading: false,
        error: ""
    }

}

export const userRegister = createAsyncThunk(
    'user/register',
    async (req: UserRegisterReq) => {
        const res: AxiosResponse<UserRegisterRes> = await UserApi.register(req);

        if (!res.data) {
            throw res;
        }

        // store token

        return res.data;
    },
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        checkValidToken: (state, action: PayloadAction<boolean>) => {
            state.token = action.payload
        },
        resetUserData: state => {
            state.data = initialState.data
        }
    },
    extraReducers(builder) {
        builder
            .addCase(userRegister.pending, state => {
                state.register.loading = true
                state.register.error = ""
            })
            .addCase(userRegister.fulfilled, (state, action: PayloadAction<UserRegisterRes>) => {
                state.register.loading = false
                state.token = true
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.register.loading = false
                state.register.error = "Не удалось зарегистрироваться"
            })
    },
})

export const {
    checkValidToken,
    resetUserData
} = userSlice.actions

export const userReducer = userSlice.reducer