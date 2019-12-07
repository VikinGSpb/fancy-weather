export async function getLinkToImage() {
  const width = screen.width.toString();
  const height = screen.height.toString();
  const body = document.querySelector('body');

  const url = 'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature+night+snow+winter'
   + '&client_id=a2840b831d7df553cc4c7c1492e8602cbd21b24a89cb2050aaf67407e892be30';
  try {
    const response = await fetch(url);
    const data = await response.json();
    const image = document.createElement('img');
    image.crossOrigin = 'Anonymous';
    const link = `${data.urls.raw}&w=${width}&h=${height}`;
    image.setAttribute('src', link);
    image.onload = () => {
      body.style.background = `url(${link}) no-repeat`;
      body.style.backgroundSize = 'cover';
    };
    image.onerror = () => {
      throw new Error('Data Error');
    };
  } catch (e) {
    console.error(e);
  }
}
