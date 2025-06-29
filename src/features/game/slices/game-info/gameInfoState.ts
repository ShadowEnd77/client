import { ResponseStatus } from "../../../../types/common/utilitarian.types"
import { Game, Scene } from "../../../../types/entities"

type GameInfoSliceState = {
    data: Game,
    statuses: ResponseStatus
    current_scene: Scene
    current_scene_animated: boolean
    modal_achievement: {
        is_open: boolean
        data: {
            cover: string
            title: string
        }
    }
}

export const initialGameInfoState: GameInfoSliceState = {
    current_scene_animated: false,
    data: {
        cover_image: "",
        id: 0,
        title: "",
        description: "",
        duration: 0,
        scenes: []
    },
    modal_achievement: {
        is_open: false,
        data: {
            cover: "",
            title: ""
        }
    },
    current_scene: {
        id: 0,
        type: "dialogue",
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
