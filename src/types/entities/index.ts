import { HasId, HasName } from "../common/utilitarian.types"

export type User = {
    first_name: string
    last_name: string
    age: number
} & HasId

export type City = {
    region_id: number
} & HasId & HasName

export type Region = & HasId & HasName

export type Session = {
    session_token: string
    expires_at: string
}
