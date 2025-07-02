import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserRegisterReq, UserRegisterRes } from '../../../types/api/user.api.types'
import { UserApi } from '../api/user.api'
import { AxiosResponse } from 'axios'
import { storeToken } from '../utils/storeToken'
import { initialUserState } from './userState'
import { USER_STRINGS } from '../config'
import { CONFIG } from '../../../config'

export const userRegister = createAsyncThunk(
    'user/register',
    async (req: UserRegisterReq) => {
        if (CONFIG.USE_MOCK_API) {
            return new Promise<UserRegisterRes>((rs, _) => {
                setTimeout(() => {
                    rs({
                        access_token: "access_token",
                        uuid: "user id test"
                    })
                }, CONFIG.MOCK_FETCH_DELAY)
            })
        }

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
                state.register.success = true
                state.token = true
            })
            .addCase(userRegister.rejected, state => {
                state.register.loading = false
                state.register.success = false
                state.register.error = USER_STRINGS.REGISTRATION_ERROR
            })
    },
})

export const {
    setTokenIsValid,
    resetRegisterForm
} = userSlice.actions

export const userReducer = userSlice.reducer