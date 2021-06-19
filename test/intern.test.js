const Intern = require('../lib/Intern');

describe("getSchool", () => {

    it("should console log the school", () => {

        const school = "University of Minnesota"
        const intern = new Intern("kk", "kk", "kkk", school);

        expect(intern.getSchool()).toBe(school);
    })

});

describe("getRole", () => {

    it("should console log the role", () => {

        const role = "Intern"
        const intern = new Intern("", "", "", "")

        expect(intern.getRole()).toBe(role);
    })

});