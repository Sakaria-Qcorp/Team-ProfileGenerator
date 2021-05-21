const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const HTMLrenderring = require("./lib/htmlRenderer");
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
async function employeeQuestions(){}
