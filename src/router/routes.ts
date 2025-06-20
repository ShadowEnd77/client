import { RegisterScreen } from "../features/user/ui/screens/RegisterScreen";
import { ROUTER } from "./consts";
import { AppRoute, AppRouteType } from "./types";
import { SurveyScreen } from "../features/survey/ui/SurveyScreen";
import { GameInfoScreen } from "../features/game/ui/GameInfoScreen";
import { GameLayout } from "../features/game/ui/GameLayout";

export const routes: Record<AppRouteType, AppRoute[]> = {
    AUTH: [
        {
            path: ROUTER.PATHS.HOME,
            Component: SurveyScreen,
        },
        {
            path: ROUTER.PATHS.GAME_INFO,
            Component: GameInfoScreen,
        },
        {
            path: ROUTER.PATHS.GAME_PROGRESS,
            Component: GameLayout,
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
