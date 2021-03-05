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
		}
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
    ],
    
    team: [
    {
      message: "Enter team name",
      name: "name"
    },
    {
      message: "Enter head count of team, keep managers out",
      name: "count"
    },

  ]
}
  ;
  

module.exports = questions;
