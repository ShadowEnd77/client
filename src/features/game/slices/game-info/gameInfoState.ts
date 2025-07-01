import { ResponseStatus } from "../../../../types/common/utilitarian.types"
import { Game, GameAchievement, Scene } from "../../../../types/entities"

type GameInfoSliceState = {
    data: Game,
    statuses: ResponseStatus
    current_scene: Scene
    current_scene_animated: boolean
    modal_achievement: {
        is_open: boolean
        data: GameAchievement
    }
    visited_scenes: number[]
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
            cover_image: "",
            title: ""
        }
    },
    current_scene: {
        id: 0,
        type: "dialogue",
        order: 0,
        payload: {
            achievement: null,
            next_scene_id: null,
            score: 0,
            dialogues: []
        }
    },
    visited_scenes: [],
    statuses: {
        success: null,
        error: "",
        loading: false
    }

}
