import { User } from "../entities"

export type SessionCreateReq = {
    region_id: number
    city_id: number
    game_id: number
    school: string
} & User