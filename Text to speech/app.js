let formInput = document.querySelector(".input");
let formEl = document.querySelector("form");
let playBtn = document.querySelector(".play-btn");
let pauseBtn = document.querySelector(".pause-btn");
let stopBtn = document.querySelector(".stop-btn");
let clearBtn = document.querySelector(".clear-btn");

let text = "";

let wordUtteranceObj;

// Wait for the voices to be loaded
// speechSynthesis.addEventListener('voiceschanged', () => {
//     let voices = speechSynthesis.getVoices()
//     console.log(voices);
// });

const synth = window.speechSynthesis;

synth.addEventListener("voiceschanged", () => {
  const voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
});

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    getWord();
})

function getWord() {
    let inputedText = formInput.value;
    // console.log(inputedText);

    text = `${inputedText}`;

    console.log(text.length)


    // if (text.length === true) {
    //     // pauseBtn.classList.remove("show");
    //     playBtn.style.display = "block";

    // }

    if (text.length > 0) {
        playBtn.style.display = "block";
    }

    wordUtteranceObj = new SpeechSynthesisUtterance(text);

  // Set the selected voice from the dropdown
  const selectedVoice = voiceSelect.options[voiceSelect.selectedIndex];
  wordUtteranceObj.voice = synth.getVoices().find(
    (voice) =>
      voice.name === selectedVoice.getAttribute("data-name") &&
      voice.lang === selectedVoice.getAttribute("data-lang")
  );

     // Listen for the end event to handle completion
     wordUtteranceObj.addEventListener('end', () => {
        pauseBtn.classList.remove("show");
        playBtn.style.display = "block";
    });
}


playBtn.addEventListener("click", () => {
    speechSynthesis.speak(wordUtteranceObj);
    playBtn.style.display = "none";
    pauseBtn.classList.add("show");
    speechSynthesis.resume();
})

pauseBtn.addEventListener("click", () => {
    speechSynthesis.pause(wordUtteranceObj);
    pauseBtn.classList.remove("show");
    playBtn.style.display = "block";
})

stopBtn.addEventListener("click", () => {
    speechSynthesis.cancel();
    pauseBtn.classList.remove("show");
    playBtn.style.display = "block";
    // getWord()
})

clearBtn.addEventListener("click", function () {
    speechSynthesis.cancel();
    pauseBtn.classList.remove("show");
    playBtn.style.display = "block";
    formInput.value = "";
})



// function populateVoiceList() {
//     if (typeof speechSynthesis === "undefined") {
//       return;
//     }
  
//     const voices = speechSynthesis.getVoices();

//     console.log(voices)
  
//     for (let i = 0; i < voices.length; i++) {
//       const option = document.createElement("option");
//       option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
//       if (voices[i].default) {
//         option.textContent += " — DEFAULT";
//       }
  
//       option.setAttribute("data-lang", voices[i].lang);
//       option.setAttribute("data-name", voices[i].name);
//       document.getElementById("voiceSelect").appendChild(option);
//     }
// }
  
//   populateVoiceList();
  
//   if (
//     typeof speechSynthesis !== "undefined" &&
//     speechSynthesis.onvoiceschanged !== undefined
//   ) {
//     speechSynthesis.onvoiceschanged = populateVoiceList;
//   }