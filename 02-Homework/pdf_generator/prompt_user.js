const inquirer = require("inquirer");

prompt_user = function() {
	// input, number, confirm, list, rawlist, expand, checkbox, password, editor
	const questions = [
		{
			type: "input",
			name: "name",
			message: "type github username..."
		},
		{
			type: "list",
			name: "color",
			message: "choose a color to style pdf...",
			choices: [
				// pre-set kets of colors of genhtml
				new inquirer.Separator(),
				"green",
				"blue",
				"pink",
				"red",
				new inquirer.Separator()
			]
		}
	];

	return inquirer.prompt(questions);
};


module.exports = prompt_user;   
