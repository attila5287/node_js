console.log('test ex 40');
const starter_code = require("./starter");
const inquirer = require('inquirer');


function collect_input() {
	return inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "type your name..."
		},
		{
			type: "input",
			name: "location",
			message: "type your city..."
		},
		{
			type: "input",
			name: "hobby",
			message: "type your fav hobby..."
		},
		{
			type: "input",
			name: "food",
			message: "type your fav food..."
		},
		{
			type: "input",
			name: "github",
			message: "type your github username..."
		},
		{
			type: "input",
			name: "linkedin",
			message: "copy paste your linkedin..."
		}
	]);
}

async function init () {
  const user_input = await collect_input();
  console.log('user_input :>> ', user_input);
  // console.log("HTML :>> ", starter_code.html_gen(user_input));
}

init();
