let words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Black",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
  "Function",
];

// Select Level
let selectLevelBox = document.querySelector(".choose_level .select_level");
let containerOfSelect = document.querySelector(".choose_level");

// Add Levels
let lvls = {
  Beginner: 10,
  Amateur: 8,
  Regular: 6,
  Professional: 4,
  Superstar: 2,
};

// Default Levels
let lvlsName = `${selectLevelBox.value}`;
let lvlsSeconds = lvls[lvlsName];

// Catch Selectors
let heidO = document.querySelector(".heidO");
let heidT = document.querySelector(".heidT");
let control = document.querySelector(".control");
let message = document.querySelector(".message");
let lvlsNameSpan = document.querySelector(".message .lvl");
let lvlsSecondsSpan = document.querySelector(".message .seconds");
let startButton = document.querySelector(".start");
let theWord = document.querySelector(".the_word");
let input = document.querySelector(".input");
let upcomingWord = document.querySelector(".upcoming_word");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");
let footer = document.querySelector("footer");

// Select Box Function
function selectLevelFun() {
  lvlsName = `${selectLevelBox.value}`;
  lvlsSeconds = lvls[lvlsName];
  // Level Name + Seconds + Score
  lvlsNameSpan.innerHTML = lvlsName;
  lvlsSecondsSpan.innerHTML = lvlsSeconds;
  timeLeftSpan.innerHTML = lvlsSeconds;
  scoreTotal.innerHTML = words.length;
}

// Disable Paste Event
input.onpaste = function () {
  return false;
};

// Start Game
startButton.onclick = function () {
  heidO.style.cssText = "display: block;";
  heidT.style.cssText = "display: block;";
  control.style.cssText = "display: flex;";
  message.style.cssText = "padding: 15px; justify-content: space-between;";
  footer.remove();
  selectLevelFun();
  startButton.remove();
  input.style.cssText = "display: block;";
  upcomingWord.style.cssText = "display: flex;";
  containerOfSelect.remove();
  input.focus();
  genWords();
};

function genWords() {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  let wordIndex = words.indexOf(randomWord);
  words.splice(wordIndex, 1);
  theWord.innerHTML = randomWord;
  upcomingWord.innerHTML = "";

  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    div.textContent = words[i];
    upcomingWord.appendChild(div);
  }
  startPlay();
}

function startPlay() {
  timeLeftSpan.innerHTML = lvlsSeconds;
  let start = setInterval(function () {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML == 0) {
      clearInterval(start);
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        input.value = "";
        scoreGot.innerHTML++;

        if (words.length > 0) {
          genWords();
        } else {
          finishMessage.style.cssText = `display: flex;`;
          finishMessage.classList.add("fing");
          let span = document.createElement("span");
          span.textContent = "Congratulations";
          span.classList.add("good");
          finishMessage.appendChild(span);
          upcomingWord.remove();
          setTimeout(function () {
            window.location.reload();
          }, 2000);
        }
      } else {
        finishMessage.style.cssText = `display: flex;`;
        finishMessage.classList.add("finb");
        let span = document.createElement("span");
        span.textContent = "Game Over";
        span.classList.add("bad");
        finishMessage.appendChild(span);
        setTimeout(function () {
          window.location.reload();
        }, 1500);
      }
    }
  }, 1000);
}
