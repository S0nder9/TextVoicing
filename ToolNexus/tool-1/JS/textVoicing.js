const header = document.querySelector(".header");
const headerScroll = document.querySelector(".header-scroll");
const btnStart = document.querySelector(".btn");
const firstStep = document.querySelector(".text-container");
const submit = document.querySelector(".button");
const recording = document.querySelector(".audio-recording");
const textarea = document.querySelector(".textarea");
const download = document.querySelector(".download");
const play = document.getElementById("play");

const textEl = document.querySelector('.textarea');
const voiceInEl = document.getElementById('voice');
const pitchInEl = document.getElementById('pitch');
const rateInEl = document.getElementById('rate');
const volumeInEl = document.getElementById('volume');
const pitchOutEl = document.querySelector('output[for="pitch"]');
const rateOutEl = document.querySelector('output[for="rate"]');
const volumeOutEl = document.querySelector('output[for="volume"]');
const speakEl = document.getElementById('fa-play');

pitchInEl.addEventListener('change', updateOutputs);
rateInEl.addEventListener('change', updateOutputs);
volumeInEl.addEventListener('change', updateOutputs);
speakEl.addEventListener('click', speakText);

updateVoices();
window.speechSynthesis.onvoiceschanged = updateVoices;

function updateOutputs() {
  pitchOutEl.textContent = pitchInEl.value;
  rateOutEl.textContent = rateInEl.value;
  volumeOutEl.textContent = volumeInEl.value;
}

function updateVoices() {
  window.speechSynthesis.getVoices().forEach(voice => {
    const isAlreadyAdded = [...voiceInEl.options].some(option => option.value === voice.voiceURI);
    if (!isAlreadyAdded) {
      const option = new Option(voice.name, voice.voiceURI, voice.default, voice.default);
      voiceInEl.add(option);
    }
  });
}

let utterance = null;

function speakText() {
    window.speechSynthesis.cancel();
    const text = textEl.value;
    utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.voiceURI === voiceInEl.value);
    utterance.pitch = pitchInEl.value;
    utterance.rate = rateInEl.value;
    utterance.volume = volumeInEl.value;
    window.speechSynthesis.speak(utterance);
}

const playEl = document.getElementById('fa-play');
// const pauseEl = document.getElementById('fa-pause');
const stopEl = document.getElementById('fa-play-second');

playEl.addEventListener('click', function () {
    // if (utterance && window.speechSynthesis.speaking) {
    //     window.speechSynthesis.resume();
    // } else {
        speakText();
    // }
});

function updateCursor() {
  if (window.speechSynthesis.speaking === true) {
    speakEl.style.cursor = "not-allowed";
  } else {
    speakEl.style.cursor = "pointer";
  }
}

// Check and update cursor initially
updateCursor();

// Add event listener to continuously monitor the state of speech synthesis
window.addEventListener('mousemove', updateCursor);

// pauseEl.addEventListener('click', function () {
//  window.speechSynthesis.pause();
// });

stopEl.addEventListener('click', function () {
    window.speechSynthesis.cancel();
});
