import React from 'react'
import { ControlButton } from '../../buttons/ControlButton'
import styles from './visuallyImpired.module.scss'
import { useAppDispatch } from '../../../../store/hooks'
import { toggleAudioMuted, toggleFullScreenMode } from '../../../../features/settings/slices/settingsSlice'

export const VisuallyImpairedControl = () => {
    const dispatch = useAppDispatch()
    return <ControlButton
        classNames={{ button: styles.button }}
        onClick={() => dispatch(toggleAudioMuted())}
    >ds</ControlButton>
}
