import { Game } from "../entities"

export type GetGameInfoByIdReq = {
    game_id: number
} 
export type GetGameInfoByIdRes = {
    game: Game
}