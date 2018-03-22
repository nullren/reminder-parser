'use strict';

const expect = require('chai').expect
const parser = require('../index')

const testCases = [
  'remind me to go to the store tomorrow',
  'remind me to go to the store in 5 minutes',
  'in 5 minutes, remind me to go to the store'
];

describe('parser', () => {
  it('pass all the test cases', () => {
    const result = parser.parse(testCases[2])
    console.log(result)
  })
})
