import { someMethod } from '../src/example';
import chai = require('chai');
let expect = chai.expect;

describe('Example test', () => {
  it('some method', () => {
    expect(someMethod()).to.be.true;
  });
});
