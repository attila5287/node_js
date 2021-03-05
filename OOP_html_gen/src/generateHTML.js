function generateHTML (d) {
	return `
| ======|====Team=========|
| Name  | ${d.team.name}
| Count | ${d.team.count}
| ======|====Manager======|
| Name  | ${d.manager.name}
| Id    | ${d.manager.id}
| ======|====Members======|
| Name  | ${d.member.name} 
| Role  | ${d.member.role} 
| Id    | ${d.member.id}   
| ------------------------|
	`;
};

module.exports = generateHTML;
