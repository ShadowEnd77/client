import { Game } from "../entities"

export type GetGameInfoByIdReq = {
    id: number
    include_details: boolean
}
export type GetGameInfoByIdRes = Game

export type FinishGameReq = {
    user_id: string
    game_id: number
    scene_ids: number[]
}
export type FinishGameRes = {
    game_id: number
}