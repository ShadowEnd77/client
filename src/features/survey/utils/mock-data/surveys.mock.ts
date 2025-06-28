import { GetSurveysRes } from "../../../../types/api/survey.api.types";

export const mockSurveys: GetSurveysRes = {
    surveys: [
        {
            id: 1,
            title: "Опрос 'Как я веду себя'",
            questions: [
                {
                    id: 1,
                    text: "Я легко теряю терпение",
                    options: [
                        { id: 1, text: "Да", order: 1 },
                        { id: 2, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 2,
                    text: "Если меня обидели, то я обязательно отомщу",
                    options: [
                        { id: 3, text: "Да", order: 1 },
                        { id: 4, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 3,
                    text: "Часто я злю других специально",
                    options: [
                        { id: 5, text: "Да", order: 1 },
                        { id: 6, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 4,
                    text: "Я очень редко ссорюсь с родными",
                    options: [
                        { id: 7, text: "Да", order: 1 },
                        { id: 8, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 5,
                    text: "Я не люблю, когда мне делают замечания",
                    options: [
                        { id: 9, text: "Да", order: 1 },
                        { id: 10, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 6,
                    text: "Мне нравится делать что-то опасное",
                    options: [
                        { id: 11, text: "Да", order: 1 },
                        { id: 12, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 7,
                    text: "Я люблю испытывать страх",
                    options: [
                        { id: 13, text: "Да", order: 1 },
                        { id: 14, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 8,
                    text: "Если кого-то обижают, то я не вмешиваюсь",
                    options: [
                        { id: 15, text: "Да", order: 1 },
                        { id: 16, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 9,
                    text: "Я иногда нарушаю установленные взрослыми правила",
                    options: [
                        { id: 17, text: "Да", order: 1 },
                        { id: 18, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 10,
                    text: "Я люблю острые ощущения",
                    options: [
                        { id: 19, text: "Да", order: 1 },
                        { id: 20, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 11,
                    text: "Я жду помощи от взрослых",
                    options: [
                        { id: 21, text: "Да", order: 1 },
                        { id: 22, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 12,
                    text: "Я могу отказать, когда меня о чем-то просят",
                    options: [
                        { id: 23, text: "Да", order: 1 },
                        { id: 24, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 13,
                    text: "Я не общаюсь со сверстниками, так как они меня обижают",
                    options: [
                        { id: 25, text: "Да", order: 1 },
                        { id: 26, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 14,
                    text: "Мне нетрудно просить других о помощи",
                    options: [
                        { id: 27, text: "Да", order: 1 },
                        { id: 28, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 15,
                    text: "Мне часто кажется, что я не справлюсь",
                    options: [
                        { id: 29, text: "Да", order: 1 },
                        { id: 30, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 16,
                    text: "Верю всему, что говорят по радио и телевидению",
                    options: [
                        { id: 31, text: "Да", order: 1 },
                        { id: 32, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 17,
                    text: "Я не доверяю незнакомым людям",
                    options: [
                        { id: 33, text: "Да", order: 1 },
                        { id: 34, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 18,
                    text: "Иногда я делаю не думая",
                    options: [
                        { id: 35, text: "Да", order: 1 },
                        { id: 36, text: "Нет", order: 2 }
                    ]
                }]
        },
        {

            id: 2,
            title: "Опрос о внеклассных занятиях",
            questions: [
                {
                    id: 201,
                    text: "Какие кружки вы посещаете?",
                    options: [
                        { id: 2001, text: "Посещаю кружки", order: 1 },
                        { id: 2002, text: "Не посещаю кружки", order: 2 }
                    ]
                },
                {
                    id: 202,
                    text: "Сколько часов в неделю вы уделяете внеклассным занятиям?",
                    options: [
                        { id: 2003, text: "Меньше 3 часов", order: 1 },
                        { id: 2004, text: "Больше 3 часов", order: 2 }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Опрос о школьном питании",
            questions: [
                {
                    id: 301,
                    text: "Удовлетворены ли вы качеством школьного питания?",
                    options: [
                        { id: 3001, text: "Да", order: 1 },
                        { id: 3002, text: "Нет", order: 2 }
                    ]
                },
                {
                    id: 302,
                    text: "Как часто вы питаетесь в школьной столовой?",
                    options: [
                        { id: 3003, text: "Каждый день", order: 1 },
                        { id: 3004, text: "Иногда", order: 2 }
                    ]
                }
            ]
        }
    ]
};