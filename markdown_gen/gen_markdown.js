// console.log( 'test external module' );
const gen_markdown = ( d ) => {
  const badges = {
    mit:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    boost:
      "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    apache:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    mpl:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    isc:
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  };

  return `
# ![alt text](https://icons.iconarchive.com/icons/social-media-icons/social-buntings/48/Github-icon.png  "github-logo-png") ${
		d.title
	} by [ ${d.username} ](https://github.com/${d.username}/)

*Description:*  ${d.description} 

| ![alt text]( https://icons.iconarchive.com/icons/social-media-icons/social-buntings/48/Designfloat-icon.png "inst-icon") | Instructions | 
| ------------- |-------------|
**Installation** | *${d.install}*   |
**Usage** | *${d.usage}* |


| ![alt text]( https://icons.iconarchive.com/icons/social-media-icons/social-buntings/48/Dopplr-icon.png "info-icon") | Additional Info | 
| ------------- |-------------:|
| Credits  |    ${d.credits} | 
| Contributing     |  ${d.cont} | 
| Tests    |  ${d.tests} | 
| License  | ${badges[d.license]} |

| ![alt text]( https://icons.iconarchive.com/icons/social-media-icons/social-buntings/48/Aim-icon.png "dev-icon") | About Developer | 
| -------------   | ------------- |
| Email    |  ${d.email} | 
| Repos | [github.com/${d.username}/${d.username} ](https://github.com/${
		d.username
	}/) |
| Profile | [ ${d.username}.github.io ](https:///${d.username}.github.io/) |

`;};

module.exports = gen_markdown;

