export function initHTML() {
  const wrapper = document.createElement('div');
  wrapper.setAttribute('class','wrapper');
  wrapper.innerHTML = `
      <section class="control">
        <div class="control__panel">
          <div class="control__panel_refresh" id="refresh"></div>
          <div class="control__panel_lang">
            <div class="active">EN</div>
            <div class="inactive">RU</div>
            <div class="inactive">BE</div>
          </div>
          <div class="control__panel_deg" id="degControl">
            <div class="inactive" id="F">&#176;F</div>
            <div class="active" id="C">&#176;C</div>
          </div>
        </div>
        <div class="control__search">
          <input type="text" class="control__search_input" placeholder="Search city" id="search">
          <div class="control__search_micro" id="micro"></div>
          <div class="control__search_button" id="searchButton">SEARCH</div>
        </div>
      </section>

      <section class="today-weather">
        <div class="today-weather__container1">
          <p class="today-weather__place">MINSK, BELARUS</p>
          <p class="today-weather__date">Mon 28 October 17:23</p>
          <p class="today-weather__forecast"><span>10&#176;</span></p>
        </div>
        <div class="today-weather__container2">
          <div class="today-weather__icon"></div>
          <div class="today-weather__other">
            <p>OVERCAST</p>
            <span class="not" id="feels">FEELS LIKE</span>: <span>7&#176;</span><br>
            <span class="not" id="wind">WIND</span>: <span>2.5</span>m/s<br>
            <span class="not" id="humidity">HUMIDITY</span>: <span>83</span>%
          </div>
        </div>
      </section>

      <section class="weather-forecast">
        <div class="weather-forecast__day" id="nextDay1">
          <span>TUESDAY</span><br>
          <div><span>7&#176;</span><div></div></div>
        </div>
        <div class="weather-forecast__day" id="nextDay2">
          <span>WEDNESDAY</span><br>
          <div><span>6&#176;</span><div></div></div>
        </div>
        <div class="weather-forecast__day" id="nextDay3">
          <span>THURSDAY</span><br>
          <div><span>3&#176;</span><div></div></div>
        </div>
      </section>

      <section class="location">
        <div class="location__map" id="map"></div>
        <div class="location__coord">
          <span id="lat">Latitude</span>: <span id="latSpan">53&#176;54'</span><br>
          <span id="lon">Longitude</span>: <span id="lonSpan">27&#176;34'</span>
        </div>
      </section>
  `;
  const body = document.querySelector('body');
  body.append(wrapper);
}
