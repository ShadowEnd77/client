import styles from './gameInfoScreen.module.scss'
import { WhiteContainer } from '../../../../ui/components/containers/WhiteContainer'
import { Button } from '../../../../ui/components/buttons/Button'
import { clockIcon, logoIcon } from '../../../../ui/icons'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { useNavigate } from 'react-router'


export const GameInfoScreen = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { data, statuses } = useAppSelector(state => state.game)
    //const params = useParams()

    const handleStartPlay = () => {
        navigate("/game/progress")
    }

    return (
        <WhiteContainer className={styles.section}>
            <div style={{ backgroundImage: `url(${data.cover_image})` }} className={styles.gameImage} />
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
