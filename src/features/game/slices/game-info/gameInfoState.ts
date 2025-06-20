import { ResponseStatus } from "../../../../types/common/utilitarian.types"
import { Game, Scene } from "../../../../types/entities"

type GameInfoSliceState = {
    data: Game,
    statuses: ResponseStatus
    current_scene: Scene 
    current_scene_animated: boolean
}

export const initialGameInfoState: GameInfoSliceState = {
    current_scene_animated: false,
    data: {
        cover: "",
        id: 0,
        title: "",
        description: "",
        duration: 0,
        scenes: []
    },
    current_scene: {
        id: 0,
        type: "dialog",
        order: 0,
        payload: {
            dialogues: []
        }
    },
    statuses: {
        success: null,
        error: "",
        loading: false
    }

}
