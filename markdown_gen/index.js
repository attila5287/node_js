// console.log('> > >  test markdown gen');
// TODO: Include packages needed for this application
const questions = require("./questions");
const gen_markdown = require("./gen_markdown");
const inquirer = require("inquirer");
const fs = require("fs");

	

	// TODO: Create a function to init app
	
async function init() {
	// TODO: Create an array of questions for user input
	
	try {
		// console.log(questions);

		const answers = await inquirer.prompt(questions);
		// console.log( 'answers :>> ', answers );
		const default_answers = {
			username: "attila5287",
			title: "A Project",
			description: "Here's another app",
			install: "not required",
			usage: "provided in-app",
			credits: "none",
			cont: "none",
			tests: "none",
			email: "atiturkoz@hotmail.com",
			license: "", 
		};
		console.log("def :>> ", Object.keys(answers));
		console.log('def :>> ', default_answers);

		Object.keys( answers ).forEach( k => {
			console.log('k :>> ', k);
			if (answers[k] == '') {
				answers[ k ] = default_answers[ k ];
			}
		} );
		
		const markdown = gen_markdown(answers);
		console.log( 'object :>> ', gen_markdown( answers ) );
		const md = fs.writeFileSync("my_readme.md", markdown);
	} catch (error) {}
};

// Function call to initialize app
init();
