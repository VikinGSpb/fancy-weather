function fToC(temp) {
  return Math.round(5 / 9 * (temp - 32));
}


export async function getWeather(lat, long) {
  const tempSpan = document.querySelector('.today-weather__forecast>span');
  const summaryWeather = document.querySelectorAll('.today-weather__other>span');
  const appTempSpan = summaryWeather[0];
  const windSpan = summaryWeather[1];
  const humiditySpan = summaryWeather[2];
  const todayWeatherDate = document.querySelector('.today-weather__date');
  const nextDay1Span = document.querySelector('#nextDay1>span');
  const nextDay2Span = document.querySelector('#nextDay2>span');
  const nextDay3Span = document.querySelector('#nextDay3>span');
  const nextDay1TempSpan = document.querySelector('#nextDay1>div>span');
  const nextDay2TempSpan = document.querySelector('#nextDay2>div>span');
  const nextDay3TempSpan = document.querySelector('#nextDay3>div>span');
  const todayWeatherIconElement = document.querySelector('.today-weather__icon');
  const nextDay1WeatherIconElement = document.querySelector('#nextDay1>div>div');
  const nextDay2WeatherIconElement = document.querySelector('#nextDay2>div>div');
  const nextDay3WeatherIconElement = document.querySelector('#nextDay3>div>div');

  const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a8aa053288d0f79e11f6a65e33c19366/'
    + `${lat},${long}`;
  try {
  const response = await fetch(url);
  const data = await response.json();

  const tempF = Math.round(data.currently.temperature);
  const tempC = fToC(tempF);
  const appTempF = Math.round(data.currently.apparentTemperature);
  const appTempC = fToC(appTempF);
  const windSpeed = data.currently.windSpeed.toFixed(1);
  const humidity = Math.round(data.currently.humidity * 100);
  const todayWeatherIcon = data.currently.icon;
  const nextDay1WeatherIcon = data.daily.data[0].icon;
  const nextDay2WeatherIcon = data.daily.data[1].icon;
  const nextDay3WeatherIcon = data.daily.data[2].icon;

  todayWeatherIconElement.style.background = `url(./assets/img/${todayWeatherIcon}.svg) no-repeat rgba(255, 255, 0, 0.1) 50% 50%`;
  todayWeatherIconElement.style.backgroundSize = '100%';
  nextDay1WeatherIconElement.style.background = `url(./assets/img/${nextDay1WeatherIcon}.svg) no-repeat rgba(255, 255, 0, 0.1) 50% 50%`;
  nextDay1WeatherIconElement.style.backgroundSize = '100%';
  nextDay2WeatherIconElement.style.background = `url(./assets/img/${nextDay2WeatherIcon}.svg) no-repeat rgba(255, 255, 0, 0.1) 50% 50%`;
  nextDay2WeatherIconElement.style.backgroundSize = '100%';
  nextDay3WeatherIconElement.style.background = `url(./assets/img/${nextDay3WeatherIcon}.svg) no-repeat rgba(255, 255, 0, 0.1) 50% 50%`;
  nextDay3WeatherIconElement.style.backgroundSize = '100%';

  const nextDay1Temp = fToC((data.daily.data[0].temperatureHigh + data.daily.data[0].temperatureLow) / 2);
  const nextDay2Temp = fToC((data.daily.data[1].temperatureHigh + data.daily.data[1].temperatureLow) / 2);
  const nextDay3Temp = fToC((data.daily.data[2].temperatureHigh + data.daily.data[2].temperatureLow) / 2);

  const today = new Date(data.currently.time * 1000);

  const nextDay1 = new Date((data.currently.time + 86400) * 1000);
  const nextDay2 = new Date((data.currently.time + 172800) * 1000);
  const nextDay3 = new Date((data.currently.time + 259200) * 1000);
  const currTimeStr = today.toLocaleString('en-US', 
    {weekday: 'short', day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric', hour12: false, timeZone: data.timezone});
  const currTime = currTimeStr.replace(/\,/g, '');
  const nextWeekDay1 = nextDay1.toLocaleString('en-US', {weekday: 'long', timeZone: data.timezone});
  const nextWeekDay2 = nextDay2.toLocaleString('en-US', {weekday: 'long', timeZone: data.timezone});
  const nextWeekDay3 = nextDay3.toLocaleString('en-US', {weekday: 'long', timeZone: data.timezone});

  tempSpan.innerHTML = tempC + '&#176;';
  appTempSpan.innerHTML = appTempC + '&#176;';
  windSpan.innerHTML = windSpeed;
  humiditySpan.innerHTML = humidity;
  todayWeatherDate.innerHTML = currTime;
  nextDay1Span.innerHTML = nextWeekDay1;
  nextDay2Span.innerHTML = nextWeekDay2;
  nextDay3Span.innerHTML = nextWeekDay3;
  nextDay1TempSpan.innerHTML = nextDay1Temp + '&#176;';
  nextDay2TempSpan.innerHTML = nextDay2Temp + '&#176;';
  nextDay3TempSpan.innerHTML = nextDay3Temp + '&#176;';
  } catch(e) {
    console.error(e);
  }
}
