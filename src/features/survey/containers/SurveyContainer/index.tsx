import { SurveyInfoScreen } from '../../ui/SurveyInfoScreen'
import { AudioProvider } from '../../../audio/AudioProvider'
import { Navigate } from 'react-router'
import { ROUTER } from '../../../../router/consts'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { ConditionalContainer } from '../../../../ui/components/containers/ConditionalContainer'
import { LoaderWidget } from '../../../../ui/components/service/LoaderWidget'
import { useEffect } from 'react'
import { getSurvey } from '../../slices/surveySlice'

export const SurveyContainer = () => {
    const dispatch = useAppDispatch()
    const { id } = useAppSelector(state => state.survey)
    const { data } = useAppSelector(state => state.game)

    const surveyIsLoaded = id != 0
    const gameIsLoaded = data.id != 0

    const handleNoSurveyAccess = () => {
        if (gameIsLoaded) {
            return <Navigate to={ROUTER.PATHS.GAME_INFO} />
        }

        return <LoaderWidget
            widthLoader={50}
            heightLoader={50}
            text={"Загружаем информацию о тестировании..."}
        />
    }

    useEffect(() => {
        if (!id) {
            dispatch(getSurvey())
        }
    }, [id])

    return (
        <ConditionalContainer
            condition={surveyIsLoaded && !gameIsLoaded}
            trueElement={
                <AudioProvider>
                    <SurveyInfoScreen />
                </AudioProvider>
            }
            falseElement={handleNoSurveyAccess()}
        />
    )
}
