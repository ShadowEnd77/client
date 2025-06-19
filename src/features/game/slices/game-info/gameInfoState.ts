import { ResponseStatus } from "../../../../types/common/utilitarian.types"
import { Game } from "../../../../types/entities"

type GameInfoSliceState = {
    data: Game
    statuses: ResponseStatus
}

export const initialGameInfoState: GameInfoSliceState = {
    data: {
        cover: "",
        id: 0,
        title: "",
        description: "",
        duration: 0
    },
    statuses: {
        success: null,
        error: "",
        loading: false
    }

}
