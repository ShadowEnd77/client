import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialGameInfoState } from './gameInfoState'
import { FinishGameReq, GetGameInfoByIdReq, GetGameInfoByIdRes } from '../../../../types/api/game.api.types'

import { Game, GameAchievement, Scene } from '../../../../types/entities'
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

export const sendFinishGame = createAsyncThunk(
    'game/send',
    async (req: FinishGameReq & { game_data: Pick<Game, "cover_image" | "title"> }) => {
        console.log(req);

        return new Promise<Pick<Game, "id" | "cover_image" | "title">>((rs, _) => {
            setTimeout(() => {
                rs({
                    id: 1,
                    cover_image: "",
                    title: ""
                })
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
        resetPassedGameData: (state) => {
            state.passed_game = initialGameInfoState.passed_game
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
        },
        setGameIsInProgress: (state, action: PayloadAction<boolean>) => {
            state.game_is_in_progress = action.payload
        },
        finishGame: (state) => {
            const { id, title, cover_image } = state.data

            state.passed_game = {
                id,
                title,
                cover_image,
                sertificate_url: ""
            }
        }
    },
    extraReducers(builder) {
        builder
            // GET GAME INFO
            .addCase(getGameInfoById.pending, state => {
                state.statuses.loading = true
                state.statuses.error = ""
            })
            .addCase(getGameInfoById.fulfilled, (state, action: PayloadAction<GetGameInfoByIdRes>) => {
                state.data = action.payload
                state.current_scene = action.payload.scenes.find(item => item.payload.dialogues!.length == 1)!
                state.statuses.loading = false
                state.statuses.success = true
            })
            .addCase(getGameInfoById.rejected, state => {
                state.statuses.loading = false
                state.statuses.error = ""
            })

            // SEND GAME
            .addCase(sendFinishGame.pending, state => {
                state.sending_statuses.loading = true
                state.sending_statuses.error = ""
            })
            .addCase(sendFinishGame.fulfilled, (state, action: PayloadAction<Pick<Game, "id" | "cover_image" | "title">>) => {
                state.passed_game = {
                    ...action.payload,
                    sertificate_url: ""
                }
                state.sending_statuses.loading = false
                state.sending_statuses.success = true
                state.sending_statuses.error = ""
            })
            .addCase(sendFinishGame.rejected, state => {
                state.sending_statuses.loading = false
                state.sending_statuses.error = ""
            })
    },
})

export const {
    setCurrentSceneById,
    setAchievementData,
    resetAchievementData,
    addToVisitedScenes,
    setGameIsInProgress,
    setIsOpenAchievement,
    setCurrentSceneAnimated,
    finishGame
} = gameInfoSlice.actions

export const gameInfoReducer = gameInfoSlice.reducer