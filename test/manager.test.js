const manager = require('../lib/Manager');

describe("getOfficeNumber", () => {

    it("should console log the Name", () => {

        const officeNumber = 4;
        const employee = new manager("John", "2", "Ahmed@frr",4);

        expect(employee.getOfficeNumber()).toBe(officeNumber);
    })

});

describe("getRole", () => {

    it("should console log the role", () => {

        const role = "Manager"
        const mployee = new manager("", "", "", "")

        expect(mployee.getRole()).toBe(role);
    })

});