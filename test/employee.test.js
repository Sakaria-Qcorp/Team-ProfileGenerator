const Employee = require('../lib/Employee');

describe("getName", () => {

    it("should console log the Name", () => {

        const name = "John";
        const employee = new Employee("John", "2", "Ahmed@frr",);

        expect(employee.getName()).toBe(name);
    })

});

describe("getRole", () => {

    it("should console log the role", () => {

        const role = "Employee"
        const mployee = new Employee("", "", "", "")

        expect(mployee.getRole()).toBe(role);
    })

});