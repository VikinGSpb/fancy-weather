const locationCoord1 = document.querySelector('.location__coord>span:first-child');
const locationCoord2 = document.querySelector('.location__coord>span:last-child');

function degToDegMin(deg) {
  return `${Math.floor(Number(deg))}&#176;${Math.floor(Math.round((Number(deg) - Math.floor(Number(deg))) * 3600) / 60)}'`;
}

function createMap(center1, center2) {
  mapboxgl.accessToken = 'pk.eyJ1IjoidmlraW5nc3BiIiwiYSI6ImNrM2tqNGQ3dTAzaTMzbXBoc3M2b2F1M24ifQ.Bp3PDP-MfQIRDxkvbivaIA';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [center1, center2],
    zoom: 9,
  });
}

export async function getLocation() {
  const url = 'https://ipinfo.io/geo?token=a4c83857cf016c';
  const response = await fetch(url);
  const location = await response.json();
  const loc = await location.loc.split(',');
  locationCoord1.innerHTML = degToDegMin(loc[0]);
  locationCoord2.innerHTML = degToDegMin(loc[1]);
  createMap(Number(loc[1]), Number(loc[0]));
}
