'use strict';

const expect = require('chai').expect
const parser = require('../index')

const testCases = [
  'remind me to go to the store tomorrow',
  'remind me to go to the store in 5 minutes',
  'in 5 minutes, remind me to go to the store',
  'remind me a week before jan 1 to figure out nye plans',
  'on oct 10, remind me to buy conference tickets',
  'remind me to go to the store in a few hours',
  'remind me to bug drshocks about the pr after a couple hours',
];

describe('parser', () => {
  it('pass all the test cases', () => {
    testCases.forEach(testCase => {
      const result = parser.parse(testCase)
      console.log(result)
      expect(result).to.be.an('array').that.is.not.empty
    })
  })
})
