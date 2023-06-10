const sixLetters = [
  "wealth",
  "growth",
  "memory",
  "estate",
  "farmer",
  "camera",
  "tongue",
  "sister",
  "person",
  "speech",
  "county",
  "volume",
  "player",
  "editor",
  "basket",
];

const sevenLetters = [
  "ability",
  "variety",
  "analyst",
  "opinion",
  "airport",
  "country",
  "mixture",
  "success",
  "drawing",
  "finding",
  "concept",
  "manager",
  "setting",
  "message",
  "chapter",
];

const eightLetters = [
  "baseball",
  "analysis",
  "medicine",
  "sympathy",
  "location",
  "resource",
  "director",
  "response",
  "magazine",
  "patience",
  "midnight",
  "addition",
  "employer",
  "guidance",
  "contract",
];

const getWord = (wordLength = 6) => {
  let wordsDB;
  switch (wordLength) {
    case 6:
      wordsDB = sixLetters;
      break;
    case 7:
      wordsDB = sevenLetters;
      break;
    case 8:
      wordsDB = eightLetters;
      break;
    default:
      wordsDB = sixLetters;
  }

  const word = wordsDB[Math.floor(Math.random() * wordsDB.length)];
  return word;
};

export default getWord;
