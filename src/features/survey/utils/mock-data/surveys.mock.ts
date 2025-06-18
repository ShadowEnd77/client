import { GetSurveysRes } from "../../../../types/api/survey.api.types";

export const mockSurveys: GetSurveysRes = {
    surveys: [
        {
            id: 1,
            title: "Опрос об удовлетворенности учебой",
            questions: [
                {
                    id: 101,
                    text: "Насколько вам нравится ваша школа?",
                    options: [
                        { id: 1001, text: "Нравится", order: 1 },
                        { id: 1002, text: "Не нравится", order: 2 }
                    ]
                },
                {
                    id: 102,
                    text: "Как часто вы делаете домашнее задание?",
                    options: [
                        { id: 1003, text: "Регулярно", order: 1 },
                        { id: 1004, text: "Редко", order: 2 }
                    ]
                }
            ]
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