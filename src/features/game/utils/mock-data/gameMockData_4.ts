import { Game } from "../../../../types/entities";
import cover from '../../../../assets/game_4/cover_1.png';
import i_1_1 from '/game_4/1_1.jpg';
import i_1_2 from '/game_4/1_2.jpg';
import i_2_1 from '/game_4/2_1.jpg';
import i_3_1 from '/game_4/3_1.jpg';
import i_4_1 from '/game_4/4_1.jpg';
import i_4_2 from '/game_4/4_2.jpg';
import i_5_1 from '/game_4/5_1.jpg';
import i_5_2 from '/game_4/5_2.jpg';
import i_5_a from '/game_4/5_a.jpg';
import i_6_1 from '/game_4/6_1.jpg';
import i_6_2 from '/game_4/6_2.jpg';
import i_7_1 from '/game_4/7_1.jpg';
import i_7_a from '/game_4/7_a.jpg';
import i_8_1 from '/game_4/8_1.jpg';
import i_8_2 from '/game_4/8_2.jpg';
import i_9_1 from '/game_4/9_1.jpg';
import i_9_a from '/game_4/9_a.jpg';
import i_10_1 from '/game_4/10_1.jpg';

import t_game_4 from '../../../../assets/audio/t_game_4.mp3'

import a_1_1 from '/game_4/aud_1_1.mp3'
import a_1_2 from '/game_4/aud_1_2.mp3'
import a_1_3 from '/game_4/aud_1_3.mp3'
import a_1_4 from '/game_4/aud_1_4.mp3'
import a_1_23 from '/game_4/aud_1_23.mp3'
import a_2_1 from '/game_4/aud_2_1.mp3'
import a_2_2 from '/game_4/aud_2_2.mp3'
import a_2_12 from '/game_4/aud_2_12.mp3'
import a_2_34 from '/game_4/aud_2_34.mp3'
import a_3_1 from '/game_4/aud_3_1.mp3'
import a_3_4 from '/game_4/aud_3_4.mp3'
import a_3_23 from '/game_4/aud_3_23.mp3'
import a_4_1 from '/game_4/aud_4_1.mp3'
import a_4_2 from '/game_4/aud_4_2.mp3'
import a_4_3 from '/game_4/aud_4_3.mp3'
import a_5_1 from '/game_4/aud_5_1.mp3'
import a_3_23_1 from '/game_4/aud_3_23_1.mp3'
import a_3_23_2 from '/game_4/aud_3_23_2.mp3'
import a_2_34_1 from '/game_4/aud_2_34_1.mp3'
import a_2_34_2 from '/game_4/aud_2_34_2.mp3'
import a_2_3 from '/game_4/aud_2_3.mp3'


export const mockGame: Game = {
  id: 4,
  game_group_id: 4,
  title: "Кажется, что-то не так…",
  t_voice: t_game_4,
  cover_image: cover,
  description: "Звучит интригующе, эмоционально. Внутренний голос — главный герой.",
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
            text: "Азот возвращается домой после школы. На скамейке у входа сидит незнакомый взрослый — в серой куртке и бейсболке. Он не выглядит пугающе, говорит мягко и дружелюбно. "
          },
          {
            image: i_1_2,
            voice: a_1_23,
            name: "Незнакомец",
            text: "Привет. Мне нужен помощник. Ты выглядишь умным. Не сходишь по одному адресу? Там тебя ждёт сюрприз. Голос у него спокойный, но Азоту становится немного не по себе."
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
            image: i_3_1,
            voice: "",
            name: "",
            text: "Азот колеблется."
          },
          {
            image: i_2_1,
            voice: a_1_4,
            name: "",
            text: "Я не знаю этого человека… Почему он выбрал меня? Почему подарок — это тайна? Мама говорила — если не уверен, лучше спроси или уйди."
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
        description: "Выбери что ответить незнакомцу",
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
            text: "А что за сюрприз?",
            next_scene_id: 4
          },
          {
            text: "Извините, я вас не знаю. Я пойду домой.",
            next_scene_id: 6
          },
          {
            text: "Сейчас позвоню маме и спрошу",
            next_scene_id: 8
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
            image: i_4_1,
            voice: a_2_1,
            name: "Незнакомец",
            text: "Это сюрприз. Только для тебя. Главное — не говори никому."
          },
          {
            image: i_4_2,
            voice: a_2_2,
            name: "",
            text: "Если это безопасно — зачем скрывать?.."
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
          title: "Ты почувствовал неладное — и выбрал правильно",
          cover_image: i_5_a
        },
        next_scene_id: 10,
        dialogues: [
          {
            image: i_5_1,
            voice: a_2_34_1,
            name: "",
            text: "Азот задумывается, чувствует тревогу — и уходит."
          },
          {
            image: i_5_2,
            voice: a_2_34_2,
            name: "",
            text: "Он делится этим дома. Родители хвалят его за осторожность."
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
            image: i_6_1,
            voice: a_3_1,
            name: "Азот",
            text: "Простите, я никого не слушаю без разрешения взрослых."
          },
          {
            image: i_6_2,
            voice: a_3_23_1,
            name: "",
            text: "Мужчина пожимает плечами и уходит."
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
          title: "Ты сохранил безопасность и дал пример другим",
          cover_image: i_7_a
        },
        next_scene_id: 10,
        dialogues: [
          {
            image: i_7_1,
            voice: a_2_3,
            name: "Азот",
            text: "Азот приходит домой, всё рассказывает. Родители говорят: \n— Ты действовал спокойно и правильно. Мы гордимся тобой. "
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
            voice: a_4_1,
            name: "",
            text: "Азот достаёт телефон, звонит маме."
          },
          {
            image: i_8_2,
            voice: a_4_2,
            name: "Мама",
            text: "Молодец, что позвонил. Это был странный случай. Я иду к тебе."
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
          title: "Ты не остался один. Обратиться за помощью — это сила.",
          cover_image: i_9_a
        },
        next_scene_id: 10,
        dialogues: [
          {
            image: i_9_1,
            voice: a_4_3,
            name: "",
            text: "Позже Азот обсуждает ситуацию с учителем и узнаёт, какие ещё есть тревожные сигналы."
          }
        ]
      }
    },
    {
      id: 10,
      order: 1,
      type: "match",
      payload: {
        next_scene_id: 11,
        achievement: null,
        score: 1,
        pairs: [
          { k: "Приходи один — я тебя жду", v: "Tревожно" },
          { k: "Давай без родителей", v: "Тревожнo" },
          { k: "Ты сам решаешь — не бойся спросить", v: "Верно" },
          { k: "Это между нами. Не рассказывай", v: "Тревожно" }
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
          title: "Ты умеешь думать — и выбираешь правильно",
          cover_image: i_9_a
        },
        next_scene_id: null,
        dialogues: [
          {
            image: i_10_1,
            voice: a_5_1,
            name: "Азот",
            text: "Раньше я не думал — просто соглашался. Теперь знаю: если не уверен — лучше спросить или отказаться. Это не страх — это умение заботиться о себе."
          }
        ]
      }
    }
  ]
};
