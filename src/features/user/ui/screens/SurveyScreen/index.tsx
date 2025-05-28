import styles from './surveyScreen.module.scss'
import { logoIcon } from '../../../../../ui/icons'
import { WhiteContainer } from '../../../../../ui/components/containers/WhiteContainer'
import { Button } from '../../../../../ui/components/buttons/Button'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { useEffect } from 'react'
import { answerTheQuestion, getSurvey } from '../../../../survey/slices/surveySlice'
import { SurveyAnswer } from '../../../../../types/entities'

export const SurveyScreen = () => {
    const dispatch = useAppDispatch()

    const {
        data,
        test_passed,
        questions,
        current_question_id,
        available_answers,
        answered_count
    } = useAppSelector(state => state.survey)

    const currentQuestion = questions.items.find(item => item.id == current_question_id)

    const onAnswer = (answer: SurveyAnswer) => {
        dispatch(answerTheQuestion(answer))
    }

    const getAnsweredProgress = () => {
        if (test_passed) {
            return questions.items.length
        }
        return answered_count + 1
    }

    useEffect(() => {
        dispatch(getSurvey(null))
    }, [])

    return (
        <WhiteContainer className={styles.section}>
            <header className={styles.header}>
                <h1 className={`${styles.title}`}>Тестирование</h1>
                <img src={logoIcon} height={20} width={63} alt="Логотип" />
            </header>

            <div className={styles.survey}>
                {
                    test_passed ?
                        <div className={styles.surveyPassed}>
                            <h2 className={styles.surveyTitle}>Спасибо тебе <br /> за пройденный опрос!</h2>
                            <div className={styles.buttons}>
                                <Button classNames={{ button: `${styles.surveyButton}` }} onClick={() => onAnswer(1)}>
                                    Отправить ответы
                                </Button>
                            </div>

                        </div>

                        : <>
                            <header className={styles.surveyHeader}>
                                <h2 className={styles.surveyTitle}>Вопрос {getAnsweredProgress()}/{questions.items.length}</h2>
                                <div className={`surveyProgressWrapper ${styles.progressBar}`}>
                                    <div
                                        style={{ width: `${getAnsweredProgress() / questions.items.length * 100}%` }}
                                        className={`surveyProgress ${styles.line}`} />
                                </div>
                            </header>
                            <div className={styles.surveyDescription}>
                                <p>{currentQuestion?.text}</p>
                            </div>
                            <div className={styles.surveyControls}>
                                <span className={styles.suggestion}>Выберите вариант ответа</span>
                                <div className={styles.buttons}>
                                    <Button onClick={() => onAnswer(0)} classNames={{ button: `${styles.buttonNo} ${styles.surveyButton}` }}>
                                        {available_answers[0]}
                                    </Button>
                                    <Button classNames={{ button: `${styles.surveyButton}` }} onClick={() => onAnswer(1)}>
                                        {available_answers[1]}
                                    </Button>
                                </div>
                            </div>
                        </>
                }
            </div>
        </WhiteContainer>
    )
}
