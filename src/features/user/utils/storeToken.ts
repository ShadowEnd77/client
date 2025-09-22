import { addToStorage, getFromStorage } from "../../../utils/localStorageExplorer"

const TOKEN_STORAGE_KEY = "access"

export const storeToken = (access_token: string) => {
    addToStorage(TOKEN_STORAGE_KEY, access_token)
}

export const getToken = (): string => {
    return getFromStorage(TOKEN_STORAGE_KEY)
}
