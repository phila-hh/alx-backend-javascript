const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const sinonSpy = sinon.spy(console);
    const sinonStub = sinon.stub(Utils, 'calculateNumber');
    sinonStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(sinonStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(sinonStub.callCount).to.be.equal(1);
    expect(sinonSpy.log.calledWith('The total is: 10')).to.be.true;
    expect(sinonSpy.log.callCount).to.be.equal(1);
    sinonStub.restore();
    sinonSpy.log.restore();
  });
});
