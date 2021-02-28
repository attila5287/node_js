const api = require( "./api" );
const prompt_user = require( "./prompt_user" );
const generateHTML = require( "./generateHTML" );
const fs = require( 'fs' );
const util = require( 'util' );

// ex34
const write_to_file = util.promisify( fs.writeFile );


const init = async () => {
	try {
		console.log( "app...init..." );
		const answers = await prompt_user();
api
	.pull_response_data("attila5287")
	.then((res) => {
		const color =
			// console.log('...res.data :>> ', ...res.data);
			api
				.sum_user_stars("attila5287")
				.then( ( stars ) => {
					
					return generateHTML({ stars, color, ...res.data });
				}).then((html) => {
					console.log( 'html :>> ', html );
					write_to_file("index.html", html);
				}).catch((err) => {
					
				})
				.catch((err) => {
					console.log("err calculating total stars :>> ", err);
				} );
		
	})
	.catch((err) => {
		console.log("err fetch gh response data :>> ", err);
	});

	} catch ( error ) {
		console.log( error )
	}
};

init();
