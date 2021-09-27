// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// wrapping function to to return inquirer returned data
const promptUser = () => {
    return inquirer.prompt([
        //project questions
        {
            type:'input',
            name: 'Title',
            message: 'What is your Project title?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Enter a description of your project',
        },
         {
            type: 'input',
            name: 'installation',
            message: 'Provide instructions for installation',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Provide any usage information',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide instructions for installation',
        },
        {
        type: 'checkbox',
        name: 'license',
        message: 'What License did you use for this project? (Check all that apply)',
        choices: ['Artistic license 2.0', 'Do What The F*ck You Want To Public License', 'MIT', 'Open Software License 3.0']
        },
        {
            type: 'input',
            name: 'Contributions',
            message: 'Provide any guidelines for contributing to the project',
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Provide any test instructions',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Provide your Github username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide your email address for questions regarding the project',
        },

    ]);
};

// TODO: Create an array of questions for user input
const promptProject = portfolioData => {
    // empty array is essentially the data collecting system.
  // If there's no 'projects' array property, create one --- this is a check to make sure array is not cleared each time funct is called
if (!portfolioData.projects) {
  portfolioData.projects = [];
};
}


// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

promptUser()
  .then(promptProject)
  .then(portfolioData => {
   console.log(portfolioData);
  }); 