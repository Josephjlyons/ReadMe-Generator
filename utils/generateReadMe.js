// Generate ReadMe functions for populating file

function generateMd(answers) {
    return ` 
# ${answers.projectTitle}
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Table of Contents 
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Technology](#Technology)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions/Contact](#Questions)
* [License](#License)


## Description
    ${answers.description}


## [Installation](#Installation)
    ${answers.installation}

## [Usage](#Usage)
    ${answers.usage}

## [Technology](#Technology)
    ${answers.technology}    
    
## [Contributing](#Contributing)
    ${answers.contributing}
    
## [Tests](#Tests)
    ${answers.tests}
    
## [Questions](#Questions)
* [GitHub](https://github.com/${answers.github})
* [LinkedIn](${answers.linkedin})
* [Email](mailto:${answers.email})
    
## [License](#License)
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
        This application is covered by the ${answers.license} license.
    `;
}

module.exports = generateMd