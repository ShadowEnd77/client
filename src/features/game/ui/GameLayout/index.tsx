import { useEffect } from 'react'
import styles from './gameLayout.module.scss'
import { ControlButton } from '../../../../ui/components/buttons/ControlButton'
import { fullsizeEnableIcon, volumeIcon } from '../../../../ui/icons'
import { SceneLayout } from '../scenes/SceneLayout'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { finishGame, setCurrentSceneById } from '../../slices/game-info/gameInfoSlice'
import { GameAchievementModal } from '../scenes/GameAchievementModal'
import { AnimatePresence } from 'motion/react'
import { useAudio } from '../../../audio/AudioProvider'
import bgAudio from '../../../../assets/audio/background.mp3';

export const GameLayout = () => {
    const dispatch = useAppDispatch()
    const { current_scene, modal_achievement } = useAppSelector(state => state.game)
    const { play, loadTrack, setVolume } = useAudio()

    const onAchievementClose = () => {
        setTimeout(() => {
            if (current_scene.payload.next_scene_id == null) {
                dispatch(finishGame())
                return
            }
            dispatch(setCurrentSceneById(current_scene.payload.next_scene_id!))
        }, 500)
    }

    useEffect(() => {
        const bgTrack = loadTrack('bg', bgAudio, true)
        setVolume(bgTrack.id, 0.3)
        play(bgTrack.id)
    }, [])

    return (
        <div className={styles.gameLayout}>
            {
                <AnimatePresence>
                    {modal_achievement.is_open && <GameAchievementModal onClose={onAchievementClose} />}
                </AnimatePresence>
            }
            <aside className={styles.gameSettingsBar}>
                <ControlButton disabled>
                    <img src={volumeIcon} height={18} width={18} alt="" />
                </ControlButton>
                <ControlButton>
                    <img src={fullsizeEnableIcon} height={18} width={18} alt="" />
                </ControlButton>
            </aside>
            <SceneLayout scene={current_scene} />
        </div>

    )
}
