// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a brief description of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide instructions for installation:",
    },
    {
        type: "input",
        name: "usage",
        message: "How is this project used?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose the appropriate license for your project:",
        choices: [
            "MIT",
            "GNU",
            "Mozilla",
            "Apache",
            "Boost",
            "Unilicense"
        ]
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors on this project?"
    },
    {
        type: "confirm",
        name: "tests",
        message: "Are there tests included in this application?"
    },

    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address:"
    }

]).then(({
    projectTitle,
    description,
    installation,
    usage,
    license,
    contributors,
    tests,
    username,
    email,

}) => {
    const template =
        `# ${projectTitle}

    ## Table of Contents
    * Description
    * Usage
    * Installation
    * License
    * Contributors
    * Tests
    * Questions


    ## Description
    ${description}

    ## Usage
    ${usage}

    ## Installation
    ${installation}

    ## License
    ${license}

    ## Contributors
    ${contributors}

    ## Tests
    ${tests}

    ## Questions? Contact Me:
    * GitHub: ${username}
    * Email: ${email}
    `

    writeToFile(fileName, template);
}
);


// TODO: Create a function to write README file
{

    fs.writeFile('./fileName.md', template, (err) => {
        if(err) return console.log(err);
        
console.log('Your README has been generated');

    })
}


// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();
