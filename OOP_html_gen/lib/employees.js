class Employee {
	constructor(fname, id, email) {
		this.fname = fname;
		this.id = id;
		this.email = email;
	}
	getName() {
		return this.fname;
	}
	getId() {
		return this.id;
	}
	getEmail() {
		return this.email;
	}
	getRole() {
		return "Employee";
	}
}

class Engineer extends Employee {
	constructor(fname, id, email, github) {
		super(fname, id, email);
		this.github = github;
	}
	getRole() {
		return "Engineer";
	}
	getGithub() {
		return this.github;
	}
}

class Intern extends Employee {
	constructor(fname, id, email, school) {
		super(fname, id, email);
		this.school = school;
	}

	getRole() {
		return "Intern";
	}

	getSchool() {
		return this.school;
	}
}

class Manager extends Employee {
	constructor(fname, id, email, officeNumber) {
		super(fname, id, email);
		this.officeNumber = officeNumber;
	}

	getRole() {
		return "Manager";
	}

	getOfficeNumber() {
		return this.officeNumber;
	}
}
const employees = {
	Engineer: Engineer,
	Intern: Intern,
	Manager: Manager
};
module.exports = employees;
