// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a short description of your project:",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicaple to this project:",
        choices: ["MIT", "APACHE 2.0", "Boost 1.0", "MPL 2.0", "BSD2", "BSD3", "None"],
    },
    {
        type: "input",
        name: "require",
        message: "List any project dependencies here:",
    },
    {
        type: "input",
        name: "features",
        message: "List features of project.",

    },
    {
        type: "input",
        name: "usage",
        message: "State the coding languages or technologies associated with this project.",
    },
    {
        type: "input",
        name: "contributors",
        message: "List contributors (Github usernames)",
    },
    {
        type: "input",
        name: "creator",
        message: "Write Github Username.",
    },
    {
        type: "input",
        name: "name",
        message: "Write your name.",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email adress?",
    },
    {
        type: "input",
        name: "test",
        message: "Provide walkthrough of tests if applicable",
    },

];

// TODO: Create a function to write README file


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data); 
}

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
