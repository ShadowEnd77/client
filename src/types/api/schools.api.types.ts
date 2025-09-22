import { School } from "../entities";

export type GetSchoolsReq = {
    skip: number
    limit: number
    query?: string
}

export type GetSchoolsRes = School[]