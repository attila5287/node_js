const fs = require('fs');
const axios = require( 'axios' );
const generateHTML = require( './generateHTML' );
const inquirer = require("inquirer");

// input, number, confirm, list, rawlist, expand, checkbox, password, editor
async function init() {
  const questions = [
		{
			type: "input",
			name: "username",
			message: "type github username..."
		},
		{
			type: "list",
			name: "color",
			message: "choose a color to style pdf...",
			choices: ["green", "blue", "pink", "red"]
		}
	];
  const answers = await inquirer.prompt( questions );
  // console.log( 'answers :>> ', answers );
  
  function prep_answers (ans) {
    if (ans.username == "") {
			ans.username = "attila5287";
			console.log("name default :>> ", ans);
		}
    return ans;
  }
  const final_answers = prep_answers( answers );
  
  
  // github API
  const url = `https://api.github.com/users/${final_answers.username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`;
  const url_stars = `https://api.github.com/users/${final_answers.username}/repos?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&per_page=100`;
  
  const response = await axios.get( url );
  const response_stars = await axios.get( url_stars );
  // per page needs to be appended
  
  function star_finder ( res ) {
    // After getting user, count all their repository stars
    return res.data.reduce( ( acc, curr ) => {
      acc += curr.stargazers_count;
      return acc;
    }, 0 )
  }

  console.log( 'github response :>> ', response.data );
  // console.log("TOO LONG!response_stars :>> ", response_stars);
  
  let d = {
		username: final_answers.username,
		stars: star_finder(response_stars),
		color: final_answers.color,
		...response.data
  };

  console.log('d :>> ', d);
  function log_success ( op ) {
    console.log(`${op}} successful!`);
  }
  
  const html = generateHTML( d );
  
  fs.writeFile( "github.html", html, () => log_success( 'html file create' ) );



}
  
    
      
init();
