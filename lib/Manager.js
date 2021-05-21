//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
       super(name,id,email,);
       this.officeNumber = officeNumber;
       this.role = "Manager";
        
   
    }
   
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole(){
        return this.role;
    }
   
   }
   module.exports = Manager;