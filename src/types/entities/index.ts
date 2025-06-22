import { HasId, HasName, HasText } from "../common/utilitarian.types"

// USER ENTITIES
export type User = {
    uuid: string
    first_name: string
    last_name: string
    age: number
    city_id: number
    school: string
}

// CITIES ENTITIES
export type City = HasId & HasName

// SURVIES ENTITIES
export type Survey = {
    title: string;
    questions: Question[];
} & HasId

export type Question = {
    options: Answer[];
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
    cover_image: string
    description: string
    duration: number
    scenes: Scene[]
} & HasId

export type SceneType = "choice" | "dialogue"

export type ScenePayload = {
    dialogues: GameDialog[]
    description?: string
    choices?: GameChoice[]
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