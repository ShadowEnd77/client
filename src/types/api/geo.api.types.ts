import { City, Region } from "../entities";

export type GetRegionsRes = Region[]

export type GetCitiesRes = City[]

export type GetCitiesByRegionReq = Pick<City, "region_id">
export type GetCitiesByRegionRes = GetCitiesRes & Region