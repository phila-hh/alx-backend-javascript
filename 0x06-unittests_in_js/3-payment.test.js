const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const sinonSpy = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(sinonSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(sinonSpy.calculateNumber.callCount).to.be.equal(1);
    sinonSpy.calculateNumber.restore();
  });
});
