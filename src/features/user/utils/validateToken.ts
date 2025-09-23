import { isExpired, decodeToken } from "react-jwt";
import { getToken } from "./storeToken";
import { CONFIG } from "../../../config";
import { getFromStorage } from "../../../utils/localStorageExplorer";

const USER_DATA_STORAGE_KEY = "user_data";

export const validateToken = (token: string) => {
    if (!token || isExpired(token)) {
        console.log("token doesn't exist or expired");
        return false;
    }

    const decoded = decodeToken(token) as { sub?: string } || {};
    const userData = getFromStorage(USER_DATA_STORAGE_KEY) || {};
    const hasSub = typeof decoded.sub === "string" && !!decoded.sub;
    const matchesUuid = hasSub && userData.uuid === decoded.sub;

    console.log(`token sub: ${decoded.sub}, user_data.uuid: ${userData.uuid}, match: ${matchesUuid}`);

    return matchesUuid;
};

export const checkUserToken = () => {
    const token = getToken();

    if (!CONFIG.AUTH_CHECK_ENABLED) {
        return true;
    }
    return validateToken(token);
};