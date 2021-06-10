// https://choosealicense.com/licenses/
// https://shields.io/
// ![GNU AGPLv3](https://img.shields.io/badge/license-GNU%20AGPLv3-blue.svg)
// ![GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-blue.svg)
// ![GNU LGPLv3](https://img.shields.io/badge/license-GNU%20LGPLv3-blue.svg)
// ![Mozilla Public License 2.0](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-blue.svg)
// ![Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg)
// ![MIT License](https://img.shields.io/badge/license-MIT%20License-blue.svg)
// ![Boost Software License 1.0](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-blue.svg)
// ![The Unlicense](https://img.shields.io/badge/license-The%20Unlicense-blue.svg)

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {



  return `# ${data.title}
## Table of Contents\n
[Description](#description)\n
[Installation](#installation)\n
[Usage](#usage)\n
[Contributing](#contributing)\n
[Tests](#tests)\n
[Questions](#questions)\n

## Description\n${data.description}\n
## Installation\n${data.installInstructions}\n
## Usage\n${data.usageInfo}\n
## Contributing\n${data.guidelines}\n
## Tests\n${data.testInstructions}\n
## Questions\n
https://github.com/${data.userName} \n
Reach me at: ${data.email}`
}

module.exports = generateMarkdown;
