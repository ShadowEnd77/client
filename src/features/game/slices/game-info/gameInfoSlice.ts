import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialGameInfoState } from './gameInfoState'
import { GetGameInfoByIdReq, GetGameInfoByIdRes } from '../../../../types/api/game.api.types'

import { GameAchievement, Scene } from '../../../../types/entities'
import { GameApi } from '../../api/game.api'
import { AxiosResponse } from 'axios'
import { mockGame } from '../../utils/mock-data/gameMockData'

export const getGameInfoById = createAsyncThunk(
    'game/get-by-id',
    async (req: GetGameInfoByIdReq) => {
        return new Promise<GetGameInfoByIdRes>((rs, _) => {
            setTimeout(() => {
                rs(mockGame)
            }, 1550)
        })
        // const res: AxiosResponse<GetGameInfoByIdRes> = await GameApi.getAll(req);
        // return res.data;
        // // if (!res.data) {
        // //     throw res;
        // // }

        // // storeToken(res.data.access_token);

        // // return res.data;
    },
)

export const gameInfoSlice = createSlice({
    name: 'game',
    initialState: initialGameInfoState,
    reducers: {
        setAchievementData: (state, action: PayloadAction<GameAchievement>) => {
            state.modal_achievement.data = action.payload
        },
        addToVisitedScenes: (state, action: PayloadAction<number>) => {
            if (!state.visited_scenes.some(item => item === action.payload)) {
                state.visited_scenes = [...state.visited_scenes, action.payload]
            }
        },
        resetAchievementData: (state) => {
            state.modal_achievement.data = initialGameInfoState.modal_achievement.data
        },
        setIsOpenAchievement: (state, action: PayloadAction<boolean>) => {
            state.modal_achievement.is_open = action.payload
        },
        setCurrentSceneById: (state, action: PayloadAction<number>) => {
            state.current_scene_animated = false
            state.current_scene = state.data.scenes.find(item => item.id == action.payload) as Scene
        },
        setCurrentSceneAnimated: (state, action: PayloadAction<boolean>) => {
            state.current_scene_animated = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getGameInfoById.pending, state => {
                state.statuses.loading = true
                state.statuses.error = ""
            })
            .addCase(getGameInfoById.fulfilled, (state, action: PayloadAction<GetGameInfoByIdRes>) => {
                state.data = {
                    ...action.payload,
                }
                console.log();

                state.current_scene = action.payload.scenes.find(item => item.payload.dialogues!.length == 1)!
                state.statuses.loading = false
                state.statuses.success = true
            })
            .addCase(getGameInfoById.rejected, state => {
                state.statuses.loading = false
                state.statuses.error = ""
            })
    },
})

export const {
    setCurrentSceneById,
    setAchievementData,
    resetAchievementData,
    addToVisitedScenes,
    setIsOpenAchievement,
    setCurrentSceneAnimated
} = gameInfoSlice.actions

export const gameInfoReducer = gameInfoSlice.reducer