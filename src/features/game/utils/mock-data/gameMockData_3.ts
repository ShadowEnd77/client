import { Game } from "../../../../types/entities";
import cover from '../../../../assets/game_3/cover_1.png';
import i_1_1 from '/game_3/1_1.jpg';
import i_1_2 from '/game_3/1_2.jpg';
import i_2_1 from '/game_3/2_1.jpg';
import i_2_2 from '/game_3/2_2.jpg';
import i_3_1 from '/game_3/3_1.jpg';
import i_4_1 from '/game_3/4_1.jpg';
import i_4_2 from '/game_3/4_2.jpg';
import i_4_a from '/game_3/4_a.jpg'; // achievement image
import i_5_1 from '/game_3/5_1.jpg';
import i_5_2 from '/game_3/5_2.jpg';
import i_6_1 from '/game_3/6_1.jpg';
import i_6_a from '/game_3/6_a.jpg'; // achievement image
import i_7_1 from '/game_3/7_1.jpg';
import i_7_2 from "/game_3/7_2.jpg";
import i_7_a from '/game_3/7_a.jpg'; // achievement image
import i_8_1 from '/game_3/8_1.jpg';

import t_game_3 from '../../../../assets/audio/t_game_3.mp3'

import a_1_1 from '/game_3/aud_1_1.mp3'
import a_1_2 from '/game_3/aud_1_2.mp3'
import a_1_3 from '/game_3/aud_1_3.mp3'
import a_1_4 from '/game_3/aud_1_4.mp3'
import a_2_1 from '/game_3/aud_2_1.mp3'
import a_2_2 from '/game_3/aud_2_2.mp3' // дикто для димки
import a_2_3 from '/game_3/aud_2_3.mp3'
import a_3_1 from '/game_3/aud_3_1.mp3'
import a_3_2 from '/game_3/aud_3_2.mp3'
import a_3_3 from '/game_3/aud_3_3.mp3'
import a_4_1 from '/game_3/aud_4_1.mp3'
import a_4_2 from '/game_3/aud_4_2.mp3'
import a_4_12 from '/game_3/aud_4_12.mp3'
import a_4_3 from '/game_3/aud_4_3.mp3'
import a_5_1 from '/game_3/aud_5_1.mp3'
import a_6_1 from '/game_3/aud_6_1.mp3'


export const mockGame: Game = {
  id: 3,
  game_group_id: 2,
  title: "Высоко — не значит круто",
  t_voice: t_game_3,
  cover_image: cover,
  description: "Немного дерзкое и разговорное. Подходит для подросткового мышления: ты можешь быть крутым, даже не залезая.",
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
              text: "Азот выходит из школы. На улице тепло, хочется скорее переодеться и поиграть. Навстречу ему выходит Димка — знакомый по двору. "
            },
            {
              image: i_1_2,
              voice: a_1_2,
              name: "Димка",
              text: "Слушай, Азот! Мы с ребятами спорим, кто смелее. Залезем на крышу спортзала, сфоткаемся оттуда! Пошли?"
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
            name: "",
            text: "Азот чувствует, как внутри появляется тревожное волнение."
          },
          {
              image: i_2_2,
              voice: a_1_4,
              name: "",
              text: "С одной стороны — интересно. Но с другой — это может быть опасно. А если кто-то не удержится? А если мама узнает?.."
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
        description: "Выбери что ответить Азоту",
        dialogues: [
          {
            image: i_3_1,
            voice: "",
            name: "",
            text: "Азот должен сделать выбор"
          }
        ],
        choices: [
          {
            text: "Я не лезу. Это глупо и опасно. Пошли лучше соберём трассу для машинок!",
            next_scene_id: 4
          },
          {
            text: "Хм… Я не знаю. А если получится?",
            next_scene_id: 5
          },
          {
            text: "Конечно! Я докажу, что не слабак!",
            next_scene_id: 7
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
        achievement: {
          title: "Ты стал примером для других.",
          cover_image: i_4_a
        },
        next_scene_id: 8,
        dialogues: [
          {
            image: i_4_1,
            voice: a_2_1,
            name: "Азот",
            text: "Я не лезу. Мне важнее здоровье и безопасность. Пошли лучше соберём трассу для машинок. Там и вид лучше, и не сломаем себе шею."
          },
          {
            image: i_4_2,
            voice: a_2_3,
            name: "Димка",
            text: "Знаешь, круто, что ты не пошёл. Я бы один точно не решился отказаться."
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
        next_scene_id: 8,
        dialogues: [
          {
            image: i_5_1,
            voice: a_3_1,
            name: "",
            text: "Азот смотрит вверх, потом на Димку."
          },
          {
            image: i_5_2,
            voice: a_3_2,
            name: "",
            text: "Он делает шаг, но останавливается. Вспоминает слова учительницы:«Настоящая смелость — не в том, чтобы лезть, а в том, чтобы думать»"
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
          title: "Ты выбрал свою голову, а не давление",
          cover_image: i_6_a
        },
        next_scene_id: 7,
        dialogues: [
          {
            image: i_6_1,
            voice: a_3_3,
            name: "",
            text: "Нет. Я не хочу. И вам не советую."
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
          title: "Ты осознал риск и сделал шаг назад",
          cover_image: i_7_a
        },
        next_scene_id: 8,
        dialogues: [
          {
            image: i_7_1,
            voice: a_4_12,
            name: "",
            text: "Азот начинает подниматься. Камень срывается. Он еле удерживается. В голове звучит голос:"
          },
          {
            image: i_7_2,
            voice: a_4_3,
            name: "",
            text: "Он сходит вниз испуганным. Вечером рассказывает всё родителям. Они спокойно выслушивают и благодарят за честность. Предлагают вместе найти безопасные приключения. "
          }
        ]
      }
    },
    {
      id: 8,
      order: 1,
      type: "match",
      payload: {
        next_scene_id: 9,
        achievement: null,
        score: 1,
        pairs: [
          { k: "Крыша спортзала", v: "опасно" },
          { k: "Постройка трассы для машинок", v: "безопасно и интересно" },
          { k: "Прыжки с лестницы", v: "риск" },
          { k: "Поход в парк с друзьями", v: "безопасно" }
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
          title: "Ты выбрал разумно — и стал сильнее",
          cover_image: i_6_a
        },
        next_scene_id: null,
        dialogues: [
          {
            image: i_8_1,
            voice: a_6_1,
            name: "Азот",
            text: "Быть смелым — это не значит рисковать. Это значит действовать безопасно, даже если тебя подталкивают."
          }
        ]
      }
    }
  ]
};
