const chai = require('chai');
const expect = chai.expect;

const util = require('../util/util');

describe('Check for input', () => {
  // Set up any data
  before(() => {});

  // Clean up any data
  after(() => {});

  it('should be correct currency in AUD', () => {
    expect(util.validCurrency('USD')).to.equal(false);
    expect(util.validCurrency('AUD')).to.equal(true);
  });

  it('should be correct denomination $0.10, $0.20, $0.50, $1.00, $2.00', () => {
    expect(util.validCoins(0.05)).to.equal(false);
    expect(util.validCoins(0.10)).to.equal(true);
    expect(util.validCoins(0.20)).to.equal(true);
    expect(util.validCoins(0.50)).to.equal(true);
    expect(util.validCoins(1.00)).to.equal(true);
    expect(util.validCoins(2.00)).to.equal(true);
  });

  it('should find correct candy', () => {
    expect(util.findCandy(0.05)).to.deep.equal([]);
    expect(util.findCandy(2.50)).to.deep.equal(['Caramel']);
    expect(util.findCandy(3.10)).to.deep.equal(['Hazelnut']);
    expect(util.findCandy(2.00)).to.deep.equal(['Organic Raw']);
  });
});