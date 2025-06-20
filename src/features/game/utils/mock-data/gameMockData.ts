import { Game } from "../../../../types/entities";

export const mockGame: Game = {
  id: 1,
  title: "Путешествие в зачарованный лес",
  cover: "https://example.com/forest-cover.jpg",
  description: "Интерактивное приключение с загадками и моральными выборами",
  duration: 45,
  scenes: [
    // 1. Введение (диалог)
    {
      id: 1,
      order: 1,
      type: "dialog",
      payload: {
        dialogues: [
          {
            image: "https://example.com/narrator.jpg",
            voice: "https://example.com/voices/narrator1.mp3",
            name: "Рассказчик",
            text: "Ты стоишь на опушке зачарованного леса. Легенды гласят, что здесь исполняются желания..."
          },
          {
            image: "https://example.com/old-man.jpg",
            voice: "https://example.com/voices/oldman1.mp3",
            name: "Старец",
            text: "Но будь осторожен, путник - каждое решение меняет твою судьбу!"
          }
        ]
      }
    },

    // 2. Первый выбор (choice)
    {
      id: 2,
      order: 2,
      type: "choice",
      payload: {
        dialogues: [
          {
            image: "https://example.com/path-split.jpg",
            voice: "https://example.com/voices/narrator2.mp3",
            name: "Рассказчик",
            text: "Перед тобой расходятся две тропинки..."
          }
        ],
        choices: [
          {
            text: "Пойти по солнечной тропе",
            next_scene_id: 3
          },
          {
            text: "Свернуть на тенистую тропку",
            next_scene_id: 4
          }
        ]
      }
    },

    // 3. Солнечная тропа (диалог)
    {
      id: 3,
      order: 3,
      type: "dialog",
      payload: {
        dialogues: [
          {
            image: "https://example.com/sunny-path.jpg",
            voice: "https://example.com/voices/narrator3.mp3",
            name: "Рассказчик",
            text: "Яркий свет слепит глаза, но в воздухе витает аромат цветов."
          },
          {
            image: "https://example.com/fairy.jpg",
            voice: "https://example.com/voices/fairy1.mp3",
            name: "Фея",
            text: "Добро пожаловать в мое королевство, смельчак!"
          }
        ]
      }
    },

    // 4. Тенистая тропка (диалог)
    {
      id: 4,
      order: 4,
      type: "dialog",
      payload: {
        dialogues: [
          {
            image: "https://example.com/dark-path.jpg",
            voice: "https://example.com/voices/narrator4.mp3",
            name: "Рассказчик",
            text: "Сумерки сгущаются с каждым шагом. Ветви деревьев шепчут что-то..."
          },
          {
            image: "https://example.com/shadow.jpg",
            voice: "https://example.com/voices/shadow1.mp3",
            name: "Голос из тьмы",
            text: "Кто осмелился потревожить покой этих мест?"
          }
        ]
      }
    },

    // 5. Встреча с феей (choice)
    {
      id: 5,
      order: 5,
      type: "choice",
      payload: {
        dialogues: [
          {
            image: "https://example.com/fairy-question.jpg",
            voice: "https://example.com/voices/fairy2.mp3",
            name: "Фея",
            text: "Ответь на мою загадку, и я дам тебе волшебный дар!"
          }
        ],
        choices: [
          {
            text: "Согласиться на загадку",
            next_scene_id: 6
          },
          {
            text: "Вежливо отказаться",
            next_scene_id: 7
          },
          {
            text: "Попытаться обмануть фею",
            next_scene_id: 8
          }
        ]
      }
    },

    // 6. Загадка феи (диалог)
    {
      id: 6,
      order: 6,
      type: "dialog",
      payload: {
        dialogues: [
          {
            image: "https://example.com/fairy-riddle.jpg",
            voice: "https://example.com/voices/fairy3.mp3",
            name: "Фея",
            text: "Что можно увидеть с закрытыми глазами?"
          },
          {
            image: "https://example.com/narrator.jpg",
            voice: "https://example.com/voices/narrator5.mp3",
            name: "Рассказчик",
            text: "Вы правильно ответили - 'сон'! Фея дарит вам волшебный кристалл."
          }
        ]
      }
    },

    // 7. Отказ от загадки (диалог)
    {
      id: 7,
      order: 7,
      type: "dialog",
      payload: {
        dialogues: [
          {
            image: "https://example.com/fairy-sad.jpg",
            voice: "https://example.com/voices/fairy4.mp3",
            name: "Фея",
            text: "Как жаль... Возможно, в другой раз."
          },
          {
            image: "https://example.com/narrator.jpg",
            voice: "https://example.com/voices/narrator6.mp3",
            name: "Рассказчик",
            text: "Фея исчезает в сиянии света, оставляя вас наедине с лесом."
          }
        ]
      }
    },

    // 8. Обман феи (диалог)
    {
      id: 8,
      order: 8,
      type: "dialog",
      payload: {
        dialogues: [
          {
            image: "https://example.com/fairy-angry.jpg",
            voice: "https://example.com/voices/fairy5.mp3",
            name: "Фея",
            text: "Ты думаешь, можешь обмануть волшебное существо?!"
          },
          {
            image: "https://example.com/narrator.jpg",
            voice: "https://example.com/voices/narrator7.mp3",
            name: "Рассказчик",
            text: "Фея превращает вас в дерево на целый час в наказание за ложь."
          }
        ]
      }
    },

    // 9. Финал (choice)
    {
      id: 9,
      order: 9,
      type: "choice",
      payload: {
        dialogues: [
          {
            image: "https://example.com/forest-exit.jpg",
            voice: "https://example.com/voices/narrator8.mp3",
            name: "Рассказчик",
            text: "Вы видите выход из леса. Что будете делать?"
          }
        ],
        choices: [
          {
            text: "Выйти из леса",
            next_scene_id: 10
          },
          {
            text: "Остаться и исследовать дальше",
            next_scene_id: 11
          }
        ]
      }
    },

    // 10. Хорошая концовка (диалог)
    {
      id: 10,
      order: 10,
      type: "dialog",
      payload: {
        dialogues: [
          {
            image: "https://example.com/happy-end.jpg",
            voice: "https://example.com/voices/narrator9.mp3",
            name: "Рассказчик",
            text: "Вы возвращаетесь домой с удивительными историями и мудростью."
          },
          {
            image: "https://example.com/old-man-end.jpg",
            voice: "https://example.com/voices/oldman2.mp3",
            name: "Старец",
            text: "Вижу, лес преподал тебе ценный урок. Возвращайся, когда будешь готов к новым приключениям!"
          }
        ]
      }
    }
  ]
};