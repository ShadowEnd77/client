import { FC, ReactNode, useEffect, useState } from 'react'
import styles from './gameLayout.module.scss'
import { ControlButton } from '../../../../ui/components/buttons/ControlButton'
import { fullsizeEnableIcon, volumeIcon } from '../../../../ui/icons'
import { SceneLayout } from '../scenes/SceneLayout'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { LoaderWidget } from '../../../../ui/components/service/LoaderWidget'
import { getGameInfoById, setCurrentSceneById } from '../../slices/game-info/gameInfoSlice'
import { mockGame } from '../../utils/mock-data/gameMockData'
import { GameAchievementModal } from '../scenes/GameAchievementModal'
import { AnimatePresence } from 'motion/react'

type GameLayoutProps = {

}

export const GameLayout: FC<GameLayoutProps> = () => {
    const dispatch = useAppDispatch()
    const { current_scene, statuses, modal_achievement } = useAppSelector(state => state.game)


    // if (statuses.loading || !current_scene.id) {
    //     return <LoaderWidget
    //         widthLoader={50}
    //         heightLoader={50}
    //         text={"Загружаем игру..."}
    //     />
    // } ''

    return (
        <div className={styles.gameLayout}>
            {
                <AnimatePresence>
                    {modal_achievement.is_open && <GameAchievementModal onClose={() => {
                        setTimeout(() => {
                            dispatch(setCurrentSceneById(current_scene.payload.next_scene_id!))
                        }, 500)
                    }} />}
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
