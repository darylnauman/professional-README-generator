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
    // {
    //     type: 'input',
    //     message: 'What is your email address? ',
    //     name: 'email',
    // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : null);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(
            questions
        )
        .then((data) => {
            return generateMarkdown(data);
        }).then((data) => {
            writeToFile('README.md', data);
        })
};

// Function call to initialize app
init();