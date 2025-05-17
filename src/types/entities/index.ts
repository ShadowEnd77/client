import { HasId, HasName } from "../common/utilitarian.types"

export type User = {
    uuid: string
    first_name: string
    last_name: string
    age: number
    city_id: number
    school: string
}

export type City = HasId & HasName
