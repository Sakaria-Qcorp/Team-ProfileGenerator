const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, "createdFile");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const renderring = function(employees){

    const html = []; 
    const styles = `<head>
    <link rel="stylesheet" href="style.css">
</head>`;
html.push(styles);

const headerhtml = `<Header class="header"><h1>My Team </h1></Header>`;
    html.push(headerhtml);
function writeToFile(fileName, data) {
    const newFile = data;
    fs.writeFile(`CreatedFile/${fileName}`, newFile, (err) =>
            err ? console.error(err) : console.log("file Created"));
};


for (let i = 0; i < employees.length; i++) {
    const element = employees[i];
    

    if (element.role === "Manager"){
        const managername = element.name;
        const managerId = element.id;
        const manageRole = element.role;
        const managerEmail = element.email;
        const managerOfficeNumber = element.officeNumber;

        const managerHTML =
            `<div class="manager">
            <div class="cardHeader">
            <h3>${managername}</h3>
            <h5>${manageRole}<h5>
            </div>
            <p class="id"><span>ID: ${managerId}</span></p>
            <p class="email"><span>Email: ${managerEmail}</span></p>
            <p class="officeNumber"><span>Office Number: ${managerOfficeNumber}</span></p>
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
            <div class="cardHeader">
            <h3>${internName}</h3>
            <h5>${internRole}</h5>
         </div>   
            <p class="id"><span>ID: ${internId}</span></p>
            <p class="email"><span>Email: ${internEmail}</span></p>
            <p class="officeNumber"><span>School: ${internSchool} </span></p>
            </div>`;
            html.push(internHTML);

    };
    if (element.role === "Engineer"){

        const engineerName = element.name;
        const engineerId = element.id;
        const engineerRole = element.role;
        const engineerEmail = element.email;
        const engineerGithub = element.github;

        const engineerHTML =
           `<div class="Engineer">
             <div class="cardHeader">
             <h3>${engineerName}</h3>
             <h5>${engineerRole}<h5>
             </div>
             <p class="id"> <span>ID: ${engineerId}</span></p>
             <p class="email"><span>Email: ${engineerEmail}</span></p>
             <p class="officeNumber"><span>Office Number: ${engineerGithub}</span></p>
            </div>`;

            html.push(engineerHTML);

    };


    
};

      writeToFile("team.html", html.join(""));
    
};
module.exports = renderring;


