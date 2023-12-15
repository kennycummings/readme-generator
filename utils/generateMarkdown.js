// TODO: Create a function that returns the license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Check if a license is provided
  if (license) {
    // Return the license badge with the provided license
    return `![License Badge](https://img.shields.io/badge/License-${license}-blue)`;
  }
  // Return an empty string if no license is provided
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Check if a license is provided
  if (license) {
    // Return the license link based on the provided license
    return `[License Link](https://opensource.org/licenses/${license})`;
  }
  // Return an empty string if no license is provided
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Check if a license is provided
  if (license) {
    // Return the license section with the provided license
    return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }
  // Return an empty string if no license is provided
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents

* [Installation](#installation)
* [Use](#use)
* [License](#license)
* [Contributors](#contributors)
* [Test Instructions](#test_instructions)
* [Questions](#questions)

## Installation

${data.install}

## Use

${data.use}

${renderLicenseSection(data.license)}

## Contributors

${data.contribute}

## Test Instructions

${data.tests}

## Questions

Contact me on GitHub at [${data.githubUsername}](https://www.github.com/${data.githubUsername})

Email me at [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
