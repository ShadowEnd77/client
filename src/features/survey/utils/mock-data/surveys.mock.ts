import { GetSurveysRes } from "../../../../types/api/survey.api.types";

import q_1 from '/survey/Q1.mp3'
import q_2 from '/survey/Q2.mp3'
import q_3 from '/survey/Q3.mp3'
import q_4 from '/survey/Q4.mp3'
import q_5 from '/survey/Q5.mp3'
import q_6 from '/survey/Q6.mp3'
import q_7 from '/survey/Q7.mp3'
import q_8 from '/survey/Q8.mp3'
import q_9 from '/survey/Q9.mp3'
import q_10 from '/survey/Q10.mp3'
import q_11 from '/survey/Q11.mp3'
import q_12 from '/survey/Q12.mp3'
import q_13 from '/survey/Q13.mp3'
import q_14 from '/survey/Q14.mp3'
import q_15 from '/survey/Q15.mp3'
import q_16 from '/survey/Q16.mp3'
import q_17 from '/survey/Q17.mp3'
import q_18 from '/survey/Q18.mp3'
import q_19 from '/survey/Q19.mp3'
import q_20 from '/survey/Q20.mp3'
import q_21 from '/survey/Q21.mp3'
import q_22 from '/survey/Q22.mp3'
import q_23 from '/survey/Q23.mp3'
import q_24 from '/survey/Q24.mp3'
import q_25 from '/survey/Q25.mp3'
import q_26 from '/survey/Q26.mp3'
import q_27 from '/survey/Q27.mp3'
import q_28 from '/survey/Q28.mp3'
import q_29 from '/survey/Q29.mp3'
import q_30 from '/survey/Q30.mp3'

export const mockSurveys: GetSurveysRes = {
    surveys: [
        {
            id: 1,
            title: "Опрос 'Как я веду себя'",
            questions: [
                { id: 1, text: "Я легко теряю терпение", voice: q_1, group_id: 1, options: [ { id: 1, text: "Да", order: 1 }, { id: 2, text: "Нет", order: 2 } ] },
                { id: 2, text: "Если меня обидели, то я обязательно отомщу", voice: q_2, group_id: 1, options: [ { id: 3, text: "Да", order: 1 }, { id: 4, text: "Нет", order: 2 } ] },
                { id: 3, text: "Часто я злю других специально", voice: q_3, group_id: 1, options: [ { id: 5, text: "Да", order: 1 }, { id: 6, text: "Нет", order: 2 } ] },
                { id: 4, text: "Я очень редко ссорюсь с родными", voice: q_4, group_id: 1, options: [ { id: 7, text: "Да", order: 1 }, { id: 8, text: "Нет", order: 2 } ] },
                { id: 5, text: "Я не люблю, когда мне делают замечания", voice: q_5, group_id: 1, options: [ { id: 9, text: "Да", order: 1 }, { id: 10, text: "Нет", order: 2 } ] },
                { id: 6, text: "Мне нравится делать что-то опасное", voice: q_6, group_id: 2, options: [ { id: 11, text: "Да", order: 1 }, { id: 12, text: "Нет", order: 2 } ] },
                { id: 7, text: "Я люблю испытывать страх", voice: q_7, group_id: 2, options: [ { id: 13, text: "Да", order: 1 }, { id: 14, text: "Нет", order: 2 } ] },
                { id: 8, text: "Если кого-то обижают, то я не вмешиваюсь", voice: q_8, group_id: 2, options: [ { id: 15, text: "Да", order: 1 }, { id: 16, text: "Нет", order: 2 } ] },
                { id: 9, text: "Я иногда нарушаю установленные взрослыми правила", voice: q_9, group_id: 2, options: [ { id: 17, text: "Да", order: 1 }, { id: 18, text: "Нет", order: 2 } ] },
                { id: 10, text: "Я люблю острые ощущения", voice: q_10, group_id: 2, options: [ { id: 19, text: "Да", order: 1 }, { id: 20, text: "Нет", order: 2 } ] },
                { id: 11, text: "Я жду помощи от взрослых", voice: q_11, group_id: 3, options: [ { id: 21, text: "Да", order: 1 }, { id: 22, text: "Нет", order: 2 } ] },
                { id: 12, text: "Я не могу отказать, когда меня о чем-то просят", voice: q_12, group_id: 3, options: [ { id: 23, text: "Да", order: 1 }, { id: 24, text: "Нет", order: 2 } ] },
                { id: 13, text: "Я не общаюсь со сверстниками, так как они меня обижают", voice: q_13, group_id: 3, options: [ { id: 25, text: "Да", order: 1 }, { id: 26, text: "Нет", order: 2 } ] },
                { id: 14, text: "Мне трудно просить других о помощи", voice: q_14, group_id: 3, options: [ { id: 27, text: "Да", order: 1 }, { id: 28, text: "Нет", order: 2 } ] },
                { id: 15, text: "Мне часто кажется, что я не справлюсь", voice: q_15, group_id: 3, options: [ { id: 29, text: "Да", order: 1 }, { id: 30, text: "Нет", order: 2 } ] },
                { id: 16, text: "Верю всему, что говорят по радио и телевидению", voice: q_16, group_id: 4, options: [ { id: 31, text: "Да", order: 1 }, { id: 32, text: "Нет", order: 2 } ] },
                { id: 17, text: "Я доверяю незнакомым людям", voice: q_17, group_id: 4, options: [ { id: 33, text: "Да", order: 1 }, { id: 34, text: "Нет", order: 2 } ] },
                { id: 18, text: "Иногда я делаю не думая", voice: q_18, group_id: 4, options: [ { id: 35, text: "Да", order: 1 }, { id: 36, text: "Нет", order: 2 } ] },
                { id: 19, text: "Другие люди кажутся счастливее меня", voice: q_19, group_id: 4, options: [ { id: 37, text: "Да", order: 1 }, { id: 38, text: "Нет", order: 2 } ] },
                { id: 20, text: "Я всегда соглашаюсь с окружающими", voice: q_20, group_id: 4, options: [ { id: 39, text: "Да", order: 1 }, { id: 40, text: "Нет", order: 2 } ] },
                { id: 21, text: "Меня часто обижают", voice: q_21, group_id: 5, options: [ { id: 41, text: "Да", order: 1 }, { id: 42, text: "Нет", order: 2 } ] },
                { id: 22, text: "Я часто попадаю в беду", voice: q_22, group_id: 5, options: [ { id: 43, text: "Да", order: 1 }, { id: 44, text: "Нет", order: 2 } ] },
                { id: 23, text: "Я часто чувствую, что все против меня", voice: q_23, group_id: 5, options: [ { id: 45, text: "Да", order: 1 }, { id: 46, text: "Нет", order: 2 } ] },
                { id: 24, text: "Меня часто дразнят", voice: q_24, group_id: 5, options: [ { id: 47, text: "Да", order: 1 }, { id: 48, text: "Нет", order: 2 } ] },
                { id: 25, text: "Я не умею защищаться", voice: q_25, group_id: 5, options: [ { id: 49, text: "Да", order: 1 }, { id: 50, text: "Нет", order: 2 } ] },
                { id: 26, text: "Я никогда никого не обижал", voice: q_26, group_id: 6, options: [ { id: 51, text: "Да", order: 1 }, { id: 52, text: "Нет", order: 2 } ] },
                { id: 27, text: "Я всегда слушаюсь взрослых", voice: q_27, group_id: 6, options: [ { id: 53, text: "Да", order: 1 }, { id: 54, text: "Нет", order: 2 } ] },
                { id: 28, text: "У меня не бывает плохого настроения", voice: q_28, group_id: 6, options: [ { id: 55, text: "Да", order: 1 }, { id: 56, text: "Нет", order: 2 } ] },
                { id: 29, text: "Я всегда говорю правду", voice: q_29, group_id: 6, options: [ { id: 57, text: "Да", order: 1 }, { id: 58, text: "Нет", order: 2 } ] },
                { id: 30, text: "Я никогда не злюсь", voice: q_30, group_id: 6, options: [ { id: 59, text: "Да", order: 1 }, { id: 60, text: "Нет", order: 2 } ] },
            ]
        },
    ]
};