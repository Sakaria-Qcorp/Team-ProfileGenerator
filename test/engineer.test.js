const engineer = require('../lib/Engineer');

describe("getGitHub", () => {

    it("should console log the github", () => {

        const GitHub = "Saka@github.com";
        const employee = new engineer("John", "2", "Ahmed@frr", GitHub);

        expect(employee.getGitHub()).toBe(Github);
    })

});

describe("getRole", () => {

    it("should console log the role", () => {

        const role = "Engineer"
        const mployee = new engineer("", "", "", "")

        expect(mployee.getRole()).toBe(role);
    })

});