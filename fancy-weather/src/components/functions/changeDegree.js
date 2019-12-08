function fToC(temp) {
  return Math.round(5 / 9 * (temp - 32));
}

function cToF(temp) {
  return Math.round(9 / 5 * temp + 32);
}

export function changeDegree() {
  const fDeg = document.querySelector('#F');
  const cDeg = document.querySelector('#C');

  const nextDay1TempSpan = document.querySelector('#nextDay1>div>span');
  const nextDay2TempSpan = document.querySelector('#nextDay2>div>span');
  const nextDay3TempSpan = document.querySelector('#nextDay3>div>span');
  const appTempSpan = document.querySelectorAll('.today-weather__other>span')[1];
  const tempSpan = document.querySelector('.today-weather__forecast>span');

  fDeg.addEventListener('click', () => {
    if(fDeg.className === 'inactive') {
      cDeg.className = 'inactive';
      fDeg.className = 'active';
      nextDay1TempSpan.innerHTML = cToF(parseInt(nextDay1TempSpan.innerHTML)) + 'F';
      nextDay2TempSpan.innerHTML = cToF(parseInt(nextDay2TempSpan.innerHTML)) + 'F';
      nextDay3TempSpan.innerHTML = cToF(parseInt(nextDay3TempSpan.innerHTML)) + 'F';
      appTempSpan.innerHTML = cToF(parseInt(appTempSpan.innerHTML)) + 'F';
      tempSpan.innerHTML = cToF(parseInt(tempSpan.innerHTML)) + 'F';
    }
  });

  cDeg.addEventListener('click', () => {
    if(cDeg.className === 'inactive') {
      fDeg.className = 'inactive';
      cDeg.className = 'active';
      nextDay1TempSpan.innerHTML = fToC(parseInt(nextDay1TempSpan.innerHTML)) + '&#176;';
      nextDay2TempSpan.innerHTML = fToC(parseInt(nextDay2TempSpan.innerHTML)) + '&#176;';
      nextDay3TempSpan.innerHTML = fToC(parseInt(nextDay3TempSpan.innerHTML)) + '&#176;';
      appTempSpan.innerHTML = fToC(parseInt(appTempSpan.innerHTML)) + '&#176;';
      tempSpan.innerHTML = fToC(parseInt(tempSpan.innerHTML)) + '&#176;';
    }
  });
}
