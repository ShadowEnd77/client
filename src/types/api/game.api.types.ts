import { Game, Scene } from "../entities"

export type GetGameInfoByIdReq = {
    id: number
}
export type GetGameInfoByIdRes = Game[]