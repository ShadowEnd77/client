import { AccessData } from "../common/applied.types";
import { User } from "../entities";

export type UserRegisterReq = Omit<User, "id"> & AccessData
export type UserRegisterRes = User
