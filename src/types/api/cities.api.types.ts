import { City } from "../entities";

export type GetCitiesReq = {
    skip: number
    limit: number
    query?: string
}
//export type GetCitiesRes = City[]
export type GetCitiesRes = {
    cities: City[]
}
