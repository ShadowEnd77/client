import styles from './gameInfoScreen.module.scss'
import { WhiteContainer } from '../../../../ui/components/containers/WhiteContainer'
import { Button } from '../../../../ui/components/buttons/Button'
import { clockIcon, logoIcon } from '../../../../ui/icons'
import previewImage from '../../../../assets/images/preview.jpg'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getGameInfoById } from '../../slices/game-info/gameInfoSlice'
import { LoaderWidget } from '../../../../ui/components/service/LoaderWidget'


export const GameInfoScreen = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { data, statuses } = useAppSelector(state => state.game)
    //const params = useParams()

    const handleStartPlay = () => {
        navigate("/game/progress")
    }

    useEffect(() => {
        dispatch(getGameInfoById({ id: 1 }))
        
        //dispatch(getGameInfoById({game_id: params.id}))
    }, [])

    if (statuses.loading || !data.id) {
        return <LoaderWidget
            widthLoader={50}
            heightLoader={50}
            text={"Подождите, загружаем информацию об игре..."}
        />
    }

    return (
        <WhiteContainer className={styles.section}>
            <div style={{ backgroundImage: `url(${data.cover})` }} className={styles.gameImage} />
            <div className={styles.gameInfo}>
                <header className={styles.gameInfoHeader}>
                    <span className={styles.gameInfoCaption}>Тебе подойдет игра</span>
                </header>
                <div className={styles.gameInfoText}>
                    <h1 className={styles.gameInfoTitle}>«{data.title}»</h1>
                    <div className={styles.gameInfoDescription}>
                        <p>{data.description}</p>
                    </div>
                </div>
                <footer className={styles.gameInfoFooter}>
                    <div className={styles.gameInfoDuration}>
                        <img src={clockIcon} height={16} width={16} alt="" />
                        <span>Примерная длительность {data.duration} мин.</span>
                    </div>
                    <div className={styles.gameInfoBottom}>
                        <Button onClick={handleStartPlay} classNames={{ button: styles.gameInfoButton }}>Играть</Button>
                        <img src={logoIcon} height={26} width={80} alt="Логотип" />
                    </div>
                </footer>
            </div>
        </WhiteContainer>
    )
}
