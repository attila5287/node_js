// console.log('test external questions');

const questions = [
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
	},
	{
		type: "list",
		name: "license",
		message: "License: ",
    choices: [
"mit",
"boost",
"apache",
"mpl",
"isc",
      ],
	}
];

module.exports = questions;

