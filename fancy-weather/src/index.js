import './style.scss';
import { getLinkToImage } from './components/functions/getLinkToImage';
import { getLocation } from './components/functions/getLocation';
import { createMap } from './components/functions/createMap';
import { getWeather } from './components/functions/getWeather';

const refresh = document.querySelector('.control__panel_refresh');

getLinkToImage();

refresh.addEventListener('click', getLinkToImage);

getLocation(createMap, getWeather);
