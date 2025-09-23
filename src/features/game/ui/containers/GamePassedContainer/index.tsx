import { Navigate } from 'react-router'
import { ROUTER } from '../../../../../router/consts'
import { useAppSelector } from '../../../../../store/hooks'
import { ConditionalContainer } from '../../../../../ui/components/containers/ConditionalContainer'
import { GamePassed } from '../../GamePassed'
import { AudioProvider } from '../../../../audio/AudioProvider'

export const GamePassedContainer = () => {
    const { passed_game} = useAppSelector(state => state.game)

    const isPassedGame = passed_game.id != 0

    return (
        <ConditionalContainer
            condition={isPassedGame}
            trueElement={
                <AudioProvider>
                    <GamePassed />
                </AudioProvider>
            }
            falseElement={<Navigate to={ROUTER.PATHS.GAME_PROGRESS} />}
        />
    )
}
