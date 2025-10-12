import { School } from "../entities";

export type GetSchoolsReq = {
    skip: number
    limit: number
    query?: string
    city_id?: number
}

export type GetSchoolsRes = School[]