const api = require( "./api" );
const prompt_user = require( "./prompt_user" );
const generateHTML = require( "./generateHTML" );
const fs = require( 'fs' );
const util = require( 'util' );

// ex34
function init() {
	const write_to_file = util.promisify( fs.writeFile );
	prompt_user().then( ( {
		name,
		color
	} ) => {
		console.log( "init app..." );

		api                                          
			.pull_response_data( name )
			.then( ( response ) => {

			api
				.sum_user_stars( name )
				.then( ( stars ) => {
					console.log('name :>> ', name);
					return generateHTML( {
							name:name,
						stars:stars,
						color:color,
						...response.data
					} );
				} )
				.then( ( html ) => {
					// console.log( "html :>> ", html );
					write_to_file( "index.html", html );
				} );

			} ).catch((err) => {console.log('err :>> ', err);});
		
	} );
};

init();
