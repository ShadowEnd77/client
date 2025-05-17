import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserRegisterReq, UserRegisterRes } from '../../../types/api/user.api.types'
import { UserApi } from '../api/user.api'
import { AxiosResponse } from 'axios'
import { storeToken } from '../utils/storeToken'
import { USER_MESSAGES } from '../messages'
import { initialUserState } from './userState'


export const userRegister = createAsyncThunk(
    'user/register',
    async (req: UserRegisterReq) => {
        const res: AxiosResponse<UserRegisterRes> = await UserApi.register(req);

        if (!res.data) {
            throw res;
        }

        storeToken(res.data.access_token);

        return res.data;
    },
)

export const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setTokenIsValid: (state, action: PayloadAction<boolean>) => {
            state.token = action.payload
        },
        resetRegisterForm: state => {
            state.form = initialUserState.form
        }
    },
    extraReducers(builder) {
        builder
            .addCase(userRegister.pending, state => {
                state.register.loading = true
                state.register.error = ""
            })
            .addCase(userRegister.fulfilled, (state, action: PayloadAction<UserRegisterRes>) => {
                state.data.uuid = action.payload.uuid
                state.register.loading = false
                state.token = true
            })
            .addCase(userRegister.rejected, state => {
                state.register.loading = false
                state.register.error = USER_MESSAGES.REGISTRATION_ERROR
            })
    },
})

export const {
    setTokenIsValid,
    resetRegisterForm
} = userSlice.actions

export const userReducer = userSlice.reducer