const axios = require( 'axios' );
const generateHTML = require( './generateHTML' );
const inquirer = require("inquirer");


async function init() {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "type github username..."
    },
    {
      type: "list",
      name: "color",
      message: "choose a color to style pdf...",
      choices: ["green", "blue", "pink", "red", ]
    }
  ];
  const answers = await inquirer.prompt( questions );
  // console.log( 'answers :>> ', answers );
  
  function prep_answers (ans) {
    if (ans.name == "") {
			answers.name = "attila5287";
			console.log("name default :>> ", ans);
		}
    return ans;
  }
  const final_answers = prep_answers(answers);
  
  // github API
  const url = `https://api.github.com/users/${final_answers.name}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`;

  const response = await axios.get( url );
  // console.log( 'github response :>> ', response );

  function prep_data ( ans, res ) {
    
      console.log(  );
      console.log( res.data );
      console.log(  );
		let d = {
			name: "",
			color: "",
			data: res.data
    };
    
		d.name = ans.name;
		d.color = ans.color;

		if (d.name == "") {
			d.name = "attila5287";
			// console.log("name default :>> ", ans);
		}
		return d;
	}
  const data = await prep_data( answers, response );
  
  // console.log('genHTML :>> ', generateHTML(data));
  

}

init();
