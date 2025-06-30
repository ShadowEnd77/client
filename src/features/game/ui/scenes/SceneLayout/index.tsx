import React, { FC, useEffect } from 'react'
import styles from './sceneLayout.module.scss'
import { ControlButton } from '../../../../../ui/components/buttons/ControlButton'
import { volumeIcon, fullsizeEnableIcon, arrowLeftIcon, arrowRightIcon } from '../../../../../ui/icons'
import { GameSceneCard } from '../GameSceneCard'
import { Scene, ScenePayload } from '../../../../../types/entities'
import { ChoiceScene } from '../ChoiceScene'
import { setCurrentSceneAnimated, setCurrentSceneById } from '../../../slices/game-info/gameInfoSlice'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { GameMatchesScene } from '../GameMatchesScene'
import { mockGame } from '../../../utils/mock-data/gameMockData'

type SceneLayoutProps = {
    scene: Scene
}
export const SceneLayout: FC<SceneLayoutProps> = ({ scene }) => {
    const dispatch = useAppDispatch();
    const { current_scene_animated, current_scene } = useAppSelector(state => state.game)
    
    const currentSceneIsDialog = scene.type == "dialogue"

    const renderScene = () => {
        if (scene.type == "dialogue" && scene.payload.dialogues) {
            return scene.payload.dialogues.map((dialog, index) => (
                <GameSceneCard
                    dialog={dialog}
                    delayShow={!index ? 0.5 : index + 1} />
            ))
        }
        if (scene.type == "choice" && scene.payload.dialogues) {
            return <>
                <GameSceneCard
                    dialog={scene.payload.dialogues[0]}
                    delayShow={0.5} />
                <ChoiceScene {...scene} />
            </>
        }
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(setCurrentSceneAnimated(true))
        }, 3000)
    }, [current_scene.id])

    return (
        <div className={styles.sceneLayout}>
            {<GameMatchesScene match_data={mockGame.scenes.find(item => item.type === "match")?.payload as ScenePayload} />}
            {/* {
                currentSceneIsDialog &&
                <aside className={styles.sceneControls}>
                    <ControlButton disabled>
                        <img style={{ scale: -1 }} src={arrowRightIcon} height={18} width={18} alt="" />
                    </ControlButton>
                    <ControlButton disabled={!current_scene_animated} onClick={() => dispatch(setCurrentSceneById(scene.id + 1))}>
                        <img src={arrowRightIcon} height={18} width={18} alt="" />
                    </ControlButton>
                </aside>
            } */}
        </div>
    )
}
