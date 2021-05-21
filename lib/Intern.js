//THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const Employee = require('./Employee');



class Intern extends Employee {
 constructor(name,id,email,school) {
    super(name,id,email,);
    this.school = school;
    this.role = "Intern";
     

 }

 getSchool() {
     return this.school;
 }
 getRole(){
     return this.role;
 }

}
module.exports = Intern;