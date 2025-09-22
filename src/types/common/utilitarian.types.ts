import { ReactNode } from "react"

export type HasId = { id: number }
export type HasName = { name: string }
export type HasText = { text: string }
export type HasChildren = { children: ReactNode }
export type HasClassName = { className?: string }

export type Pagination = {
    part: number
    is_out: boolean
    limit: number
    loading: boolean
}

export type HasPagination = {
    pagination: Pagination
} 

export type ResponseStatus = {
    success: boolean | null
    error: string
    loading: boolean
}
export type HasResponseStatus = {
    statuses: ResponseStatus
}