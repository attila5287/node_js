const inquirer = require( "inquirer" );
const employees = require( "./employees" );
const questions = require( "./questions" );

const team_update = {
	add_team_mgr: async function add_team_mgr( team ) {
		const team_mgr = await inquirer.prompt( questions.team_mgr );
		console.log( 'team_mgr :>> ', team_mgr );
		const vals = Object.keys( team_mgr ).map( ( k ) => team_mgr[ k ] );
		team.manager = new employees.Manager( ...vals );
	},
	add_team_mem: async function add_team_mem( add, team ) {
		if ( !add.add ) {
			console.log( ">> >> TEAM FINAL", team );
		}

		if ( add.add ) {
			const employee = await inquirer.prompt( questions.employee );
			const role = await inquirer.prompt( questions.role );
			const specific = await inquirer.prompt( questions[ role.role.toLowerCase() ] );
			const answers = {
				...employee,
				...specific
			};
			console.log( "answers :>> ", answers );
			const vals = Object.keys( answers ).map( ( a ) => answers[ a ] );
			console.log( "vals :>> ", vals );
			const mem_fin = new employees[ role.role ]( ...vals );
			team.members.push( mem_fin );
			console.log( ">> >> TEAM UPDATED", team );

			const add_again = await inquirer.prompt( questions.add );
			add_team_mem( add_again, team );
		}
	},

};


module.exports = team_update;
