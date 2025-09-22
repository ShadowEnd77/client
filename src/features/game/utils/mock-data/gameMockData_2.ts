import { Game } from "../../../../types/entities";
import cover from '../../../../assets/game_2/cover_1.png';
import i_1_1 from '/game_2/1_1.jpg';
import i_1_2 from '/game_2/1_2.jpg';
import i_2_1 from '/game_2/2_1.jpg';
import i_2_2 from '/game_2/2_2.jpg';
import i_3_1 from '/game_2/3_1.jpg';
import i_4_1 from '/game_2/4_1.jpg';
import i_5_1 from '/game_2/5_1.jpg';
import i_5_2 from '/game_2/5_2.jpg';
import i_6_1 from '/game_2/6_1.jpg';
import i_6_2 from '/game_2/6_2.jpg';
import i_6_a from '/game_2/6_a.jpg';
import i_7_1 from '/game_2/7_1.jpg';
import i_7_2 from '/game_2/7_2.jpg';
import i_7_a from '/game_2/7_a.jpg';
import i_8_1 from '/game_2/8_1.jpg';
import i_8_2 from '/game_2/8_2.jpg';
import i_9_1 from '/game_2/9_1.jpg';
import i_9_a from '/game_2/9_a.jpg';
import i_10_1 from '/game_2/10_1.jpg';
import i_10_2 from '/game_2/10_2.jpg';
import i_11_1 from '/game_2/11_1.jpg';
import i_11_a from '/game_2/11_a.jpg';

// import a_1_1 from '/game_2/aud_1_1.mp3'
// import a_1_2 from '/game_2/aud_1_2.mp3'
// import a_2_2 from '/game_2/aud_2_2.mp3'
// import a_4_1 from '/game_2/aud_4_1.mp3'
// import a_4_2 from '/game_2/aud_4_2.mp3'
// import a_5_1 from '/game_2/aud_5_1.mp3'
// import a_5_2 from '/game_2/aud_5_2.mp3'
// import a_6_1 from '/game_2/aud_6_1.mp3'
// import a_6_2 from '/game_2/aud_6_2.mp3'
// import a_7_1 from '/game_2/aud_7_1.mp3'


export const mockGame_2: Game = {
  id: 2,
  title: "Высоко — не значит круто",
  cover_image: cover,
  description: "Интерактивное приключение с загадками и моральными выборами. Азоту предстоит сделать правильный",
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
              text: "Азот приходит домой."
            },
            {
              image: i_1_2,
              voice: a_1_2,
              name: "Школьный чат 5Б",
              text: "— Ха-ха, Азот опять как бот ответил у доски!\n— Сними, как он читает — и выложим!\n— Он даже не обидится, он всё схавает."
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
            voice: "",
            name: "",
            text: "Азот читает. На экране появляется новое сообщение."
          },
          {
            image: i_2_2,
            voice: a_2_2,
            name: "",
            text: "— Азот, слабо ответить им что-нибудь?"
          }
        ]
      }
    },
        {
      id: 3,
      order: 1,
      type: "dialogue",
      payload: {
        score: 0,
        achievement: null,
        next_scene_id: 4,
        dialogues: [
          {
            image: i_3_1,
            voice: "",
            name: "",
            text: "Азот недоумевает — он не понимает, чем заслужил такое отношение."
          }
        ]
      }
    },
    {
      id: 4,
      order: 1,
      type: "choice",
      payload: {
        score: 1,
        achievement: null,
        next_scene_id: null,
        description: "Выбери что ответит Азот.",
        dialogues: [
          {
            image: i_4_1,
            voice: "",
            name: "",
            text: "Азот должен сделать выбор."
          }
        ],
        choices: [
          {
            text: "Сам ты бот! Лучше за собой следи!",
            next_scene_id: 5
          },
          {
            text: "Мне не по себе… но я не хочу ссориться.",
            next_scene_id: 7
          },
          {
            text: "Окей. Сейчас я покажу, кто здесь кто!",
            next_scene_id: 8
          },
          {
            text: "Вы мне неприятны. Я выхожу из чата.",
            next_scene_id: 10
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
        achievement: null,
        next_scene_id: 6,
        dialogues: [
          {
            image: i_5_1,
            voice: a_5_1,
            name: "",
            text: "Азот пишет грубое сообщение."
          },
          {
            image: i_5_2,
            voice: a_5_2,
            name: "",
            text: "Через секунду в ответ — шквал гифок и скринов. Его слова перекручивают."
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
        achievement: {
          title: "Ты понял, что злость не решает проблему.",
          cover_image: i_6_a
        },
        next_scene_id: 12,
        dialogues: [
          {
            image: i_6_1,
            voice: a_6_1,
            name: "",
            text: "Азот спрашивает себя, стало ли ему легче, ведь именно этого от него и ждали."
          },
          {
            image: i_6_2,
            voice: a_6_2,
            name: "",
            text: "Он удаляет сообщение, чувствует тревогу и злость."
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
          title: "Ты выбрал спокойствие. И кто-то тебя поддержал.",
          cover_image: i_7_a
        },
        next_scene_id: 12,
        dialogues: [
          {
            image: i_7_1,
            voice: a_7_1,
            name: "",
            text: "Азот ничего не отвечает. Смотрит на экран, глубоко дышит."
          },
          {
            image: i_7_2,
            voice: a_7_2,
            name: "Одноклассник",
            text: "— Азот, молодец, что не вёлся. Я потом им написал, чтобы не перегибали."
          }
        ]
      }
    },
    {
      id: 8,
      order: 1,
      type: "dialogue",
      payload: {
        score: 0,
        achievement: null,
        next_scene_id: 9,
        dialogues: [
          {
            image: i_8_1,
            voice: a_8_1,
            name: "",
            text: "Азот публикует оскорбительную картинку."
          },
          {
            image: i_8_2,
            voice: a_8_2,
            name: "Чат",
            text: "— О, он с нами теперь! Лови скрин!"
          }
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
          title: "Ты понял, что уважение начинается с тебя.",
          cover_image: i_9_a
        },
        next_scene_id: 12,
        dialogues: [
          {
            image: i_9_1,
            voice: a_9_1,
            name: "",
            text: "Азот думает, не поняли ли они, или всё же провоцируют."
          }
        ]
      }
    },
    {
      id: 10,
      order: 1,
      type: "dialogue",
      payload: {
        score: 0,
        achievement: null,
        next_scene_id: 11,
        dialogues: [
          {
            image: i_10_1,
            voice: a_10_1,
            name: "",
            text: "— Я не обязан читать это. Я выхожу."
          },
          {
            image: i_10_2,
            voice: a_10_2,
            name: "Чат",
            text: "Он покидает чат. Через 10 минут — сообщение от одноклассницы."
          }
        ]
      }
    },
    {
      id: 11,
      order: 1,
      type: "dialogue",
      payload: {
        score: 0,
        achievement: {
          title: "Ты вышел из ситуации спокойно и сохранил себя.",
          cover_image: i_11_a
        },
        next_scene_id: 12,
        dialogues: [
          {
            image: i_11_1,
            voice: a_11_1,
            name: "Одноклассница",
            text: "— Азот, ты всё правильно сделал. Если что — я с тобой. "
          }
        ]
      }
    },
    // В сценарии другой тип мини-игры
    // {
    //   id: 12,
    //   order: 1,
    //   type: "match",
    //   payload: {
    //     next_scene_id: 13,
    //     achievement: null,
    //     score: 1,
    //     pairs: [
    //       { k: "Мне неприятно — я ухожу" },
    //       { k: "Вы глупые"},
    //       { k: "Я выбираю не участвовать в этом" },
    //       { k: "Сам ты бот!" },
    //       { k: "Я не с вами. Мне важнее моё настроение" }
    //     ]
    //   }
    // },
    {
      id: 13,
      order: 1,
      type: "dialogue",
      payload: {
        score: 0,
        achievement: {
          title: "Ты выбрал себя, а не конфликт",
          cover_image:
        },
        next_scene_id: null,
        dialogues: [
          {
            image: ,
            voice: ,
            name: "Азот",
            text: "— Раньше я думал, что надо огрызаться или терпеть. А теперь знаю: я могу просто выйти. Я могу выбрать. И быть сильным — значит не вестись"
          }
        ]
      }
    }
  ]
};
