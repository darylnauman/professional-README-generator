// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project title? ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the project description? ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions? ',
        name: 'installInstructions',
    },
    {
        type: 'input',
        message: 'What is the usage information? ',
        name: 'usageInfo',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines? ',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'What are the test instructions? ',
        name: 'testInstructions',
    },
    {
        type: 'list',
        message: 'What is the license? ',
        name: 'license',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username? ',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'What is your email address? ',
        name: 'email',
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(
            questions
        )
        .then((answers) => {
            console.log(JSON.stringify(answers));
        })
};

// Function call to initialize app
init();

// ACCEPTANCE CRITERIA

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README