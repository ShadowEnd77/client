import { User } from "../entities"

export type SessionCreateReq = {
    region_id: number
    city_id: number
    school: string
} & Omit<User, "id">
//export type SessionCreateRes = { session_data: Session }


export type SessionGetResultsReq = {
    sid: string
    game_id: number
}
export type SessionGetResultsRes = {}


export type SessionFinishReq = {
    sid: string
    game_id: string
    game_state: object
}

export type SessionFinishRes = {}


export type SessionResetReq = {
    sid: string
}
export type SessionResetRes = {}