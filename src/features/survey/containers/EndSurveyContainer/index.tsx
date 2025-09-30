import { SurveyInfoScreen } from '../../ui/SurveyInfoScreen'
import { AudioProvider } from '../../../audio/AudioProvider'
import { Navigate } from 'react-router'
import { ROUTER } from '../../../../router/consts'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { ConditionalContainer } from '../../../../ui/components/containers/ConditionalContainer'
import { LoaderWidget } from '../../../../ui/components/service/LoaderWidget'
import { useEffect } from 'react'
import { getSurvey } from '../../slices/surveySlice'
import { SurveyScreen } from '../../ui/SurveyScreen'
import { createSlice } from '@reduxjs/toolkit'
import { stat } from 'fs'
import { setSurvey } from '../../../../features/settings/slices/settingsSlice'
export const EndSurveyContainer = () => {
    const dispatch = useAppDispatch()
    const { id } = useAppSelector(state => state.survey) 
    //const { data } = useAppSelector(state => state.game)
    
    const {isEndSurvey} = useAppSelector(state => state.settings)
    const surveyIsLoaded = id != 0
    const gameIsLoaded = 0
   
    const handleNoSurveyAccess = () => {
        if (gameIsLoaded) {
            return <Navigate to={ROUTER.PATHS.END_SURVEY} />
        }
        useEffect(() => {
        dispatch(setSurvey());
    }, [dispatch]);
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

import { SurveyInfoScreen } from '../../ui/SurveyInfoScreen'
import { AudioProvider } from '../../../audio/AudioProvider'
import { Navigate } from 'react-router'
import { ROUTER } from '../../../../router/consts'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { ConditionalContainer } from '../../../../ui/components/containers/ConditionalContainer'
import { LoaderWidget } from '../../../../ui/components/service/LoaderWidget'
import { useEffect } from 'react'
import { getSurvey } from '../../slices/surveySlice'
import { SurveyScreen } from '../../ui/SurveyScreen'
import { createSlice } from '@reduxjs/toolkit'
import { stat } from 'fs'
import { setSurvey } from '../../../../features/settings/slices/settingsSlice'
export const EndSurveyContainer = () => {
    const dispatch = useAppDispatch()
    const { id } = useAppSelector(state => state.survey) 
    //const { data } = useAppSelector(state => state.game)

    const {isEndSurvey} = useAppSelector(state => state.settings)
    const surveyIsLoaded = id != 0
    const gameIsLoaded = 0
    dispatch(setSurvey())
    const handleNoSurveyAccess = () => {
        if (gameIsLoaded) {
            return <Navigate to={ROUTER.PATHS.END_SURVEY} />
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
