console.log('> > >  test markdown gen');
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

	
const gen_markdown = (d) => `

Alt-H1
======

username 
======
- ${d.username}  
	
title 
======
- ${d.title} 

license 
======
- ${d.license} 

install 
======
- ${d.install} 

usage 
======
- ${d.usage} 

credits 
======
- ${d.credits} 

usage 
======
- ${d.usage} 

cont 
======
- ${d.cont} 

tests 
======
- ${d.tests} 

email 
======
- ${d.email} 
	
	`;
	// TODO: Create a function to init app
	
async function init() {
	// TODO: Create an array of questions for user input
	const questions = 
		[
			{
				type: "input",
				name: "username",
				message: "Github Username: "
			},
			{
				type: "input",
				name: "title",
				message: "Title: "
			},
			{
				type: "input",
				name: "description",
				message: "Description: "
			},
			{
				type: "list",
				name: "license",
				message: "License: ",
				choices: [
					"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
					"[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
					"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
					"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
					"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
				]
			},
			{
				type: "input",
				name: "install",
				message: "Installation: "
			},
			{
				type: "input",
				name: "usage",
				message: "Usage: "
			},
			{
				type: "input",
				name: "credits",
				message: "Credits: "
			},
			{
				type: "input",
				name: "cont",
				message: "Contributing: "
			},
			{
				type: "input",
				name: "tests",
				message: "Tests: "
			},
			{
				type: "input",
				name: "email",
				message: "Email: "
			}
		];
	try {
		// console.log(questions);

		const answers = await inquirer.prompt(questions);
		console.log('answers :>> ', answers);
		const markdown = gen_markdown(answers);
		
		// console.log( 'object :>> ', gen_markdown( answers ) );
		const md = fs.writeFileSync("my_readme.md", markdown);
	} catch (error) {}
};

// Function call to initialize app
init();
