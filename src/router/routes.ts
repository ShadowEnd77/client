import { RegisterScreen } from "../features/user/ui/screens/RegisterScreen";
import { ROUTER } from "./consts";
import { AppRoute, AppRouteType } from "./types";
import { SurveyScreen } from "../features/survey/ui/SurveyScreen";

export const routes: Record<AppRouteType, AppRoute[]> = {
    AUTH: [
        {
            path: ROUTER.PATHS.HOME,
            Component: SurveyScreen,
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
