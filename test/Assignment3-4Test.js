var expect = require('chai').expect;
var testFile = require('../src/Assignment3-4');

describe("BMI Calculator", function(){
    it("calculates the BMI", function(){
       let BMI = testFile.BMICalculation(5, 3, 125);

       expect(BMI).to.equal('22.7');
    });
});

describe("Retirement Calculator", function() {
    it("calculates the retirement age", function() {
        let retirementAge = testFile.retirementCalculation(10, 50000,401000, 21);

        expect(retirementAge).to.equal('80');
    })
})