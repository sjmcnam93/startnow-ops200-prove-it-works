const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    it('should properly return the monthly payment', () => {
        const mortgage = new Mortgage(85000, 4, 30, 5)
        expect(mortgage.monthlyPayment()).to.equal(975.1001271676535);
    });
    it('should have a principal parameter', () =>{
        expect(Mortgage.principal).to.equal(Mortgage.principal);
    });
    it('should have a interest parameter', () =>{
        expect(Mortgage.interest).to.equal(Mortgage.interest);
    });
    it('should have a term parameter', () =>{
        expect(Mortgage.term).to.equal(Mortgage.term);
    });
    it('should have a period parameter', () =>{
        expect(Mortgage.period).to.equal(Mortgage.period);
    });
});
