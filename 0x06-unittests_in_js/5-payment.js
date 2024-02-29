const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const cost = Utils.calculateNumber('SUM', totAmount, totShipping);
  console.log(`The total is: ${cost}`);
};

module.exports = sendPaymentRequestToApi;
