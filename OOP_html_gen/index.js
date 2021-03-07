const inquirer = require( 'inquirer' );
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Employee = require('./lib/Employee');
const generateHTML = require( './src/generateHTML' );
const questions = require( './src/questions' );

// console.log('questions :>> ', questions);

async function init () {
  const team = {
    manager:{},
    members:[],
  };
  inquirer.prompt( questions.manager )
    .then( ( answers ) => {
      // console.log( 'answers :>> ', answers );
      Object.keys( answers ).map( k => {
        if (k !="add") {
          team.manager[ k ] = answers[ k ];
        }
      } );
      // console.log( 'team manager stored:>> ', team );
      return answers.add;
    } )
    .then( ( add ) => {
      // console.log( 'add :>> ', add );
      if ( add ) {
        
        add_member( team );
        
      }else if ( !add ) {
        console.log('team no members  :>> ', team );
      }
    } )
    .catch( ( err ) => {
    console.log('err :>> ', err);
  });

}

init();
function add_member ( team ) {
  inquirer.prompt( questions.member ).then( ( answers ) => {
    delete answers.add;
    team.members.push( answers );
    // console.log('team member added:>> ', team);
    if ( answers.add ) {
      console.log( '> > > member add' );
      add_member(team);
    } else {
      console.log( '> > > team finish' );
      console.log(team);
      
    }

  } );
}

