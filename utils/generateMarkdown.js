// https://choosealicense.com/licenses/
// https://shields.io/


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![${license}](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if(license) {
    return `## License
This product is under the ${license}.\n`
  } else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

// renderLicenseBadge(data.license);

  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents\n
[Description](#description)\n
[Installation](#installation)\n
[Usage](#usage)\n
[Contributing](#contributing)\n
[Tests](#tests)\n
[Questions](#questions)\n

## Description\n${data.description}\n
${renderLicenseSection(data.license)}
## Installation\n${data.installInstructions}\n
## Usage\n${data.usageInfo}\n
## Contributing\n${data.guidelines}\n
## Tests\n${data.testInstructions}\n
## Questions\n
https://github.com/${data.userName} \n
Reach me at: ${data.email}`
}

module.exports = generateMarkdown;
