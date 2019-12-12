const Seasons = {
  winter: [
    'January', 'Январь', 'Студзень',
    'February', 'Февраль', 'Люты',
    'December', 'Декабрь', 'Снежань',
  ],

  spring: [
    'March', 'Март', 'Сакавік',
    'April', 'Апрель', 'Красавік',
    'May', 'Май', 'Май',
  ],

  summer: [
    'June', 'Июнь', 'Чэрвень',
    'July', 'Июль', 'Ліпень',
    'August', 'Август', 'Жнівень',
  ],

  autumn: [
    'September', 'Сентябрь', 'Верасень',
    'October', 'Октябрь', 'Кастрычнік',
    'November', 'Ноябрь', 'Лістапад',
  ],
};

const DayTime = {
  morning: [6, 7, 8, 9, 10, 11],
  day: [12, 13, 14, 15, 16, 17],
  evening: [18, 19, 20, 21, 22, 23],
  night: [0, 1, 2, 3, 4, 5],
};

export async function getLinkToImage() {
  const width = screen.width.toString();
  const height = screen.height.toString();
  const body = document.querySelector('body');
  const city = document.querySelector('.today-weather__place').innerHTML;
  const todayWeatherDate = document.querySelector('.today-weather__date');
  const month = todayWeatherDate.innerHTML.slice(3, todayWeatherDate.innerHTML.indexOf(' ', 4)).trim();
  let season;
  for (const key in Seasons) {
    for (let i = 0; i < 9; i += 1) {
      if (Seasons[key][i] === month) season = key;
    }
  }
  const summary = document.querySelector('.today-weather__other>p').innerHTML;
  const time = document.querySelector('.today-weather__date').innerHTML.slice(document.querySelector('.today-weather__date').innerHTML.lastIndexOf(' '));
  let dayT;
  for (const key in DayTime) {
    for (let i = 0; i < 6; i += 1) {
      if (DayTime[key][i] === Number(time.slice(0, 3))) dayT = key;
    }
  }

  const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${season},${city},${dayT},${summary}
  &client_id=a2840b831d7df553cc4c7c1492e8602cbd21b24a89cb2050aaf67407e892be30`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const image = document.createElement('img');
    image.crossOrigin = 'Anonymous';
    const link = `${data.urls.raw}&w=${width}&h=${height}`;
    image.setAttribute('src', link);
    image.onload = () => {
      body.style.background = `url(${link}) no-repeat`;
      body.style.backgroundSize = 'cover';
    };
    image.onerror = () => {
      throw new Error('Data Error');
    };
  } catch (e) {
    console.error(e);
  }
}
