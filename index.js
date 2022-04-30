// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const inqirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter project title:",
        name: "title"
    },
    {
        type: "input",
        message: "Enter installation instructions:",
        name: "installation" 
    },
    {
        type: "input",
        message: "Enter usage tips, trick and or tutorials:",
        name: "tips"
    },
    {
        type: "input",
        message: "Enter contribution guidelines:",
        name: "contribution"
    },
    {
        type: "input",
        message: "Enter any testing package instructions:",
        name: "testing"
    },
    {
        type: "list",
        message: "Choose license:",
        name: "license",
        choices: [
            "None",
            "MIT",
            "Apache 2.0",
            "GNU GPL 3.0",
            "Creative Commons Zero v1.0 Universal",
            "The Unlicense"
        ],
    },
    {
        type: "input",
        message: "Enter your Github username:",
        name: "github"
    },
    {
        type: "input",
        message: "Enter your email adress:",
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
    // fs.writeFileSync('./output/README.md', data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile()
    })
}

// Function call to initialize app
init();
