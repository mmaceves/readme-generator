// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  } else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  } else if (license === 'BSD') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  } else if (license === 'GNU') {
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'Apache') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'BSD') {
    return '(https://opensource.org/licenses/BSD-3-Clause)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `This project is licensed under the MIT license. ${renderLicenseLink(license)}`;
  } else if (license === 'GNU') {
    return `This project is licensed under the GNU license. ${renderLicenseLink(license)}`;
  } else if (license === 'Apache') {
    return `This project is licensed under the Apache license. ${renderLicenseLink(license)}`;
  } else if (license === 'BSD') {
    return `This project is licensed under the BSD license. ${renderLicenseLink(license)}`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributions
  ${data.contributions}
  ## Tests
  ${data.tests}
  ## Questions
  * GitHub: [${data.github}]
  * Email: [${data.email}]
`};

export default generateMarkdown;
