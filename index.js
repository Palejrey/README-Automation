
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
// TODO: Create an array of questions for user input
const questions = ["What is the title of your project: ",
     "Please enter the description of the project: ", 
    "Please enter your table of Contents and please separate each entry with a comma: ", 
    "Please enter the installation instructions: ", 
    "Please enter how to use your project: ", 
    "Please enter any liscense used in this project: ", 
    "Please enter any contribution guidelines: ", 
    "Please enter any test instructions: ",
    "Please enter your GitHub username: ",
    "Please enter your email: "];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let title;
    let table =[];
    if (data.License === "GNU General Public License v3.0"){
        title = data.Title + "🏫";
    }
    else if(data.License === "Mit License"){
        title = data.Title + "👩🏽‍💻";
    }
    else if(data.License === "Boost Software License v1.0"){
        title = data.Title + "🚀";
    }
    else if(data.License === "Mozilla Public License 2.0"){
        title = data.Title + "🦊";
    }
    else if(data.License ==="Eclipse Public License 2.0"){
        title = data.Title + "🌙";
    }
    else{
        title = data.Title;
    }
    tableArray = (data.Table).split(",");

    //- [Installation](#installation)
    for (let i = 0; i < tableArray.length; i++){
        table.push(`[${tableArray[i]}](#${tableArray[i]})`);
    }
    table = table.slice(0);
    const fullURL = "https://github.com/"+ data.GitHub;
    const completeReadMePt1 = `# ${title} \n ## Description \n ${data.Description} \n ## Table of Contents: \n ${table} \n  `;
    const completeReadMePt2 = `## Installation Instructions: \n ${data.Installation} \n ##  Usage \n ${data.Usages} \n ## Contribution Guidelines: \n ${data.Contibutions} \n`;
    const completeReadMePt3 = `## License: \n The application is covered under the ${data.License} . \n ## Tests: \n ${data.Test} \n ## Questions: \n` ;
    const questions = "For any further questions regading the application,  you can contact me at: " + fullURL +" or "+ data.Email;
    const completeReadMe = completeReadMePt1 + completeReadMePt2 + completeReadMePt3 + questions;
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
            choices : ["GNU General Public License v3.0","Mit License","Boost Software License v1.0","Mozilla Public License 2.0","Eclipse Public License 2.0"],
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
