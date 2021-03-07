const new_member = require('./lib/new_member');
const inquirer = require( 'inquirer' );
const fs = require('fs');
const generateHTML = require( './src/generateHTML' );
const questions = require( './src/questions' );

// console.log('questions :>> ', questions);

async function init () {
  const team = {
    manager:{},
    members:[],
  };
  const team_mgr = await inquirer.prompt( questions.team_mgr );
  console.log( 'team_mgr :>> ', team_mgr );
  
  team.manager = new new_member.Manager(
		...Object.keys(team_mgr).map((k) => team_mgr[k])
	);

  const add = await inquirer.prompt( questions.add );
  console.log( 'add :>> ', add );
  add_team_mem( add, team );
  
  async function add_team_mem ( add, team ) {
    if ( !add.add ) {
      console.log('>> >> TEAM FINAL', team);
    }
    
    if (add.add) {
      const employee =  await inquirer.prompt(questions.employee);
      const role = await inquirer.prompt(questions.role);
      const specific = await inquirer.prompt( questions[ role.role.toLowerCase() ] );
      const answers = {
        ...employee ,
        ...specific ,
      };
      console.log( 'answers :>> ', answers );
      const vals = Object.keys( answers ).map( ( a ) => answers[ a ] );
      console.log('vals :>> ', vals);
      const mem_fin = new new_member[role.role](...vals);
      team.members.push( mem_fin );
      console.log( 'team :>> ', team );
      
      const add_again = await inquirer.prompt( questions.add );
      add_team_mem(add_again, team);
    }
  }
}

init();

