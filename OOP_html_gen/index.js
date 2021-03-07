const inquirer = require( 'inquirer' );
const fs = require('fs');
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Employee = require('./lib/Employee');
const generateHTML = require( './src/generateHTML' );
const questions = require( './src/questions' );

// console.log('questions :>> ', questions);

async function init () {
  const team = {
    manager:{},
    members:[],
  };
  const team_mgr = await inquirer.prompt( questions.team_mgr );
    
  team.manager = {
    team_mgr
  }
  const add = await inquirer.prompt( questions.add );
  console.log( 'add :>> ', add );
  
  await add_team_mem( add, team );
    

}

init();
async function add_team_mem ( add, team ) {
  if (add.add) {
		const employee =  await inquirer.prompt(questions.role);
		const role = await inquirer.prompt(questions.role);
		const new_mem = await inquirer.prompt(questions[role.role.toLowerCase()]);
		console.log("team_mem :>> ", new_mem);
		team.members.push(new_mem);
    console.log( 'team :>> ', team );
    
    const add_again = await inquirer.prompt( questions.add );
    add_team_mem(add_again, team);
  }
}

