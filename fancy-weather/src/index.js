import './style.scss';
import { initHTML } from './components/functions/initHTML';
import { getLinkToImage } from './components/functions/getLinkToImage';
import { getLocation } from './components/functions/getLocation';
import { createMap } from './components/functions/createMap';
import { getWeather } from './components/functions/getWeather';
import { getCoordinatesFromSearch } from './components/functions/search';
import { voiceSearch } from './components/functions/voiceSearch';
import { changeDegree } from './components/functions/changeDegree';

initHTML();

const refresh = document.querySelector('#refresh');
const searchButton = document.querySelector('#searchButton');

searchButton.addEventListener('click', () => {
  getCoordinatesFromSearch(createMap, getWeather, getLinkToImage);
});

getLinkToImage();

refresh.addEventListener('click', getLinkToImage);

getLocation(createMap, getWeather);

voiceSearch();

changeDegree();
