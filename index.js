// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

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

]).then((response) => {

    fs.writeFile('README.md', generateMarkdown(response), err => {
        if (err) throw err;
    });
}
);


