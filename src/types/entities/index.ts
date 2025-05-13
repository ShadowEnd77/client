import { HasId, HasName } from "../common/utilitarian.types"

export type User = {
    first_name: string
    last_name: string
    age: number
    city_id: number
    school: string
} & HasId

export type City = HasId & HasName
