// Generate ReadMe functions for populating file

function generateMd(answers) {
    return ` 
    # ${answers.projectTitle}

    ## Description
    ${answers.description}


    ## Table of Contents 
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    - [Contact](#contact)


    ## Installation
    ${answers.installation}


    ## License 
    This application is covered by the ${answers.license} license.

    ## Contributors 
    ${answers.contributing}

    ## Tests 
    ${answers.tests}

    ## Questions 
    ${answers.questions}

    ## Contact
    ${answers.email}
    ${answers.linkedin}
    

    `;
}

module.exports = generateMd