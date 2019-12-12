const lang = {
  placeholder: ['Search city', 'Поиск города', 'Пошук горада'],
  button: ['SEARCH', 'ПОИСК', 'ПОШУК'],
  span1: ['FEELS LIKE', 'ОЩУЩАЕТСЯ КАК', 'АДЧУВАЕЦЦА ЯК'],
  span2: ['WIND', 'ВЕТЕР', 'ВЕЦЕР'],
  span3: ['HUMIDITY', 'ВЛАЖНОСТЬ', 'ВІЛЬГОТНАСЦЬ'],
  lat: ['Latitude', 'Широта', 'Шырата'],
  lon: ['Longitude', 'Долгота', 'Даўгата'],
  shortWeekDay: [
    ['Sun', 'Вс ', 'Ня '],
    ['Mon', 'Пн ', 'Пн '],
    ['Tue', 'Вт ', 'Ат '],
    ['Wed', 'Ср ', 'Ac '],
    ['Thu', 'Чт ', 'Чц '],
    ['Fri', 'Пт ', 'Пт '],
    ['Sat', 'Сб ', 'Сб '],
  ],
  WeekDay: [
    ['Sunday', 'Воскресенье', 'Нядзеля'],
    ['Monday', 'Понедельник', 'Панядзелак'],
    ['Tuesday', 'Вторник', 'Аўторак'],
    ['Wednesday', 'Среда', 'Асяроддзе'],
    ['Thursday', 'Четверг', 'Чацвер'],
    ['Friday', 'Пятница', 'Пятніца'],
    ['Saturday', 'Суббота', 'Субота'],
  ],
  Month: [
    ['January', 'Январь', 'Студзень'],
    ['February', 'Февраль', 'Люты'],
    ['March', 'Март', 'Сакавік'],
    ['April', 'Апрель', 'Красавік'],
    ['May', 'Май', 'Май'],
    ['June', 'Июнь', 'Чэрвень'],
    ['July', 'Июль', 'Ліпень'],
    ['August', 'Август', 'Жнівень'],
    ['September', 'Сентябрь', 'Верасень'],
    ['October', 'Октябрь', 'Кастрычнік'],
    ['November', 'Ноябрь', 'Лістапад'],
    ['December', 'Декабрь', 'Снежань'],
  ],
  Weather: [
    ['OVERCAST', 'ПАСМУРНО', 'ПАХМУРНА'],
    ['CLEAR', 'ЯСНО', 'ЯСНЫ'],
    ['MOSTLY CLOUDY', 'ОБЛАЧНО', 'ВОБЛАЧНА'],
    ['PARTLY CLOUDY', 'ПЕРЕМЕННАЯ ОБЛАЧНОСТЬ', 'ПЕРАМЕННАЯ ВОБЛАЧНАСЦЬ'],
    ['DRIZZLE', 'МОРОСИТ', 'ІМЖЫЦЬ'],
    ['HUMID AND OVERCAST', 'ВЛАЖНО И ПАСМУРНО', 'ВІЛЬГОТНА І ПАХМУРНА'],
    ['DRIZZLE AND HUMID', 'ДОЖДЬ', 'ДОЖДЖ'],
    ['HUMID', 'ВЛАЖНО', 'ВІЛЬГОТНА'],
    ['POSSIBLE DRIZZLE', 'ВОЗМОЖНЫ ОСАДКИ', 'МАГЧЫМЫЯ АПАДКІ'],
    ['FOGGY', 'ТУМАН', 'ТУМАННЫ'],
  ],
};

const KEY = 'trnsl.1.1.20191208T135558Z.23776bb57e1a83e8.f1035efb9cfa295724309bd52261ba90c876a58d';

function translateHelp(idx) {
  const search = document.querySelector('#search');
  const searchButton = document.querySelector('#searchButton');

  const lat = document.querySelector('#lat');
  const lon = document.querySelector('#lon');

  const feelsLike = document.querySelector('#feels');
  const wind = document.querySelector('#wind');
  const humidity = document.querySelector('#humidity');

  search.placeholder = lang.placeholder[idx];
  searchButton.innerHTML = lang.button[idx];

  lat.innerHTML = lang.lat[idx];
  lon.innerHTML = lang.lon[idx];

  feelsLike.innerHTML = lang.span1[idx];
  wind.innerHTML = lang.span2[idx];
  humidity.innerHTML = lang.span3[idx];
}

function findIndex(selector, array) {
  let Idx;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (selector === array[i][j]) Idx = i;
    }
  }
  return Idx;
}

export async function translate(activeEl, targetEl) {
  if (activeEl) {
    try {
      const City = document.querySelector('.today-weather__place');
      const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${KEY}&lang=${
        activeEl.innerHTML.toLowerCase()}-${targetEl.innerHTML.toLowerCase()}&text=${City.innerHTML}`;
      const response = await fetch(url);
      const resBody = await response.json();
      const transCity = resBody.text;
      City.innerHTML = transCity;
    } catch (e) {
      console.error(e);
    }
  }

  const todayWeatherDate = document.querySelector('.today-weather__date');

  const todayD = todayWeatherDate.innerHTML.slice(0, 3);
  const todayIdx = findIndex(todayD, lang.shortWeekDay);

  const month = todayWeatherDate.innerHTML.slice(3, todayWeatherDate.innerHTML.indexOf(' ', 4)).trim();
  const monthIdx = findIndex(month, lang.Month);

  const nextDay1Span = document.querySelector('#nextDay1>span');
  const nextDay2Span = document.querySelector('#nextDay2>span');
  const nextDay3Span = document.querySelector('#nextDay3>span');
  const nextDay1Idx = findIndex(nextDay1Span.innerHTML, lang.WeekDay);
  const nextDay2Idx = findIndex(nextDay2Span.innerHTML, lang.WeekDay);
  const nextDay3Idx = findIndex(nextDay3Span.innerHTML, lang.WeekDay);

  const summary = document.querySelector('.today-weather__other>p');
  const summaryIdx = findIndex(summary.innerHTML, lang.Weather);

  switch (targetEl.innerHTML) {
    case 'EN':
      translateHelp(0);
      summary.innerHTML = lang.Weather[summaryIdx][0];

      todayWeatherDate.innerHTML = `${lang.shortWeekDay[todayIdx][0]} ${lang.Month[monthIdx][0]
      }${todayWeatherDate.innerHTML.slice(todayWeatherDate.innerHTML.indexOf(' ', 4))}`;

      nextDay1Span.innerHTML = lang.WeekDay[nextDay1Idx][0];
      nextDay2Span.innerHTML = lang.WeekDay[nextDay2Idx][0];
      nextDay3Span.innerHTML = lang.WeekDay[nextDay3Idx][0];

      break;

    case 'RU':
      translateHelp(1);
      summary.innerHTML = lang.Weather[summaryIdx][1];

      todayWeatherDate.innerHTML = lang.shortWeekDay[todayIdx][1] + lang.Month[monthIdx][1]
        + todayWeatherDate.innerHTML.slice(todayWeatherDate.innerHTML.indexOf(' ', 4));

      nextDay1Span.innerHTML = lang.WeekDay[nextDay1Idx][1];
      nextDay2Span.innerHTML = lang.WeekDay[nextDay2Idx][1];
      nextDay3Span.innerHTML = lang.WeekDay[nextDay3Idx][1];

      break;

    case 'BE':
      translateHelp(2);
      summary.innerHTML = lang.Weather[summaryIdx][2];

      todayWeatherDate.innerHTML = lang.shortWeekDay[todayIdx][2] + lang.Month[monthIdx][2]
        + todayWeatherDate.innerHTML.slice(todayWeatherDate.innerHTML.indexOf(' ', 4));

      nextDay1Span.innerHTML = lang.WeekDay[nextDay1Idx][2];
      nextDay2Span.innerHTML = lang.WeekDay[nextDay2Idx][2];
      nextDay3Span.innerHTML = lang.WeekDay[nextDay3Idx][2];

      break;

    case 'default': break;
  }

  localStorage.setItem('lang', targetEl.innerHTML);
}
