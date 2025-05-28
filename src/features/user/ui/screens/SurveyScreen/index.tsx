import styles from './surveyScreen.module.scss'
import { logoIcon, smileIcon } from '../../../../../ui/icons'
import { WhiteContainer } from '../../../../../ui/components/containers/WhiteContainer'
import { Button } from '../../../../../ui/components/buttons/Button'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { useEffect } from 'react'
import { answerTheQuestion, getSurvey, sendSurvey } from '../../../../survey/slices/surveySlice'
import { SurveyAnswer } from '../../../../../types/entities'
import { Loader } from '../../../../../ui/components/service/Loader'

export const SurveyScreen = () => {
    const dispatch = useAppDispatch()

    const {
        data,
        test_passed,
        questions,
        current_question_id,
        available_answers,
        answered_count,
        sending_statuses
    } = useAppSelector(state => state.survey)

    const currentQuestion = questions.items.find(item => item.id == current_question_id)

    const onAnswer = (answer: SurveyAnswer) => {
        dispatch(answerTheQuestion(answer))
    }

    const onSubmit = () => {
        dispatch(sendSurvey(data))
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
                    !questions.statuses.loading ?
                        test_passed ?
                            <div className={styles.surveyPassed}>
                                <img height={160} width={160} src={smileIcon} alt="" />
                                <h2 className={styles.surveyTitle}>Спасибо тебе <br /> за пройденный опрос!</h2>
                                <div className={styles.buttons}>
                                    <Button isLoading={sending_statuses.loading} onClick={onSubmit} classNames={{ button: `${styles.surveyButton}` }} >
                                        Отправить ответы
                                    </Button>
                                </div>

                            </div>
                            : <>
                                <header className={styles.surveyHeader}>
                                    <h2 className={styles.surveyTitle}>
                                        <div className={styles.surveyTitleInner}>
                                            <span className={styles.surveyQuestionLabel}>Вопрос</span>&nbsp;
                                            <span className={styles.surveyQuestionCount}>{getAnsweredProgress()}/{questions.items.length}</span>
                                        </div>
                                    </h2>
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
                                        <Button onClick={() => onAnswer(1)} classNames={{ button: `${styles.surveyButton}` }} >
                                            {available_answers[1]}
                                        </Button>
                                    </div>
                                </div>
                            </>
                        :
                        <div className={styles.surveyPreloader}>
                            <Loader width={130} height={130} />
                            <span className={styles.surveyPreloaderText}>
                                Подождите, загружаем вопросы...
                            </span>
                        </div>

                }
            </div>
        </WhiteContainer >
    )
}
