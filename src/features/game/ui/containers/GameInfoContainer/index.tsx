import { Navigate } from 'react-router'
import { ROUTER } from '../../../../../router/consts'
import { useAppSelector } from '../../../../../store/hooks'
import { ConditionalContainer } from '../../../../../ui/components/containers/ConditionalContainer'
import { LoaderWidget } from '../../../../../ui/components/service/LoaderWidget'
import { GameInfoScreen } from '../../GameInfoScreen'

export const GameInfoContainer = () => {
    const { survey_passed } = useAppSelector(state => state.survey)
    const { data, statuses, game_is_in_progress } = useAppSelector(state => state.game)

    const gameIsLoaded = data.id != 0 && Boolean(statuses.success) && !statuses.loading

    const handleNoGameInfoAccess = () => {
        if (statuses.loading) {
            return <LoaderWidget
                widthLoader={50}
                heightLoader={50}
                text={"Загружаем информацию об игре..."}
            />
        }

        if (!survey_passed) {
            return <Navigate to={ROUTER.PATHS.HOME} />
        }

        if (game_is_in_progress) {
            <Navigate to={ROUTER.PATHS.GAME_PROGRESS} />
        }
    }

    return (
        <ConditionalContainer
            condition={gameIsLoaded && survey_passed && !game_is_in_progress}
            trueElement={<GameInfoScreen />}
            falseElement={handleNoGameInfoAccess()}
        />
    )
}
