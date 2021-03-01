console.log('> > >  test markdown gen');
// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require("fs");
const util = require("util");

// TODO: Create an array of questions for user input
const questions = [
	[
		{
			type: "input",
			name: "title",
		}, 
		{
			type: "input",
			name: "description",
			message: "Description: "
		},
		{
			type: "input",
			name: "installation",
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
			type: "list",
			name: "license",
			message:
				"License: ",
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
			name: "contributing",
			message: "Contributing: "
		},
		{
			type: "input",
			name: "tests",
			message: "Tests: "
		},
		{
			type: "input",
			name: "username",
			message: "Github Username: "
		},
		{
			type: "input",
			name: "email",
			message: "Email: "
		}
	]
];

// TODO: Create a function to write README file
const writeToFile = (d) => `
# ${d.title}
test md
`;

// TODO: Create a function to init app
const init = () => {

};

// Function call to initialize app
init();
