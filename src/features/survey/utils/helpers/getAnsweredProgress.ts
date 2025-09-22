export const getAnsweredProgress = (
    survey_passed: boolean,
    answers_data: any,
    questions_length: number
): number => {
    if (!survey_passed) {
        return Object.keys(answers_data).length + 1
    }
    return questions_length
}