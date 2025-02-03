/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const btnNoun1 = document.getElementById("noun1");
const btnVerb = document.getElementById("verb");
const btnAdjective = document.getElementById("adjective");
const btnNoun2 = document.getElementById("noun2");
const btnSetting = document.getElementById("setting");

// Constants for p tag to display query selectors
const displayNoun1 = document.getElementById("choosenNoun1");
const displayVerb = document.getElementById("choosenVerb");
const displayAdjective = document.getElementById("choosenAdjective");
const displayNoun2 = document.getElementById("choosenNoun2");
const displaySetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const btnPlayback = document.getElementById("playback");
const btnRandom = document.getElementById("random");
const displayStory = document.getElementById("story");

// Variables for pre-defined arrays
const nouns = ["dog", "cat", "teacher", "robot", "alien"];
const verbs = ["runs", "jumps", "flies", "sings", "dances"];
const adjectives = ["happy", "angry", "excited", "tall", "colorful"];
const secondNouns = ["ball", "kite", "car", "book", "sandwich"];
const settings = ["park", "school", "beach", "forest", "space"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    displayNoun1.innerText = nouns[noun1Count];
    noun1Count = (noun1Count + 1) % nouns.length;
}

function verb_on_click() {
    displayVerb.innerText = verbs[verbCount];
    verbCount = (verbCount + 1) % verbs.length;
}

function adjective_on_click() {
    displayAdjective.innerText = adjectives[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

function noun2_on_click() {
    displayNoun2.innerText = secondNouns[noun2Count];
    noun2Count = (noun2Count + 1) % secondNouns.length;
}

function setting_on_click() {
    displaySetting.innerText = settings[settingCount];
    settingCount = (settingCount + 1) % settings.length;
}

// Concatenate the user story and display
function playback_on_click() {
    const story = `The ${displayAdjective.innerText} ${displayNoun1.innerText} ${displayVerb.innerText} a ${displayNoun2.innerText} at the ${displaySetting.innerText}.`;
    displayStory.innerText = story;
}

// Grabbing random elements from arrays, concatenating, and displaying
function random_on_click() {
    const randomStory = `The ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${
        nouns[Math.floor(Math.random() * nouns.length)]
    } ${verbs[Math.floor(Math.random() * verbs.length)]} a ${
        secondNouns[Math.floor(Math.random() * secondNouns.length)]
    } at the ${settings[Math.floor(Math.random() * settings.length)]}.`;
    displayStory.innerText = randomStory;
}

/* Event Listeners
-------------------------------------------------- */
// Add click listeners to the buttons
btnNoun1.addEventListener("click", noun1_on_click);
btnVerb.addEventListener("click", verb_on_click);
btnAdjective.addEventListener("click", adjective_on_click);
btnNoun2.addEventListener("click", noun2_on_click);
btnSetting.addEventListener("click", setting_on_click);
btnPlayback.addEventListener("click", playback_on_click);
btnRandom.addEventListener("click", random_on_click);

// Dynamically add student ID and name
document.getElementById("studentId").innerText = "Name: Teegan Buttigieg, ID: 1263104";
