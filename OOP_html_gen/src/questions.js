// console.log('test external questions');
const questions = {
	member: [
		{
			message: "Enter team member's name",
			name: "name"
		},
		{
			type: "list",
			message: "Select team member's role",
			choices: ["Engineer", "Intern", "Manager"],
			name: "role"
		},
		{
			message: "Enter team member's id",
			name: "id"
		},
		{
			message: "Enter team member's GitHub username",
			name: "username"
		},
		{
				message: "Add another member?",
				type: "confirm",
				name: "add",
		},
	],
	manager: [
			{
				message: "Enter team manager's name",
				name: "name"
			},
			{
				message: "Enter team manager's id",
				name: "id"
			},
			{
				message: "Add another member?",
				type: "confirm",
				name: "add",
			},
		],
		add: [
			{
				message: "Add another member?",
				type: "confirm",
				name: "add",
			},
	]
    
}
  ;
  

module.exports = questions;
