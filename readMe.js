
// Requirements to run file

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMd = require('./utils/generateReadme');
const writeFileAsync = util.promisify(fs.writeFile);

// User prompts to populate ReadME file

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "list",
            name: "license",
            message: "Choose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "Github",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "linkedin",
            message: "Please enter your LinkedIn URL: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
};

async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const populateRM = generateMd(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', populateRM);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  
