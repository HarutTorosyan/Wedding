import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Name from './assets/img/Name.png'; 
import ruName from "./assets/img/ruName.png"
import enName from "./assets/img/enName.png"
import date from './assets/img/date.png'
import ruDate from './assets/img/ruDate.png'
import enDate from './assets/img/enDate.png'

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      hy: {
        translation: {
          'Welcome': 'Հարսանիքին Մնաց',
          'Header Image': Name, 
          "day":'Օր',
          "hour":'Ժամ',
          "minute":'Րոպե',
          "second":'Վայրկյան',
          "invitation":'Հրավիրատոմս',
          "touch":'Սիրով հրավիրում ենք Ձեզ կիսելու մեր հետ մեր կյանքի կարևոր ու հիշարժան օրը',
          "touchcontent":'Սպասում ենք Ձեզ մեր հարսանիքին',
          'Touch Image': date, 
          'timing':'Ծրագիր',
          'start':'Միջոցառման սկիզբը',
          'house':'Հարսի Տուն',
          'location':'Սարի-Թաղ 28 նրբ․ 23 տուն',
          'howget':'Ինչպես հասնել',
          'photo':'Ֆոտոսեսիա',
          'emotion':'Հուզիչ պահերը շարունակվում են',
          'happy':'Ուրախ պահերը հիշողության համար',
          'wedding':'Պսակադրություն',
          'church':'Սուրբ Հովհաննես եկեղեցի',
          'churchloc':'ք․Աբովյան, Կոտայքի մարզ Սահմանադրության հրպ․',
          'banket':'Հարսանյաց հանդիսություն',
          'hall':'<< Safari Hall >>  ռեստորան',
          'hallloc':'ք․Չարենցավան, Կարեն Դեմիրճյան հրապարակ 3',
          'confirm':'Խնդրում ենք հաստատել ձեր ներկայությունը  ',
          'click':'Լրացնել հյուրի հարցման դաշտը ',
          'wait':'Սիրով սպասում ենք Ձեզ ',
        },
      },
      ru: {
        translation: {
          'Welcome': 'До Свадьбы Осталось',
          'Header Image': ruName, 
          "day":'День',
          "hour":'Часы',
          "minute":'Минуты',
          "second":'Секунды',
          "invitation":'Пригласительная ',
          "touch":'Мы счастливы пригласить Вас на нашу свадьбу! Это особенный и радостный для нас день, и мы хотели бы, ',
          "touchcontent":'чтобы Вы стали частью этого праздника.',
          'Touch Image': ruDate, 
          'timing':'Тайминг',
          'start':'Начало мероприятия',
          'house':'Дом невесты',
          'location':'Сари-Тах 28 переулок. 23 дома',
          'howget':'Как добраться?',
          'photo':'Фотосессия',
          'emotion':'Интересные моменты продолжаются',
          'happy':'Счастливые моменты на память',
          'wedding':'Венчание',
          'church':'Церковь Святого Иоанна',
          'churchloc':'г. Абовян, Котайкский марз.',
          'banket':'Свадебный банкет',
          'hall':'<< Safari Hall >>  ресторан',
          'hallloc':'г. Чаренцаван, площадь Карена Демирчяна 3',
          'confirm':'Пожалуйста, подтвердите свое присутствие',
          'click':'Заполните поле запроса гостя',
          'wait':'С любовью ждём Вас ',
        },
      },
      en: {
        translation: {
          'Welcome': 'Until The Wedding Is Left',
          'Header Image':enName, 
         "day":'Days',
          "hour":'Hours',
          "minute":'Minutes',
          "second":'Seconds',
          "invitation":"Invitation ",
          "touch":'We are happy to invite you to our wedding! This is a special and joyful day for us,  and we would like',
          "touchcontent":' you to be a part of that wonderful day.',
          'Touch Image': enDate,
          'timing':'Timing',
          'start':'Start of the event',
          'house':"Bride's house",
          'location':'Sari-tagh 28th bck 23',
          'howget':'How to get there?',
          'photo':'Photoshoot',
          'emotion':'Interesting moments continue',
          'happy':'The happy moments for memory',
          'wedding':'Wedding ceremony',
          'church':'St.Hovhannes Church',
          'churchloc':'Abovyan city, Kotayk marz.',
          'banket':'Wedding banquet',
          'hall':'<< Safari Hall >>  restaurant',
          'hallloc':'Charentsavan, Karen Demirchyan Square 3',
          'confirm':'Please confirm your participation',
          'click':'Click here to fill in your name',
          'wait':'We are waiting for you with love',
        },
      },
    },
    lng: 'hy', 
    fallbackLng: 'hy', 
    interpolation: {
      escapeValue: false, 
    },
  });
  export default i18n;