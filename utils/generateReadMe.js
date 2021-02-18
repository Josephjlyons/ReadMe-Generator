// Generate ReadMe functions for populating file

function generateMd(answers) {
    return ` 
# ${answers.projectTitle}
![badge](https://img.shields.io/badge/license-${answers.license}-brightblue)<br />

## Description
    ${answers.description}


## Table of Contents 
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [Contact](#Contact)


## [Installation](#Installation)
    ${answers.installation}


## [License](#License)
![badge](https://img.shields.io/badge/license-${answers.license}-brightblue)
    This application is covered by the ${answers.license} license.

## [Contributing](#Contributing)
    ${answers.contributing}

## [Tests](#Tests)
    ${answers.tests}

## [Questions](#Questions)
    ${answers.questions}

## [Contact](#Contact)
[${answers.github}](https://github.com/${answers.github})
${answers.linkedin}
${answers.email}(http)
    

    `;
}

module.exports = generateMd