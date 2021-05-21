const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const HTMLrenderring = require("./lib/rendering.js");
const fs = require("fs");

const teamArrayResults= [];

async function getManagerInfo(){
    try{
    let response= await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of the manager.: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the manager ID here: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is email for manager? : ',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number for the employee?: '
        }]);
        const manager= new Manager(response.name, response.id, response.email, response.officeNumber);
        teamArrayResults.push(manager);
    }catch(err){
        return console.log(err);
        }
        console.log(teamArray);
   employeeQuestions();     
};

getManagerInfo();

async function employeeQuestions(){
    try {
        let response= await inquirer.prompt([
        {
            type: 'input',
            name:'name',
            message: 'What is the name of the employee? : '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the employee ID here: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is email for employee? : ',
        },
        {
            type: 'list',
            name: 'role',
            message: 'What role does this employee have? : ',
            choices: ['Engineer', 'Intern', 'Manager']
        }
    ]);
let response2= '';
    if (response.role === 'Engineer'){
        response2= await inquirer.prompt([{
            type: 'input',
            name:'github',
            message: 'What is the github username for employee?: ',
        }]);
        const engineer= new Engineer(response.name, response.id, response.email, response2.github);
        teamArrayResults.push(engineer);
    } else if (response.role === 'Intern'){
        response2= await inquirer.prompt([{
            type: 'input',
            name: 'school',
            message: 'What school is employee currently attending?: '    
        }]);
        const intern= new Intern(response.name, response.id, response.email, response2.school);
        teamArrayResults.push(intern);
    }
    else if (response.role === 'Manager'){
        response2 = await inquirer.prompt([{
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number for the employee?: '
        }]);
        const manager= new Manager(response.name, response.id, response.email, response2.officeNumber);
        teamArray.push(manager);
    }
} catch (err) {
    return console.log(err);
        }
        console.log(teamArray);

        isContinued();
};

async function isContinued(){
    const continueW = "";
    continueW = await inquirer.prompt([{
        type:'list',
        name: 'finish',
        message: 'Would you like to add another employee?: ',
        choices:[
            'Yes',
            'No'
        ]
    }]);

    do {
        employeeQuestions();
        
    } while (continueW.finish === "Yes"){

        HTMLrenderring(teamArray);

    };



};
