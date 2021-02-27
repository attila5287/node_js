
const axios = require( 'axios' )

api = {// fetch user related data from GitHub via public api

	pull_response_data ( name = "attila5287" ) {
		return axios
			.get(
				`https://api.github.com/users/${name}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
			)
			.catch((err) => {
				console.log(`User not found`);
				process.exit(1);
			} )
		
	},
	sum_user_stars(name="attila5287") {
		return axios
      .get(
        `https://api.github.com/users/${name}/repos?client_id=${
          process.env.CLIENT_ID
        }&client_secret=${process.env.CLIENT_SECRET}&per_page=100`
      )
      .then(response => {
        // After getting user, count all their repository stars
        return response.data.reduce((acc, curr) => {
          acc += curr.stargazers_count;
          return acc;
        }, 0);
      });
	}
		
	}
;

module.exports = api
