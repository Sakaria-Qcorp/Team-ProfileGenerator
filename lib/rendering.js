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


        const mangerHTML =
            `<div class="manager">
            <h3>${managername}</h3>
            <h5>${manageRole}
            <p class="id">${managerId}</p>
            <p class="email">${managerEmail}</p>
            <p class="officeNumber">${managerOfficeNumber}</p>
            </div>`;


    };
    if (element.role === "Intern"){
        const internHTML =
         `  <div class="Intern">
            <h3>${Intern.name}</h3>
            <h5>${Intern.getRole()}
            <p class="id">${Intern.id}</p>
            <p class="email">${Intern.email}</p>
            <p class="officeNumber">${Intern.getSchool()}</p>
            </div>`;

    }
    if (element.role === "Engineer"){
        const engineerHTML =
           `<div class="Engineer">
             <h3>${Intern.name[i]}</h3>
             <h5>${Intern.getRole()[i]}
             <p class="id">${Intern.id[i]}</p>
             <p class="email">${Intern.email[i]}</p>
            <p class="officeNumber">${Intern.getSchool()[i]}</p>
            </div>`;

    }

    
};
    
};


