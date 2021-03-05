const generateHTML = require('./src/generateHTML');
const inquirer = require( 'inquirer' );
const questions = require( './src/questions' );
const fs = require('fs');


// console.log('questions :>> ', questions);

async function init() {
  let answers = {
    team : await inquirer.prompt(questions.team),
    manager : await inquirer.prompt( questions.manager ),
    member :  await inquirer.prompt( questions.member ),
    
  };
  console.log( 'answers :>> ', answers );
  const html = generateHTML(answers)
  console.log('generateHTML(answers) :>> ', html);
}

init();
