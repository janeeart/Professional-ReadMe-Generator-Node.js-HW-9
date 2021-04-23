function renderLicenseLink(license) {
  if(license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if(license === 'Mozilla'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-red.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else if(license === 'Apache'){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-orange.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if(license === 'Boost'){
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  else if(license === 'Unilicense'){
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-brightgreen.svg)](http://unlicense.org/)`
  }
  else if(license === 'GNU'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blueviolet.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
}


function generateMarkdown(data) {
  let badgeLink = renderLicenseLink(data.license)
  return `# ${data.projectTitle}

## Table of Contents
* Description
* Usage
* Installation
* License
* Contributors
* Tests
* Questions
  
  
## Description
${data.description}
  
## Usage
${data.usage}
  
## Installation
${data.installation}
  
## License
${badgeLink}
  
## Contributors
${data.contributors}
  
## Tests
${data.tests}
  
## Questions? Contact Me:
* GitHub: [GitHub Profile](https://github.com/${data.username})
* Email: ${data.email}
  `
}

module.exports = generateMarkdown;
