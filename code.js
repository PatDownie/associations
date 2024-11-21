const group1 = "things on the roof";
const group2 = "things on rails";
const group3 = "georges";
const group4 = "things you press";

const wordArray = [
  { word: "fiddler", group: group1 },
  { word: "tile", group: group1 },
  { word: "skylight", group: group1 },
  { word: "ariel", group: group1 },

  { word: "tram", group: group2 },
  { word: "train", group: group2 },
  { word: "monorail", group: group2 },
  { word: "minecart", group: group2 },

  { word: "mallory", group: group3 },
  { word: "bush", group: group3 },
  { word: "w bush", group: group3 },
  { word: "curious", group: group3 },

  { word: "coffee", group: group4 },
  { word: "button", group: group4 },
  { word: "trousers", group: group4 },
  { word: "gang", group: group4 },
];

function shuffleArray() {
  for (let i = wordArray.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let temp = wordArray[i];
    wordArray[i] = wordArray[j];
    wordArray[j] = temp;
  }
}

shuffleArray();

function writeWordsToGrid() {
  for (let i = 0; i <= 15; i++) {
    document.getElementById(i).innerHTML = wordArray[i].word;
  }
}

writeWordsToGrid();

function handleShuffleButton() {
  shuffleArray();
  writeWordsToGrid();
}

let selectedWords = 0;
const guessButton = document.getElementById("guessButton");
let guessButtonActive = 0;
let guessesArray = [];

function updateGuessesArray() {
  guessesArray = [];
  for (let i = 0; i <= 15; i++) {
    const word = document.getElementById(`${i}`);
    if (word.className == "selected") {
      guessesArray.push(Number(word.id));
    }
  }
  console.log(guessesArray);
}

function handleWordClick(x) {
  if (x.className == "solved") {
  } else if (x.className == "unselected") {
    if (selectedWords < 4) {
      x.className = "selected";
      selectedWords++;
      updateGuessesArray();
      if (selectedWords == 4) {
        guessButtonActive = 1;
      }
    }
  } else {
    x.className = "unselected";
    selectedWords--;
    updateGuessesArray();
    guessButtonActive = 0;
  }
}

function handleGuess() {
  if ((guessButtonActive = 1)) {
    if (
      wordArray[guessesArray[0]].group == wordArray[guessesArray[1]].group &&
      wordArray[guessesArray[0]].group == wordArray[guessesArray[2]].group &&
      wordArray[guessesArray[0]].group == wordArray[guessesArray[3]].group
    ) {
      console.log("yay");
    } else {
      console.log("boo");
    }
  }
}

for (let i = 0; i <= 15; i++) {
  const word = document.getElementById(`${i}`);
  word.addEventListener(`click`, () => handleWordClick(word));
}
