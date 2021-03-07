// console.log('test external questions');
const questions = {
	team_mgr: [
		{
			message: "Enter team manager's name",
			name: "fname"
		},
		{
			message: "Enter team manager's id",
			name: "id"
		},
		{
			message: "Enter team manager's email",
			name: "email"
		},
		{
			message: "Enter team manager's office number",
			name: "office"
		},
	],
	add: [
		{
			message: "Add a team member?",
			type: "confirm",
			name: "add"
		}
	],
	role: [
		{
			type: "list",
			message: "Select team member's role",
			choices: [
				"Engineer",
				"Intern",
				"Manager" ],
			name: "role"
		}
	],
	employee: [
		{
			message: "Enter employee's name",
			name: "fname"
		},
		{
			message: "Enter employee's id",
			name: "id"
		},
		{
			message: "Enter employee's email",
			name: "email"
		}
	],
	manager: [
		{
			message: "Enter team member/manager's office number",
			name: "office"
		}
	],
	intern: [
		{
			message: "Enter intern's school ",
			name: "school"
		}
	],
	engineer: [
		{
			message: "Enter engineer's github username ",
			name: "github"
		}
	]
};
  

module.exports = questions;


