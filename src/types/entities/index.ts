import { HasId, HasName, HasText } from "../common/utilitarian.types"

// USER ENTITIES
export type User = {
    uuid: string
    first_name: string
    last_name: string
    middle_name: string
    age: number
    gender: number
    city_id: number
    school: string
    // school_id: number
}

// CITIES ENTITIES
export type City = HasId & HasName

// SCHOOLS ENTITIES
export type School = HasId & HasName

// SURVEYS ENTITIES
export type Survey = {
    title: string;
    questions: Question[];
} & HasId

export type Question = {
    group_id?: number;
    options: Answer[];
    voice: string;
} & HasId & HasText;

export type Answer = {
    order: number;
} & HasId & HasText;

export type ResultAnswer = {
    question_id: number,
    answer_option_id: number
}

// GAME ENTITIES
export type Game = {
    title: string
    t_voice: string
    cover_image: string
    game_group_id?: number
    description: string
    duration: number
    scenes: Scene[]
} & HasId

export type SceneType = "choice" | "dialogue" | "match"

export type GameAchievement = {
    title: string
    cover_image: string
}

export type ScenePayload = {
    description?: string
    achievement: GameAchievement | null
    next_scene_id: number | null
    score: number

    //if it only dialogue
    dialogues?: GameDialog[]

    //if it has choice
    choices?: GameChoice[]

    //if it match
    pairs?: GameMatchPair[]
}


export type GameMatchPair = {
    k: string
    v: string
}

export type GameChoice = {
    next_scene_id: number
} & HasText
export type Scene = {
    order: number
    type: SceneType
    payload: ScenePayload
} & HasId

export type GameDialog = {
    image: string
    voice: string
    name: string
} & HasText