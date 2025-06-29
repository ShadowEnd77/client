import { AxiosResponse } from "axios";
import { api } from "../../../api/instance";
import { AUTH_PATHS } from "../../../api/paths";
import { convertToQueryParams } from "../../../utils/convertToQueryParams";
import { GetCitiesReq, GetCitiesRes } from "../../../types/api/cities.api.types";

export class CitiesApi {
    static async getAll(req: GetCitiesReq) {
        const res: AxiosResponse<GetCitiesRes> = await api.get(`${AUTH_PATHS.GET_СITIES}${convertToQueryParams(req)}`)
        if (!res.data) throw res;

        return res
    }
}