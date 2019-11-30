const locationCoord1 = document.querySelector('.location__coord>span:first-child');
const locationCoord2 = document.querySelector('.location__coord>span:last-child');
const placeP = document.querySelector('.today-weather__place');

function degToDegMin(deg) {
  return `${Math.floor(Number(deg))}&#176;${Math.floor(Math.round((Number(deg) - Math.floor(Number(deg))) * 3600) / 60)}'`;
}

/* f1 parameters - long, lat; other functions - lat, long */
export async function getLocation(f1, ...args) {
  const url = 'https://ipinfo.io/geo?token=a4c83857cf016c';
  const response = await fetch(url);
  const location = await response.json();
  const loc = await location.loc.split(',');
  const place = location.city;
  placeP.innerHTML = place;
  locationCoord1.innerHTML = degToDegMin(loc[0]);
  locationCoord2.innerHTML = degToDegMin(loc[1]);
  f1(Number(loc[1]), Number(loc[0]));
  args.forEach((func) => {
    func(Number(loc[0]), Number(loc[1]));
  });
}
