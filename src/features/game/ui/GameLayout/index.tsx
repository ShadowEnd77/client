import { FC, ReactNode, useEffect } from 'react'
import styles from './gameLayout.module.scss'
import { ControlButton } from '../../../../ui/components/buttons/ControlButton'
import { fullsizeEnableIcon, volumeIcon } from '../../../../ui/icons'
import { SceneLayout } from '../SceneLayout'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { LoaderWidget } from '../../../../ui/components/service/LoaderWidget'
import { getGameInfoById, setCurrentSceneById } from '../../slices/game-info/gameInfoSlice'

type GameLayoutProps = {

}

export const GameLayout: FC<GameLayoutProps> = () => {
    const dispatch = useAppDispatch()
    const { current_scene, statuses } = useAppSelector(state => state.game)


    useEffect(() => {
        dispatch(getGameInfoById({ id: 1 }))
    }, [])

    if (statuses.loading || !current_scene.id) {
        return <LoaderWidget
            widthLoader={50}
            heightLoader={50}
            text={"Загружаем игру..."}
        />
    } ''

    return (
        <div className={styles.gameLayout}>
            <aside className={styles.gameLeftControlsBar}>
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
