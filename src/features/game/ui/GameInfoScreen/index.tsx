import styles from './gameInfoScreen.module.scss'
import { WhiteContainer } from '../../../../ui/components/containers/WhiteContainer'
import { Button } from '../../../../ui/components/buttons/Button'
import { logoIcon } from '../../../../ui/icons'

export const GameInfoScreen = () => {
    return (
        <WhiteContainer className={styles.section}>
            <div className={styles.gameImage}>

            </div>
            <div className={styles.gameInfo}>
                <header className={styles.gameInfoHeader}>
                    <span className={styles.gameInfoCaption}>Тебе подойдет игра</span>
                </header>
                <div className={styles.gameInfoText}>
                    <h1 className={styles.gameInfoTitle}>«Где я — там и выбор»</h1>
                    <div className={styles.gameInfoDescription}>
                        <p>A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                </div>
                <footer className={styles.gameInfoFooter}>
                    <div className={styles.gameInfoDuration}>
                        <span>Примерная длительность 6 мин.</span>
                    </div>
                    <div className={styles.gameInfoBottom}>
                        <Button classNames={{ button: styles.gameInfoButton }}>Играть</Button>
                        <img src={logoIcon} height={26} width={80} alt="Логотип" />
                    </div>
                </footer>
            </div>
        </WhiteContainer>
    )
}
