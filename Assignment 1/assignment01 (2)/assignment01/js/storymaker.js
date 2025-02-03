// VARIABLE DECLARATIONS

/* STEP 1: Declare and initialize variables
- customName for the name field
- randomize for the button
- story for the paragraph that outputs the final story
*/
var customName = document.getElementById("customName");
var randomize = document.getElementById("random");
var showStory = document.getElementById("playback"); // Show Story button
var story = document.getElementById("story");

// Add new button variables
var noun1 = document.getElementById("noun1");
var verb = document.getElementById("verb");
var adjective = document.getElementById("adjective");
var noun2 = document.getElementById("noun2");
var setting = document.getElementById("setting");

// Add new paragraph variables to display choices
var choosenNoun1 = document.getElementById("choosenNoun1");
var choosenVerb = document.getElementById("choosenVerb");
var choosenAdjective = document.getElementById("choosenAdjective");
var choosenNoun2 = document.getElementById("choosenNoun2");
var choosenSetting = document.getElementById("choosenSetting");

// Store selected choices
var selectedNoun1 = "";
var selectedVerb = "";
var selectedAdjective = "";
var selectedNoun2 = "";
var selectedSetting = "";

/* STEP 3: Create the variable that contains the story string that will be modified 
- use var storyText to containt the following:
'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
*/
var storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;

/* STEP 4: Create three arrays, insertX, insertY, and insertZ, assigning them the following array values respectively:
Donald Trump, Jackie Chan, Santa Claus
Area 51, Death Valley, Aruba
spontaneously combusted, rapidly sublimated, evaporated instantly
*/
var insertX = ["Donald Trump", "Jackie Chan", "Santa Claus"];
var insertY = ["Area 51", "Death Valley", "Aruba"];
var insertZ = ["spontaneously combusted", "rapidly sublimated", "evaporated instantly"];

// FUNCTIONS

/* STEP 2: have a look at the following function - if you call this function and pass it an array, it will return one of the elements of that array randomly */
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* STEP 6: Review the partially complete result() function below */
function result() {
    // STEP 7: Create a new variable called newStory and 
    //set it to the value of storyText - we don't want to overwrite the original story!
    var newStory = storyText;

    /* STEP 8: Use the randomValueFromArray() function to generate a value for 
    each of three new variables - xItem, yItem, and zItem
    Call up the function and for each variable, pass it the array from 
    which to grab a random string */
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    //console.log(xItem);
    /* STEP 9: Replace the three placeholders in the newStory 
    string — :insertx:, :inserty:, and :insertz: — with the strings stored in 
    xItem, yItem, and zItem. Each time, be sure to update the variable newStory 
    (with =). You might need to do one of the above replacements twice! */
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    /* STEP 10: If the user has typed a name in the customName field, replace the name 'Bob' in the story with whatever they typed */
    if (customName.value !== "") {
        var name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    /* STEP 11: If the metric radio button has been checked, we need to convert the temperature and mass numbers in the story */
    if (document.getElementById("metric").checked) {
        // STEP 11a: Create a variable called weight and convert the 300lbs to kgs (1lb = 0.453592kg)
        var weight = Math.round(300 * 0.453592);
        
        // STEP 11b: Replace the string 300 pounds with the updated weight in kg
        newStory = newStory.replace("300 pounds", weight + " kilograms");
        
        // STEP 12a: Create a variable called temp and convert °F to °C ... the formula for conversion is °C = (°F - 32) x 5/9
        var temp = Math.round((94 - 32) * 5 / 9);
        
        // STEP 12b: Replace the string '94 fahrenheit' with the updated temperature in °C
        newStory = newStory.replace("94 fahrenheit", temp + " celsius");
    }

    /* STEP 13: Make the textContent property of the story variable (which references the paragraph) equal to newStory */
    story.textContent = newStory;

    // The following line makes the paragraph visible
    story.style.visibility = "visible";
}

// Add event listeners for the new buttons to update choices
noun1.addEventListener("click", function() {
    selectedNoun1 = randomValueFromArray(insertX);
    choosenNoun1.textContent =  selectedNoun1;
});
verb.addEventListener("click", function() {
    selectedVerb = randomValueFromArray(insertZ);
    choosenVerb.textContent = selectedVerb;
});
adjective.addEventListener("click", function() {
    selectedAdjective = randomValueFromArray(insertY);
    choosenAdjective.textContent =  selectedAdjective;
});
noun2.addEventListener("click", function() {
    selectedNoun2 = randomValueFromArray(insertX);
    choosenNoun2.textContent =  selectedNoun2;
});
setting.addEventListener("click", function() {
    selectedSetting = randomValueFromArray(insertY);
    choosenSetting.textContent = selectedSetting;
});

// EVENT LISTENERS
/* STEP 5: Add a click event listener to the randomize variable 
so that when the button it represents is clicked, the result() function is run. */
randomize.addEventListener("click", result);

// EVENT LISTENER FOR SHOW STORY BUTTON
showStory.addEventListener("click", function() {
    // Create the story based on the selections made by the user
    if (selectedNoun1 && selectedVerb && selectedAdjective && selectedNoun2 && selectedSetting) {
        var customStory = 'It was 94 fahrenheit outside, so ' + selectedNoun1 + ' went for a walk. When they got to ' + selectedSetting + ', they stared in horror for a few moments, then ' + selectedVerb + '. ' + selectedNoun2 + ' saw the whole thing, but he was not surprised — ' + selectedNoun1 + ' weighs 300 pounds, and it was a hot day.';
        
        // Display the custom story
        story.textContent = customStory;
        story.style.visibility = "visible";
    } else {
        alert("Please choose all the options first!");
    }
});

// EVENT LISTENER FOR RANDOM STORY BUTTON
    randomize.addEventListener("click", function() {
        // Create a new story with random values for noun1, verb, adjective, noun2, and setting
        var randomNoun1 = randomValueFromArray(insertX);
        var randomVerb = randomValueFromArray(insertZ);
        var randomAdjective = randomValueFromArray(insertY);
        var randomNoun2 = randomValueFromArray(insertX);
        var randomSetting = randomValueFromArray(insertY);
    
        // Combine them into the story
        var randomStory = 'It was 94 fahrenheit outside, so ' + randomNoun1 + ' went for a walk. When they got to ' + randomSetting + ', they stared in horror for a few moments, then ' + randomVerb + '. ' + randomNoun2 + ' saw the whole thing, but he was not surprised — ' + randomNoun1 + ' weighs 300 pounds, and it was a hot day.';
    
        // Display the random story
        story.textContent = randomStory;
        story.style.visibility = "visible";


});
