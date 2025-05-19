import { StartPage } from "../ui/components/StartPage";
import { RegisterScreen } from "../features/user/ui/RegisterScreen";
import { ROUTER } from "./consts";
import { AppRoute, AppRouteType } from "./types";


export const routes: Record<AppRouteType, AppRoute[]> = {
    AUTH: [
        {
            path: ROUTER.PATHS.HOME,
            Component: StartPage,
        }
    ],
    NON_AUTH: [
        {
            path: ROUTER.PATHS.SIGNUP,
            Component: RegisterScreen
        }
    ],
    PUBLIC: []
}
