export function voiceSearch() {
  if (!navigator.userAgent.includes('Chrome')) return;

  const cityInput = document.querySelector('#search');
  const microButton = document.querySelector('#micro');

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.addEventListener('result', (e) => {
    const transcript = Array.from(e.results).map((result) => result[0]).map((result) => result.transcript).join('');
    cityInput.value = transcript;
  });
  microButton.addEventListener('click', () => {
    recognition.start();
  });
}
