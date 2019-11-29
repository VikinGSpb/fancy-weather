import './style.scss';
import { getLinkToImage } from './components/functions/getLinkToImage';
import { getLocation } from './components/functions/getLocation';

const refresh = document.querySelector('.control__panel_refresh');

getLinkToImage();

refresh.addEventListener('click', getLinkToImage);

getLocation();
