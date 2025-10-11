import { AxiosResponse } from "axios";
import { api } from "../../../api/instance";
import { API_PATHS } from "../../../api/paths";
import { convertToQueryParams } from "../../../utils/convertToQueryParams";
import { GetSchoolsReq, GetSchoolsRes } from "../../../types/api/schools.api.types";

export class SchoolsApi {
    static async getAll(req: GetSchoolsReq) {
        const res: AxiosResponse<GetSchoolsRes> = await api.get(`${API_PATHS.GET_SCHOOLS}${convertToQueryParams(req)}`)

        if (!res.data) throw res;

        return res.data
    }
}