const fs = require('fs');

const renderring = function(employees){

const headerhtml = `<Header class="header"><h1>My Team </h1></Header>`;
function writeToFile(fileName, data) {
    const newFile = data;
    fs.writeFile(`CreatedFile/${fileName}`, newFile, (err) =>
            err ? console.error(err) : console.log("file Created"));
};


for (let i = 0; i < employees.length; i++) {
    const element = employees[i];
    const html = [];

    if (element.role === "Manager"){
        const managername = element.name;
        const managerId = element.id;
        const manageRole = element.role;
        const managerEmail = element.email;
        const managerOfficeNumber = element.officeNumber;


        const managerHTML =
            `<div class="manager">
            <h3>${managername}</h3>
            <h5>${manageRole}
            <p class="id">${managerId}</p>
            <p class="email">${managerEmail}</p>
            <p class="officeNumber">${managerOfficeNumber}</p>
            </div>`;

            html.push(managerHTML);
    };
    if (element.role === "Intern"){

        const internName = element.name;
        const internId = element.id;
        const internRole = element.role;
        const internEmail = element.email;
        const internSchool = element.school;

        const internHTML =
         `  <div class="Intern">
            <h3>${internName}</h3>
            <h5>${internRole}
            <p class="id">${internId}</p>
            <p class="email">${internEmail}</p>
            <p class="officeNumber">${internSchool}</p>
            </div>`;
            html.push(internHTML);

    }
    if (element.role === "Engineer"){

        const engineerName = element.name;
        const engineerId = element.id;
        const engineerRole = element.role;
        const engineerEmail = element.email;
        const engineerGithub = element.github;

        const engineerHTML =
           `<div class="Engineer">
             <h3>${engineerName}</h3>
             <h5>${engineerRole}
             <p class="id">${engineerId}</p>
             <p class="email">${engineerEmail}</p>
            <p class="officeNumber">${engineerGithub}</p>
            </div>`;

            html.push(engineerHTML);

    }

    
};
    
};


