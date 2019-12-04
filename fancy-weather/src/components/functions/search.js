const KEY = '170c2c7305f64259838058f18894a876';
const locationCoord1 = document.querySelector('.location__coord>span:first-child');
const locationCoord2 = document.querySelector('.location__coord>span:last-child');
const placeP = document.querySelector('.today-weather__place');

export async function getCoordinatesFromSearch(f1, ...args) {
  const City = document.querySelector('#search').value;
  if(!City && City.length < 3) return;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${City}&key=${KEY}&pretty=1&no_annotations=1`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const lat = ((data.results[0].bounds.northeast.lat + data.results[0].bounds.southwest.lat) / 2).toFixed(2);
    const lng = ((data.results[0].bounds.northeast.lng + data.results[0].bounds.southwest.lng) / 2).toFixed(2);
    console.log(lat,lng);
    placeP.innerHTML = City;
    locationCoord1.innerHTML = lat;
    locationCoord2.innerHTML = lng;
    f1(Number(lng), Number(lat));
    args.forEach((func) => {
      func(Number(lat), Number(lng));
    });
  } catch(e) {
    console.error(e);
  }
}


