const api = require("./api");
const prompt_user = require("./prompt_user");
const generateHTML = require("./generateHTML");
const fs = require( 'fs' );
const util = require('util');

// ex34
const write_to_file = util.promisify(fs.writeFile);


const init = async () => {
	try {
		// console.log("init -> try.");
		const answers = await prompt_user();
		// console.log('answers :>> ', answers);

		// API GOES HERE pull github stars by username>>
		const response = await api.pull_response_data("attila5287");
		const response_data = response.data;
		// console.log('response.data.owner.avatar_url :>> ', response.data.owner.avatar_url);
		const stars_count = await api.sum_user_stars("attila5287");
		const data_for_html = {
			name: "attila5287",
			stars: stars_count,
			color: answers.color,
			avatar_url:
				"https://miro.medium.com/fit/c/56/56/1*IAtFUPLEKUnfCP6Jq9guXw.jpeg"
		};
		const html = generateHTML(data_for_html);

		await write_to_file("index.html", html);
	} catch (error) { console.log( error )}
};
		
init();
