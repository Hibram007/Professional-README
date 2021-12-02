const inquirer = require('inquirer');
fs = require('fs');
const genMD = require("./utils/generateMarkdown");

// array of questions for user
inquirer.prompt([
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
        type: 'list',
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
        name: 'github',
        message: 'Enter your GitHub Username (Required)'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Provide your email address for questions regarding the project'
    }

]).then((response) => {
    console.log(response)

    fs.writeFile('README.md', genMD(response), err => {
        if (err) throw err;
    });
}
);

