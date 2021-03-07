function generateHTML ( d ) {
	let res = `
	<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="theme/darkly/bootstrap.css" >
<link rel="stylesheet" type="text/css"
  href="https://use.fontawesome.com/releases/v5.1.1/css/all.css"
  integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ"
  crossorigin="anonymous" />
    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Team Profile  // 10 OOP</h1>
`;
	const styles = {
		manager:'info',
		engineer:'success',
		intern:'warning',
	};
	const icons = {
		manager:'fas fa-user-tie',
		engineer:'fas fa-user-cog',
		intern:'fas fa-user-graduate',
	};

	res =
		res +
		`<div class="jumbotron jumbotron-fluid">
			<div class="container">
				<h1 class="display-4">
				<i class="far fa-address-card">
				</i>
					${d.manager.fname}s Team
					`
					;
	Object.keys( d.manager ).forEach( k => {
		const m = d.manager;
		res = res + `
			<p class="lead"> ${k}: ${m[ k ]} </p>`;
	} );
	
		res =res +
				`</h1>
			</div>
		</div >
		`;
		
	res = res +`<div class="d-flex flex-row">`;
		
for ( let i = 0; i <d.members.length; i++ ) {
	const m = d.members[i];
	res =
		res +
		`<div class="card">
  <div class="card-header bg-${styles[m.getRole().toLowerCase()]}"><h1 class='${icons[m.getRole().toLowerCase()]}'>${m.getRole()}</h1></div>
  <div class="card-body">`;
	Object.keys( m ).forEach( k => {
		res = res + `<p class="card-text bg-primary rounded">
		<i class="fas fa-chevron-right"> </i>
		${k} : ${m[k]}</p>`;
	} );


	res = res + `
  </div>
</div>`;
	}

	return res +
		`</div>    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>`
	;
};

module.exports = generateHTML;
