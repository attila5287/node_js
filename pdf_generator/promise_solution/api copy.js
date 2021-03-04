const axios = require('axios')

api = {
	pull_response_data: async function (username="attila5287") {
		// console.log(username);

		const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

		const response = await axios.get(queryUrl);
		// fetch user related data from GitHub via public api

		return response;
	},
	sum_user_stars: async function ( username ) {
		const resp = await this.pull_response_data( username );
		const resp_data = resp.data;
		
		function star_finder(d) {
				return d.stargazers_count;
			} // cbf for map below:
		const all_stars = resp_data.map(star_finder);
		// console.log(all_stars)
		
		const add_args = function (a, b) {
			return a + b;
		}; // cbf for reduce below:
		const total_star_ct = all_stars.reduce(add_args); //reduce array to single value with a c-b function
		
		// console.log( total_star_ct );
		
		// console.log("response_data :>> ", response_data[0]);
		return total_star_ct;
		
	}
};

module.exports = api
