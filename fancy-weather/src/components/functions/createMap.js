export function createMap(center1, center2) {
  mapboxgl.accessToken = 'pk.eyJ1IjoidmlraW5nc3BiIiwiYSI6ImNrM2tqNGQ3dTAzaTMzbXBoc3M2b2F1M24ifQ.Bp3PDP-MfQIRDxkvbivaIA';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [center1, center2],
    zoom: 9,
  });
}
