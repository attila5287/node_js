// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const data_object_example = {
	title: "node_js_terminal",
	github_username: "attila5287",
	github_io : "attila5287.github.io/",
	profile_url: "https://github.com/attila5287/",
};

function generateMarkdown(data) {
  return `# ${data.title}
  ### developed by  ${data.github_username}
  ### visit my github portfolio : ${data.github_io}
  ### check my github codes: ${data.profile_url}
`;
}

module.exports = generateMarkdown;
