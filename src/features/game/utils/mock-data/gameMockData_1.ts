import { Game } from "../../../../types/entities";
import cover from '../../../../assets/game_1/cover_1.png';
import i_1_1 from '/game_1/1_1.jpg';
import i_1_2 from '/game_1/1_2.jpg';
import i_2_1 from '/game_1/2_1.jpg';
import i_2_2 from '/game_1/2_2.jpg';
import i_3_1 from '/game_1/3_1.jpg';
import i_4_1 from '/game_1/4_1.jpg';
import i_4_2 from '/game_1/4_2.jpg';
import i_4_a from '/game_1/4_a.jpg'
import i_5_1 from '/game_1/5_1.jpg'
import i_5_2 from '/game_1/5_2.jpg'
import i_5_a from '/game_1/5_a.jpg'
import i_6_1 from '/game_1/6_1.jpg'
import i_6_2 from '/game_1/6_2.jpg'
import i_6_a from '/game_1/6_a.jpg'
import i_7_1 from '/game_1/7_1.jpg'
import i_7_a from '/game_1/7_a.jpg'

import t_game_1 from '../../../../assets/audio/t_game_1.mp3'

import a_1_1 from '/game_1/aud_1_1.mp3'
import a_1_2 from '/game_1/aud_1_2.mp3'
import a_2_2 from '/game_1/aud_2_2.mp3'
import a_4_1 from '/game_1/aud_4_1.mp3'
import a_4_2 from '/game_1/aud_4_2.mp3'
import a_5_1 from '/game_1/aud_5_1.mp3'
import a_5_2 from '/game_1/aud_5_2.mp3'
import a_6_1 from '/game_1/aud_6_1.mp3'
import a_6_2 from '/game_1/aud_6_2.mp3'
import a_7_1 from '/game_1/aud_7_1.mp3'


export const mockGame: Game = {
  id: 1,
  game_group_id: 3,
  title: "Где я - там и выбор",
  t_voice: t_game_1,
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
              name: "Учитель",
              text: "Сегодня командная игра. Главное — уважение к друг другу и работа в команде"
            },
            {
              image: i_1_2,
              voice: a_1_2,
              name: "Бульдозер",
              text: "Давайте быстрее! Я предлагаю, чтобы я был капитаном. Мы точно победим. Кто со мной - не пожалеет!"
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
            voice: "", // В исходном коде было "2_1", но такого аудиофайла нет в импортах
            name: "",
            text: "Азот колеблется и переживает"
          },
          {
            image: i_2_2,
            voice: a_2_2,
            name: "",
            text: "Азот не хотел бы подчиняться Бульдозеру"
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
        description: "Выбери команду для азота",
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
            text: "Я выберу свою команду — с кем мне комфортно работать",
            next_scene_id: 4
          },
          {
            text: "Все пошли к Бульдозеру — пойду тоже, чтобы не быть 'против'",
            next_scene_id: 5
          },
          {
            text: "Я просто подожду — может, всё само решится",
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
        achievement: {
          title: "Осознанный выбор и уверенность в себе",
          cover_image: i_4_a
        },
        next_scene_id: 7,
        dialogues: [
          {
            image: i_4_1,
            voice: a_4_1,
            name: "Азот",
            text: "Пусть мы и не побеждаем, но мне важно, чтобы мы уважали друг друга и слушали идеи."
          },
          {
            image: i_4_2,
            voice: a_4_2,
            name: "Учитель",
            text: "Выбор Азота — зрелый и осознанный. Это пример уважения к себе и другим!"
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
          title: "Чужой выбор не всегда твой",
          cover_image: i_5_a
        },
        next_scene_id: 7,
        dialogues: [
          {
            image: i_5_1,
            voice: a_5_1,
            name: "",
            text: "Бульдозер командует и перебивает других. Азот хочет высказаться, но молчит"
          },
          {
            image: i_5_2,
            voice: a_5_2,
            name: "",
            text: "Азот после игры чувствует неудовлетворение. Дома он думает о том, нужно быть смелее"
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
          title: "Не выбирать — тоже выбор",
          cover_image: i_6_a
        },
        next_scene_id: 7,
        dialogues: [
          {
            image: i_6_1,
            voice: a_6_1,
            name: "",
            text: "Азот отходит в сторону. Игра начинается без него"
          },
          {
            image: i_6_2,
            voice: a_6_2,
            name: "Учитель",
            text: "Ты имеешь право выбирать. Даже если ошибешься - это будет твой опыт."
          }
        ]
      }
    },
    {
      id: 7,
      order: 1,
      type: "match",
      payload: {
        next_scene_id: 8,
        achievement: null,
        score: 1,
        pairs: [
          { k: "Ты с нами или против", v: "Я выбираю по-своему — это не значит 'против'" },
          { k: "Только слабые не идут с нами!", v: "Быть собой — не слабость" },
          { k: "Ты странный!", v: "Я просто не такой как ты — и это нормально" },
          { k: "А что, если ты ошибаешься?", v: "Значит, я сам узнаю и научусь" }
        ]
      }
    },
    {
      id: 8,
      order: 1,
      type: "dialogue",
      payload: {
        score: 0,
        achievement: {
          title: "Ты стал собой и это твоя сила",
          cover_image: i_7_a
        },
        next_scene_id: null,
        dialogues: [
          {
            image: i_7_1,
            voice: a_7_1,
            name: "Азот",
            text: "Быть с большинством - легко. Но быть собой - важнее. Я могу выбирать. И могу уважать свой выбор!"
          }
        ]
      }
    }
  ]
};
