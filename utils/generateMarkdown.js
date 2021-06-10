// https://choosealicense.com/licenses/

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
  // console.log('in generate markdown function');
  return `# ${data.title}
## Description\n${data.description}\n
## Installation\n${data.installInstructions}\n
## Usage\n${data.usageInfo}\n
## Contributing\n${data.guidelines}\n
## Tests\n${data.testInstructions}\n
## Questions\nhttps://github.com/${data.userName}\nReach me at: ${data.email}`;
}

module.exports = generateMarkdown;
