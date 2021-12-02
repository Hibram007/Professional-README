const fs = require('fs');

// License functions for " Licensing prompt question"
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
// markdown generation - ( will take all responses from inquirer prompt)
function generateMarkdown(data) {
  let badgeLink = renderLicenseLink(data.license)
  return `# ${data.Title}

## Table of Contents
* Description
* Installation
* License
* Contributors
* Questions
  
## Description
${data.Description}
  
## Installation
${data.installation}
  
## License
${badgeLink}
  
## Contributions
${data.Contributions}
  
## Questions? Contact Me:
* GitHub: [GitHub Profile](https://github.com/${data.github})
* Email: ${data.email}
  `
}

module.exports = generateMarkdown;
