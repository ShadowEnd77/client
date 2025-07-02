import { useAppSelector } from '../../../../../store/hooks'
import { ConditionalContainer } from '../../../../../ui/components/containers/ConditionalContainer'
import { GameLayout } from '../../GameLayout'
import { Navigate } from 'react-router'
import { ROUTER } from '../../../../../router/consts'
import { AudioContext, AudioProvider } from '../../../../audio/AudioProvider'
import { useContext, useEffect, useState } from 'react'
import bgAudio from '../../../../../assets/audio/background.mp3'

export const GameContainer = () => {
    const { survey_passed } = useAppSelector(state => state.survey)
    const { passed_game, data, audio_is_loaded } = useAppSelector(state => state.game)
    const { loadTrack, play } = useContext(AudioContext)
    const [isLoad, setIsLoad] = useState(false)


    const isPassedGame = passed_game.id != 0
    const gameIsLoaded = data.id != 0

    const handleNoGameAccess = () => {
        if (!survey_passed) {
            return <Navigate to={ROUTER.PATHS.HOME} />
        }
        if (isPassedGame) {
            return <Navigate to={ROUTER.PATHS.GAME_PASSED} />
        }
    }

    const loadAll = async () => {
        await Promise.all([
            loadTrack('bg', bgAudio),
        ]);
        alert("audio loaded")
    };

    useEffect(() => {
        if (gameIsLoaded) {
            (async () => {
                await loadAll()
                setIsLoad(true)
            })()

        }
    }, [gameIsLoaded])

    return (
        <ConditionalContainer
            condition={!isPassedGame && gameIsLoaded && survey_passed}
            trueElement={
                <AudioProvider>
                    <GameLayout />
                </AudioProvider>
            }
            falseElement={handleNoGameAccess()}
        />
    )
}
