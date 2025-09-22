import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserRegisterReq, UserRegisterRes } from '../../../types/api/user.api.types'
import { UserApi } from '../api/user.api'
import { AxiosResponse } from 'axios'
import { storeToken } from '../utils/storeToken'
import { initialUserState } from './userState'
import { USER_STRINGS } from '../config'
import { CONFIG } from '../../../config'
import { addToStorage, getFromStorage } from '../../../utils/localStorageExplorer' //доб

export const userRegister = createAsyncThunk(
    'user/register',
    async (req: UserRegisterReq) => {
        if (CONFIG.USE_MOCK_API) {
            // Generate a unique uuid for each mock user
            const mockUuid = `mock-${Date.now()}-${Math.floor(Math.random()*1e8)}`;
            // Header: {"alg":"HS256","typ":"JWT"}
            const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
            // Payload: {"sub": mockUuid, "exp": <future timestamp>}
            const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24; // 24h
            const payload = btoa(JSON.stringify({ sub: mockUuid, exp }));
            // Signature can be anything for mock (not validated client-side)
            const signature = "mock-signature";
            const mockToken = `${header}.${payload}.${signature}`;
            return new Promise<{ access_token: string; uuid: string; form: UserRegisterReq }>((rs, _) => {
                setTimeout(() => {
                    rs({
                        access_token: mockToken,
                        uuid: mockUuid,
                        form: req
                    })
                }, CONFIG.MOCK_FETCH_DELAY)
            })
        }

        const res: AxiosResponse<UserRegisterRes> = await UserApi.register(req);

        if (!res.data) {
            throw res;
        }

        storeToken(res.data.access_token);
        return { ...res.data, form: req };
    },
)


const USER_DATA_STORAGE_KEY = 'user_data';

import { defaultUserData } from './userState';

const getInitialUserData = (defaultData: any) => {
    const stored = getFromStorage(USER_DATA_STORAGE_KEY);
    console.log('[userSlice] user_data from localStorage:', stored);
    if (stored && typeof stored === 'object') {
        // Ensure all fields are present (fallback to defaultUserData)
        const merged = { ...defaultUserData, ...stored };
        console.log('[userSlice] merged initial user.data:', merged);
        return merged;
    }
    console.log('[userSlice] using default user.data:', defaultData);
    return defaultData;
};

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        ...initialUserState,
        data: getInitialUserData(initialUserState.data),
    },
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
                state.register.loading = true;
                state.register.error = "";
            })
            .addCase(userRegister.fulfilled, (state, action: PayloadAction<UserRegisterRes & {form: UserRegisterReq}>) => {
                // Use form data from payload to persist correct user data
                const formData = action.payload.form || {};
                const uuid = action.payload.uuid || '';
                if (!uuid) {
                    console.warn('[userSlice] WARNING: uuid is missing in registration response!');
                }
                state.data = { ...formData, uuid };
                addToStorage(USER_DATA_STORAGE_KEY, state.data);
                console.log('[userSlice] user_data saved to localStorage:', state.data);
                state.register.loading = false;
                state.register.success = true;
                state.token = true;
            })
            .addCase(userRegister.rejected, state => {
                state.register.loading = false;
                state.register.success = false;
                state.register.error = USER_STRINGS.REGISTRATION_ERROR;
            })
    },
})

export const {
    setTokenIsValid,
    resetRegisterForm
} = userSlice.actions

export const userReducer = userSlice.reducer