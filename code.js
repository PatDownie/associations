const group1 = "georges";
const group2 = "incomplete musicals";
const group3 = "incomplete star wars films";
const group4 = "keyboard keys";

const wordArray = [
  { word: "bush", group: group1 },
  { word: "boy", group: group1 },
  { word: "washington", group: group1 },
  { word: "curious", group: group1 },

  { word: "phantom", group: group2 },
  { word: "mama", group: group2 },
  { word: "lion", group: group2 },
  { word: "les", group: group2 },

  { word: "clone", group: group3 },
  { word: "revenge", group: group3 },
  { word: "new", group: group3 },
  { word: "empire", group: group3 },

  { word: "return", group: group4 },
  { word: "space", group: group4 },
  { word: "shift", group: group4 },
  { word: "escape", group: group4 },
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

let completedGroups = 0;

function handleGuess() {
  if ((guessButtonActive = 1)) {
    if (
      wordArray[guessesArray[0]].group == wordArray[guessesArray[1]].group &&
      wordArray[guessesArray[0]].group == wordArray[guessesArray[2]].group &&
      wordArray[guessesArray[0]].group == wordArray[guessesArray[3]].group
    ) {
      console.log("yay");
      for (let i = 0; i < guessesArray.length; i++) {
        const word = document.getElementById(`${guessesArray[i]}`);
        word.className = "solved";
      }
      completedGroups++;

      const resultLocation = document.getElementById(
        "result" + completedGroups
      );
      resultLocation.innerHTML =
        completedGroups + ". " + wordArray[guessesArray[0]].group;

      guessesArray = [];
      selectedWords = 0;
      if (completedGroups == 4) {
        const title = document.getElementById("title");
        title.innerHTML = "U R Smart :)";
        title.className = "pulsing";
      }

      console.log(guessesArray);
    } else {
      console.log("boo");
    }
  }
}

for (let i = 0; i <= 15; i++) {
  const word = document.getElementById(`${i}`);
  word.addEventListener(`click`, () => handleWordClick(word));
}
