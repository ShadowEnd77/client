import { Game, Scene } from "../entities"

export type GetGameInfoByIdReq = {
    id: number
    include_details: boolean
}
export type GetGameInfoByIdRes = Game