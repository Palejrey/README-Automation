
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
// TODO: Create an array of questions for user input
const questions = ["What is the title of your project: ",
     "Please enter the description of the project: ", 
    "Please enter your table of Contents and please separate each entry with a comma and omit spaces: ", 
    "Please enter the installation instructions: ", 
    "Please enter how to use your project: ", 
    "Please enter any liscense used in this project: ", 
    "Please enter any contribution guidelines: ", 
    "Please enter any test instructions: ",
    "Please enter your GitHub username: ",
    "Please enter your email: "];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let shield;
    if (data.License === "GNU General Public License v3.0"){
        shield = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`;
    }
    else if(data.License === "Mit License"){
        shield = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    }
    else if(data.License === "Boost Software License v1.0"){
        shield = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
    }
    else if(data.License === "Mozilla Public License 2.0"){
        shield = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
    }
    else if(data.License ==="Eclipse Public License 2.0"){
        shield = `![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)`;
    }

    const fullURL = "https://github.com/"+ data.GitHub;
    const completeReadMePt1 = `# ${data.Title} \n ${shield} \n ## Description \n > ${data.Description} \n ## Table Of Contents \n`;
    const completeReadMePt2 = ` - [Installation](#Installation) \n - [Usage](#Usage) \n - [Contribution](#Contribution) \n - [License](#License) \n - [Tests](#) \n - [Questions](#Questions) \n`;
    const completeReadMePt3 = `## Installation \n > ${data.Installation} \n ## Usage \n > ${data.Usages} \n ## Contribution \n > ${data.Contibutions} \n`;
    const completeReadMePt4 = `## License \n The application is covered under the ${data.License} . \n ## Tests \n > ${data.Test} \n ## Questions \n` ;
    const questions = "For any further questions regading the application,  you can contact me at: " + fullURL +" or "+ data.Email;
    const completeReadMe = completeReadMePt1 + completeReadMePt2 + completeReadMePt3 + completeReadMePt4 +questions;
    
    fs.writeFile('README.md', completeReadMe, (err) =>
    err ? console.error(err) : console.log("Success!")); 
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type:"input",
            message:questions[0],
            name:"Title",
        },
        {
            type:"input",
            message:questions[1],
            name:"Description",  
        },
        {
            type:"input",
            message:questions[2],
            name:"Table",
        },
        {
            type:"input",
            message:questions[3],
            name:"Installation",
        },
        {
            type:"input",
            message:questions[4],
            name:"Usages",
        },
        {
            type:"list",
            message:questions[5],
            name:"License",
            choices : ["GNU General Public License v3.0","Mit License","Boost Software License v1.0","Mozilla Public License 2.0","Eclipse Public License 2.0","None"],
        },
        {
            type:"input",
            message:questions[6],
            name:"Contibutions",
            
        },
        {
            type:"input",
            message:questions[7],
            name:"Test",
        },
        {
            type:"input",
            message:questions[8],
            name:"GitHub",
        },
        {
            type:"input",
            message:questions[9],
            name:"Email",
        },
    ])
    .then((data) => {
        console.log(data);
      writeToFile("README.md",data);
    });

}

// Function call to initialize app
init();
