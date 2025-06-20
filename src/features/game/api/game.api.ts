import { AxiosResponse } from "axios";
import { api } from "../../../api/instance";
import { AUTH_PATHS } from "../../../api/paths";
import { UserRegisterReq, UserRegisterRes } from "../../../types/api/user.api.types";
import { GetGameInfoByIdReq, GetGameInfoByIdRes } from "../../../types/api/game.api.types";

export class GameApi {
    static async getAll(req: GetGameInfoByIdReq) {
        const res: AxiosResponse<GetGameInfoByIdRes> = await api.post(AUTH_PATHS.GET_GAMES, req)
        if (!res.data) throw res;
        
        return res
    }
}