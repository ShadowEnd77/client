import { ResponseStatus } from "../../../../types/common/utilitarian.types"
import { Game, GameAchievement, Scene } from "../../../../types/entities"

type GameInfoSliceState = {
    data: Game,
    statuses: ResponseStatus
    current_scene: Scene
    current_scene_animated: boolean
    game_is_in_progress: boolean
    audio_is_loaded: boolean
    modal_achievement: {
        is_open: boolean
        data: GameAchievement
    }
    visited_scenes: number[]
    passed_game: {
        id: number
        sertificate_url: string
        title: string
        cover_image: string
        game_group_id?: number
    }
    sending_statuses: ResponseStatus
}

export const initialGameInfoState: GameInfoSliceState = {
    current_scene_animated: false,
    game_is_in_progress: false,
    audio_is_loaded: false,
    passed_game: {
        id: 0,
        sertificate_url: "",
        title: "",
        cover_image: "",
        // optional game_group_id will be populated when game finished
        game_group_id: 0
    },
    data: {
        cover_image: "",
        id: 0,
        title: "",
        t_voice: "",
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
    },
    sending_statuses: {
        success: null,
        error: "",
        loading: false
    }


}
