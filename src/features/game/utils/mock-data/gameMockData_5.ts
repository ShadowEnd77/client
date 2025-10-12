import { Game } from "../../../../types/entities";
//import cover from '../../../../assets/game_5/cover.jpg'; //НАЙТИ ОБЛОЖКУ ДЛЯ ИГРЫ 5
import cover from '/game_5/cover.jpg' // удалить, оставить строку выше
import i_1_1 from '/game_5/1_1.jpg'
import i_1_2 from '/game_5/1_2.jpg'
import i_2_1 from '/game_5/2_1.jpg'
import i_2_2 from '/game_5/2_2.jpg'
import i_3_1 from '/game_5/3_1.jpg'
import i_3_2 from '/game_5/3_2.jpg'
import i_4_1 from '/game_5/4_1.jpg'
import i_4_2 from '/game_5/4_2.jpg'
import i_5_1 from '/game_5/5_1.jpg'
import i_5_2 from '/game_5/5_2.jpg'
import i_6_1 from '/game_5/6_1.jpg'
import i_6_2 from '/game_5/6_2.jpg'
import i_7_1 from '/game_5/7_1.jpg'

import a_1_1 from '/game_5/aud_1_1.mp3'
import a_1_2 from '/game_5/aud_1_2.mp3'
import a_1_3 from '/game_5/aud_1_3.mp3'
import a_1_4 from '/game_5/aud_1_4.mp3'
import a_2_1 from '/game_5/aud_2_1.mp3'
import a_2_2 from '/game_5/aud_2_2.mp3'
// import a_2_3 from '/game_5/aud_2_3.mp3' // фраза <<Бульдозер колеблется, но соглашается. Спор заканчивается без ссоры. Малыши радуются, песочница оживает.>> сейчас отсутствует
import a_3_1 from '/game_5/aud_3_1.mp3'
import a_3_2 from '/game_5/aud_3_2.mp3'
import a_3_3 from '/game_5/aud_3_3.mp3'
import a_end from '/game_5/aud_end.mp3'


export const mockGame: Game = {
  id: 5,
  game_group_id: 1,
  title: "Когда не хочется молчать",
  t_voice: "",
  cover_image: cover,
  description: "Живое и интригующее — сразу говорит о конфликте и внутреннем напряжении. Ребёнок захочет узнать, что будет дальше",
  duration: 3,
  scenes: [
    {
      id: 1,
      order: 1,
      type: "dialogue",
      payload: {
        score: 0,
        achievement: null,
        next_scene_id: 2,
        dialogues: [
          {
            image: i_1_1,
            voice: a_1_1,
            name: "",
            text: "Азот возвращается домой после школы. Погода солнечная, дети играют во дворе. Вдруг он замечает Бульдозера, одноклассника, который с сердитым видом спорит с младшими ребятами у песочницы."
          },
          {
            image: i_1_2,
            voice: a_1_2,
            name: "Бульдозер",
            text: "Уходите отсюда! Это наша площадка. Мы тут главные!" // Младшие дети испуганно смотрят и отходят в сторону.
          }
        ]
      }
    },
    {
      id: 2,
      order: 1,
      type: "dialogue",
      payload: {
        score: 0,
        achievement: null,
        next_scene_id: 3,
        dialogues: [
          {
            image: i_2_1,
            voice: a_1_3,
            name: "Азот",
            text: "Привет, Бульдозер. Почему ты их прогоняешь?"
          },
          {
            image: i_2_2,
            voice: a_1_4,
            name: "Бульдозер:",
            text: "А что, ты за них? Ты тоже хочешь в песок полететь?"
          }
        ]
      }
    },
    {
      id: 3,
      order: 1,
      type: "choice",
      payload: {
        score: 1,
        achievement: null,
        next_scene_id: null,
        description: "Выбери что Азот ответит Бульдозеру",
        dialogues: [
          {
            image: '',
            voice: "",
            name: "",
            text: "Азот должен сделать выбор"
          }
        ],
        choices: [
          {
            text: "Нет. Просто хочу, чтобы все играли спокойно. Драться не нужно.",
            next_scene_id: 4
          },
          {
            text: "Ты мне надоел. Сейчас сам получишь!",
            next_scene_id: 6
          }
        ]
      }
    },
    {
      id: 4,
      order: 1,
      type: "dialogue",
      payload: {
        score: 0,
        achievement: null,
        next_scene_id: 5,
        dialogues: [
          {
            image: i_3_1,
            voice: a_2_1,
            name: "",
            text: "Азот спокойно смотрит на Бульдозера и предлагает:"
          },
          {
            image: i_3_2,
            voice: a_2_2,
            name: "Азот",
            text: "Давай лучше сыграем в мяч, а малыши пусть строят замок."
          }
        ]
      }
    },
    {
      id: 5,
      order: 1,
      type: "dialogue",
      payload: {
        score: 0,
        achievement: {
          title: "Ты разрядил конфликт и сохранил дружбу",
          cover_image: i_4_2
        },
        next_scene_id: 8,
        dialogues: [
          {
            image: i_4_1,

            //voice: a_2_3,
            voice: '',
            name: "",
            text: "Бульдозер колеблется, но соглашается. Спор заканчивается без ссоры. Малыши радуются, песочница оживает."
          }
        ]
      }
    },
    {
      id: 6,
      order: 1,
      type: "dialogue",
      payload: {
        score: 0,
        achievement: null,
        next_scene_id: 7,
        dialogues: [
          {
            image: i_5_1,
            voice: a_3_1,
            name: "",
            text: "Азот бросает сердитую фразу, и начинается ссора. Оба злятся, появляются обидные слова. Младшие дети убегают."
          },
          {
            image: i_5_2,
            voice: a_3_2,
            name: "",
            text: "Позже Азоту становится грустно."
          }
        ]
      }
    },
    {
      id: 7,
      order: 1,
      type: "dialogue",
      payload: {
        score: 0,
        achievement: {
          title: "Ты понял, как важно сохранять контроль. Теперь знаешь, как быть лучше.",
          cover_image: i_6_2
        },
        next_scene_id: 8,
        dialogues: [
          {
            image: i_6_1,
            voice: a_3_3,
            name: "",
            text: "Дома он рассказывает взрослым, и вместе они обсуждают, как можно было поступить иначе."
          }
        ]
      }
    },
    // под вопросом
    {
      id: 8,
      order: 1,
      type: "match",
      payload: {
        next_scene_id: 9,
        achievement: null,
        score: 1,
        pairs: [
          { k: "Давайте играть по очереди!", v: "Mир" },
          { k: "Хочешь — будем командой!", v: "Мир" },
          { k: "Уходи сам!", v: "Ccора" },
          { k: "Я тебя сейчас…!", v: "Ссора" }
        ]
      }
    },
    {
      id: 9,
      order: 1,
      type: "dialogue",
      payload: {
        score: 0,
        achievement: {
          title: "Мастер спокойствия",
          cover_image: ''
        },
        next_scene_id: null,
        dialogues: [
          {
            image: i_7_1,
            voice: a_end,
            name: "Азот",
            text: "Иногда хочется вспылить. Но спокойствие — это сила. Когда ты умеешь выбирать слова — ты становишься сильнее"
          }
        ]
      }
    }
  ]
};
