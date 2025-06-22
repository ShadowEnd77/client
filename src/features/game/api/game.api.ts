import { AxiosResponse } from "axios";
import { api } from "../../../api/instance";
import { AUTH_PATHS } from "../../../api/paths";
//import { UserRegisterReq, UserRegisterRes } from "../../../types/api/user.api.types";
import { GetGameInfoByIdReq, GetGameInfoByIdRes } from "../../../types/api/game.api.types";
import {сonvertDataToGetParams} from "../../../utils/convertToQueryParams.ts";

export class GameApi {
    static async getAll(id: number, req: Omit<GetGameInfoByIdReq, "id">) {
        const res: AxiosResponse<GetGameInfoByIdRes> = await api.get(`${AUTH_PATHS.GET_GAMES}${id}?include_details=true`)
        if (!res.data) throw res;
        
        return res
    }
}