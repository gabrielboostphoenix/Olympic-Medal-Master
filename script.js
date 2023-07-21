// Declaring the Array with the Objects inside it
let arrayOfObjects = [
    {
        rankPosition: "1°",
        nameCountry: "United States",
        goldMedalScore: 11,
        silverMedalScore: 11,
        bronzeMedalScore: 10,
        totalScore: 32
    },
    {
        rankPosition: "2°",
        nameCountry: "China",
        goldMedalScore: 10,
        silverMedalScore: 6,
        bronzeMedalScore: 9,
        totalScore: 25
    },
    {
        rankPosition: "3°",
        nameCountry: "Japan",
        goldMedalScore: 6,
        silverMedalScore: 1,
        bronzeMedalScore: 11,
        totalScore: 18,
    }
]

// Looping throught the array of objects and executing an arrow function on each iteration
arrayOfObjects.forEach((country) => {
    // Creating the element div
    let rowElement = document.createElement("div")
    // Setting an attribute class with the value "row" in a div element
    rowElement.setAttribute("class", "row")
    // Declaring the variable containing the default html code of each country
    let defaultStructure = `
        <div class="rank-column">
            <span>${country.rankPosition}</span>
        </div>
        <div class="country-column">
            <span>${country.nameCountry}</span>
        </div>
        <div class="column gold-medal-score-column">
            <span>${country.goldMedalScore}</span>
        </div>
        <div class="column silver-medal-score-column">
            <span>${country.silverMedalScore}</span>
        </div>
        <div class="column bronze-medal-score-column">
            <span>${country.bronzeMedalScore}</span>
        </div>
        <div class="column total-score-column">
            <span>${country.totalScore}</span>
        </div>
    `
    // Adding default html code containing each country's score result
    rowElement.innerHTML = defaultStructure
    // Creating the variable called "table section"
    let sectionElement = document.querySelector("article section")
    // Adding the child nodes inside the table section
    sectionElement.appendChild(rowElement)
})