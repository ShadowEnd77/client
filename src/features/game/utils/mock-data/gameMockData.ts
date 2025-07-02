import { Game } from "../../../../types/entities";
import cover from '../../../../assets/game_1/cover_1.png'
import i1_1 from '../../../../assets/game_1/scenes/scene_1/image_1.png'
import i1_2 from '../../../../assets/game_1/scenes/scene_1/image_2.png'

import i2_1 from '../../../../assets/game_1/scenes/scene_2/image_1.png'
import i2_2 from '../../../../assets/game_1/scenes/scene_2/image_2.png'


import i3_1 from '../../../../assets/game_1/scenes/scene_3/image_1.png'
import i3_2 from '../../../../assets/game_1/scenes/scene_3/image_1.png'


import i4_1 from '../../../../assets/game_1/scenes/scene_4/image_1.png'
import i4_2 from '../../../../assets/game_1/scenes/scene_4/image_2.png'

import i5_1 from '../../../../assets/game_1/scenes/scene_5/image_1.png'
import i5_2 from '../../../../assets/game_1/scenes/scene_5/image_2.png'

import i6_1 from '../../../../assets/game_1/scenes/scene_6/image_1.png'
import i6_2 from '../../../../assets/game_1/scenes/scene_6/image_2.png'
import audio1 from "../../../../assets/audio/voice_1.mp3"
import audio2 from "../../../../assets/audio/voice_2.mp3"


export const mockGame: Game = {
  id: 1,
  title: "Где я - там и выбор",
  cover_image: cover,
  description: "Интерактивное приключение с загадками и моральными выборами",
  duration: 2,
  scenes: [

    // 1. Введение (диалог)
    {
      id: 1,
      order: 1,
      type: "dialogue",
      payload: {
        score: 0,
        achievement: {
          title: "Лучший игрок",
          cover_image: i3_2
        },
        next_scene_id: 2,
        dialogues: [
          {
            image: i1_1,
            voice: audio1,
            name: "Учитель",
            text: "Сегодня командная игра. Главное — уважение к друг другу и работа в команде"
          },
          {
            image: i1_2,
            voice: audio2,
            name: "Бульдозер",
            text: "Давайте быстрее! Я предлагаю, чтобы я был капитаном. Мы точно победим. Кто со мной - не пожалееет!"
          }
        ]
      }
    },

    // 2. Первый выбор (choice)
    {
      id: 2,
      order: 2,
      type: "dialogue",
      payload: {
        score: 0,
        achievement: {
          title: "Лучший игрок",
          cover_image: i3_2
        },
        next_scene_id: 3,
        dialogues: [
          // {
          //   image: i2_1,
          //   voice: "https://example.com/voices/narrator2.mp3",
          //   name: "",
          //   text: "Азот колеблется и переживает"
          // },
          {
            image: i2_2,
            voice: audio2,
            name: "",
            text: "*Азот не хотел бы подчиняться Бульдозеру*"
          }
        ]
      }
    },

    {
      id: 3,
      order: 3,
      type: "choice",
      payload: {
        score: 1,
        achievement: null,
        next_scene_id: null,
        description: "Помоги сделать выбор азоту",
        dialogues: [
          {
            image: i3_1,
            voice: audio1,
            name: "",
            text: "Азот должен сделать выбор"
          }
        ],
        choices: [
          {
            text: "Я выберу свою команду — с кем мне комфортно работать",
            next_scene_id: 4
          },
          {
            text: "Все пошли к Бульдозеру — пойду тоже, чтобы не быть 'против'",
            next_scene_id: 4
          },
          {
            text: "Я просто подожду — может, всё само решится",
            next_scene_id: 4
          }
        ]
      }
    },

    // 4. Тенистая тропка (диалог)
    {
      id: 4,
      order: 4,
      type: "dialogue",
      payload: {
        score: 0,
        achievement: null,
        next_scene_id: 10,
        dialogues: [
          {
            image: i4_1,
            voice: "",
            name: "Азот",
            text: "Пусть мы и не побеждаем, но мне важно, чтобы мы уважали друг друга и слушали идеи."
          },
          {
            image: i4_2,
            voice: audio2,
            name: "Учитель",
            text: "Выбор Азота — зрелый и осознанный. Это пример уважения к себе и другим!"
          }
        ]
      }
    },
    {
      id: 10,
      order: 4,
      type: "match",
      payload: {
        next_scene_id: null,
        achievement: null,
        score: 1,
        pairs: [
          { k: "Ты с нами или против", v: "Я выбираю по-своему — это не значит “против”" },
          { k: "Только слабые не идут с нами!", v: "Быть собой — не слабость" },
          { k: "Ты странный!", v: "Я просто не такой как ты — и это нормально" },
          { k: "А что, если ты ошибаешься?", v: "Значит, я сам узнаю и научусь" }
        ]
      }
    },

    // // 5. Встреча с феей (choice)
    // {
    //   id: 5,
    //   order: 5,
    //   type: "choice",
    //   payload: {
    //     dialogues: [
    //       {
    //         image: "https://example.com/fairy-question.jpg",
    //         voice: "https://example.com/voices/fairy2.mp3",
    //         name: "Фея",
    //         text: "Ответь на мою загадку, и я дам тебе волшебный дар!"
    //       }
    //     ],
    //     choices: [
    //       {
    //         text: "Согласиться на загадку",
    //         next_scene_id: 6
    //       },
    //       {
    //         text: "Вежливо отказаться",
    //         next_scene_id: 7
    //       },
    //       {
    //         text: "Попытаться обмануть фею",
    //         next_scene_id: 8
    //       }
    //     ]
    //   }
    // },

    // // 6. Загадка феи (диалог)
    // {
    //   id: 6,
    //   order: 6,
    //   type: "dialogue",
    //   payload: {
    //     dialogues: [
    //       {
    //         image: "https://example.com/fairy-riddle.jpg",
    //         voice: "https://example.com/voices/fairy3.mp3",
    //         name: "Фея",
    //         text: "Что можно увидеть с закрытыми глазами?"
    //       },
    //       {
    //         image: "https://example.com/narrator.jpg",
    //         voice: "https://example.com/voices/narrator5.mp3",
    //         name: "Рассказчик",
    //         text: "Вы правильно ответили - 'сон'! Фея дарит вам волшебный кристалл."
    //       }
    //     ]
    //   }
    // },

    // // 7. Отказ от загадки (диалог)
    // {
    //   id: 7,
    //   order: 7,
    //   type: "dialogue",
    //   payload: {
    //     dialogues: [
    //       {
    //         image: "https://example.com/fairy-sad.jpg",
    //         voice: "https://example.com/voices/fairy4.mp3",
    //         name: "Фея",
    //         text: "Как жаль... Возможно, в другой раз."
    //       },
    //       {
    //         image: "https://example.com/narrator.jpg",
    //         voice: "https://example.com/voices/narrator6.mp3",
    //         name: "Рассказчик",
    //         text: "Фея исчезает в сиянии света, оставляя вас наедине с лесом."
    //       }
    //     ]
    //   }
    // },

    // // 8. Обман феи (диалог)
    // {
    //   id: 8,
    //   order: 8,
    //   type: "dialogue",
    //   payload: {
    //     dialogues: [
    //       {
    //         image: "https://example.com/fairy-angry.jpg",
    //         voice: "https://example.com/voices/fairy5.mp3",
    //         name: "Фея",
    //         text: "Ты думаешь, можешь обмануть волшебное существо?!"
    //       },
    //       {
    //         image: "https://example.com/narrator.jpg",
    //         voice: "https://example.com/voices/narrator7.mp3",
    //         name: "Рассказчик",
    //         text: "Фея превращает вас в дерево на целый час в наказание за ложь."
    //       }
    //     ]
    //   }
    // },

    // // 9. Финал (choice)
    // {
    //   id: 9,
    //   order: 9,
    //   type: "choice",
    //   payload: {
    //     dialogues: [
    //       {
    //         image: "https://example.com/forest-exit.jpg",
    //         voice: "https://example.com/voices/narrator8.mp3",
    //         name: "Рассказчик",
    //         text: "Вы видите выход из леса. Что будете делать?"
    //       }
    //     ],
    //     choices: [
    //       {
    //         text: "Выйти из леса",
    //         next_scene_id: 10
    //       },
    //       {
    //         text: "Остаться и исследовать дальше",
    //         next_scene_id: 11
    //       }
    //     ]
    //   }
    // },

    // // 10. Хорошая концовка (диалог)
    // {
    //   id: 10,
    //   order: 10,
    //   type: "dialogue",
    //   payload: {
    //     dialogues: [
    //       {
    //         image: "https://example.com/happy-end.jpg",
    //         voice: "https://example.com/voices/narrator9.mp3",
    //         name: "Рассказчик",
    //         text: "Вы возвращаетесь домой с удивительными историями и мудростью."
    //       },
    //       {
    //         image: "https://example.com/old-man-end.jpg",
    //         voice: "https://example.com/voices/oldman2.mp3",
    //         name: "Старец",
    //         text: "Вижу, лес преподал тебе ценный урок. Возвращайся, когда будешь готов к новым приключениям!"
    //       }
    //     ]
    //   }
    // }
  ]
};