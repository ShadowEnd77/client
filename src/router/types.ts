import { FC } from "react"

export type AppRouteType = "AUTH" | "NON_AUTH" | "PUBLIC"

export type AppRoute = {
    path: string,
    Component: FC
    options?: AuthRouteOptions
}

export type AuthRouteOptions = {
    authIsInverted?: boolean
}

export type AppRouteProps<RouteOptionsType> = {
    options?: RouteOptionsType
} & Pick<AppRoute, "Component">


