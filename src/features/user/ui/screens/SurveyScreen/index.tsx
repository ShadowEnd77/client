import styles from './surveyScreen.module.scss'
import { logoIcon } from '../../../../../ui/icons'
import { WhiteContainer } from '../../../../../ui/components/containers/WhiteContainer'
import { Button } from '../../../../../ui/components/buttons/Button'

export const SurveyScreen = () => {
    return (
        <WhiteContainer className={styles.section}>
            <header className={styles.header}>
                <h1 className={`${styles.title}`}>Тестирование</h1>
                <img src={logoIcon} height={20} width={63} alt="Логотип" />
            </header>
            <section className={styles.survey}>
                <header className={styles.surveyHeader}>
                    <h2 className={styles.surveyTitle}>Вопрос 8/14</h2>
                    <div className={`surveyProgressWrapper ${styles.progressBar}`}>
                        <div style={{ width: "40%" }} className={`surveyProgress ${styles.line}`}></div>
                    </div>
                </header>
                <div className={styles.surveyDescription}>
                    <p>
                        Как только я просыпаюсь я сразу беру в руки телефон
                    </p>
                </div>
                <div className={styles.surveyControls}>
                    <span className={styles.suggestion}>Выберите вариант ответа</span>
                    <div className={styles.buttons}>
                        <Button classNames={{ button: styles.buttonNo }}>
                            Нет
                        </Button>
                        <Button>
                            Да
                        </Button>
                    </div>
                </div>
            </section>
        </WhiteContainer>
    )
}
