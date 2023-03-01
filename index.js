const fs = require('fs');
const inquirer = require('inquirer');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

const frontEnd = require('./template');

// Array of answers
const theCrew = [];

// Questions to be prompted
const questions = async () => {
    console.log(`Let's create your team's profile!`)
    const answers = await inquirer
    .prompt([
        {
            type: 'list',
            message: 'What is the role of the employee?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            message: 'Write the employees name.',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Write employees ID.',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Write employees email.',
            name: 'email',
        }
    ])

    if (answers.role === 'Manager'){
        const managerAnswers = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'Write the managers office number.',
                name: 'officeNumber',
            }
        ])
        const newManager = new manager(
            answers.name,
            answers.id,
            answers.email,
            managerAnswers.officeNumber
        )
        theCrew.push(newManager);
    } else if (answers.role === 'Engineer'){
        const engineerAnswers = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'Write the engineers Github link.',
                name: 'github',
            }
        ])
        const newEngineer = new engineer(
            answers.name,
            answers.id,
            answers.email,
            engineerAnswers.github
        )
        theCrew.push(newEngineer)
    } else if (answers.role === 'Intern'){
        const internAnswers = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the interns school?',
                name: 'school',
            }
        ])
        const newIntern = new intern(
            answers.name,
            answers.id,
            answers.email,
            internAnswers.school
        )
        theCrew.push(newIntern)
    }
}

//Function to prompt questions
async function startAsking(){
    await questions();

    const actionOptions = await inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'action',
            choices: ['Add New Member', 'Create Team Profile'] 
        }
    ])
    if (actionOptions.action === 'Add New Member'){
        return startAsking()
    } 
        return createTeam();
    
}

startAsking();

// Function to Generate HTML with Team Profile
function createTeam(){
    console.log(`Creating your team...`);
    console.log(`Go to Results folder, see Profile.html`);
    console.log(theCrew);
    fs.writeFile('./results/Profile.html', frontEnd(theCrew), (err) =>
    err ? console.error(err) : console.log('Success! New Team Profile Created!')
    )
}
