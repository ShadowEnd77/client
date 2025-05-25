import { City } from "../entities";

export type GetCitiesReq = {
    part: number
    limit: number
    query?: string
}

export type GetCitiesRes = City[]
