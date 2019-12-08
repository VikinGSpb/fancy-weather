import './style.scss';
import { initHTML } from './components/functions/initHTML';
import { getLinkToImage } from './components/functions/getLinkToImage';
import { getLocation } from './components/functions/getLocation';
import { createMap } from './components/functions/createMap';
import { getWeather } from './components/functions/getWeather';
import { getCoordinatesFromSearch } from './components/functions/search';
import { voiceSearch } from './components/functions/voiceSearch';
import { changeDegree } from './components/functions/changeDegree';
import { translate } from './components/functions/translate';

initHTML();

const refresh = document.querySelector('#refresh');
const searchButton = document.querySelector('#searchButton');
const langPanel = document.querySelector('.control__panel_lang');
const langPanelDivs = document.querySelectorAll('.control__panel_lang>div');

searchButton.addEventListener('click', () => {
  getCoordinatesFromSearch(createMap, getWeather, getLinkToImage);
});

getLinkToImage();

refresh.addEventListener('click', getLinkToImage);

getLocation(createMap, getWeather);

voiceSearch();

changeDegree();

langPanel.addEventListener('click', (e) => {
  const target = e.target;
  let active;
  langPanelDivs.forEach((x) => {
    if(x.classList.contains('active')) {
      active = x;
      x.classList.remove('active');
      x.classList.add('inactive');
    }
  });
  target.classList.remove('inactive');
  target.classList.add('active');
  translate(active, target);
});
