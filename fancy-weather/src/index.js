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
const micro = document.querySelector('#micro');

if (!navigator.userAgent.includes('Chrome')) micro.style.background = 'rgba(76, 82, 85, 0.4)';

function helpSearch() {
  getCoordinatesFromSearch(createMap, getWeather, getLinkToImage);
  langPanelDivs.forEach((x) => {
    if (x.classList.contains('active')) {
      translate(x, langPanelDivs[0]);
      x.classList.remove('active');
      x.classList.add('inactive');
    }
  });
  langPanelDivs[0].classList.remove('inactive');
  langPanelDivs[0].classList.add('active');
}

searchButton.addEventListener('click', helpSearch);

document.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') helpSearch();
});


refresh.addEventListener('click', getLinkToImage);

setTimeout(getLinkToImage, 1000);

getLocation(createMap, getWeather);

voiceSearch();

changeDegree();

langPanel.addEventListener('click', (e) => {
  const { target } = e;
  let active;
  langPanelDivs.forEach((x) => {
    if (x.classList.contains('active')) {
      active = x;
      x.classList.remove('active');
      x.classList.add('inactive');
    }
  });
  target.classList.remove('inactive');
  target.classList.add('active');
  translate(active, target);
});
