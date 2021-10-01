// TODO: Include packages needed for this application
const inquirer = require('inquirer');
fs = require('fs');

// inner program file links
const genMD = require("./utils/generateMarkdown");


// wrapping function to to return inquirer returned data
const promptUser = () => {
// array of questions for user
 return inquirer.prompt([
      //profile questions
      {
        type:'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: gitHubInput => {
            if (gitHubInput) {
                return true;
            } else {
                console.log('Please enter your github username!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Provide your email address for questions regarding the project',
    }
    ]);
};

const promptProject = answers => {
    
    //this is a check to make sure array is not cleared each time funct is called
  if (!answers.projects) {
   answers.projects = [];
  }
  console.log(`
  =================
  Add a New Project
  =================
  `);
  return inquirer.prompt([
        // project questions
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
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter the link to your github!');
                    return false;
                }
            }
          },
          {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
          },
          {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
          }
        ])
        .then(projectData => {
          answers.projects.push(projectData);
          if (projectData.confirmAddProject) {
            return promptProject(answers);
          } else {
            return answers;
          }
        });
    };


// fs.writeFile('README.md', 'answers', function (err) {
//     if (err) return console.log(err);
//     console.log("hello world success!");
// });


promptUser()
 .then(promptProject)
 .then(answers => {
console.log(answers);
fs.writeFile('README.md', genMD(answers.projects[0]), function (err) {
    if (err) return console.log(err);
});
}); 

