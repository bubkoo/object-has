'use strict';

var expect = require('chai').expect;


describe('to-path', function () {

  var has = require('../../');

  it('common', function () {


    var object = { 'a': { 'b': 2 } };

    expect(has(object, 'a')).to.be.true;
    expect(has(object, ['a', 'b'])).to.be.true;
    expect(has(object, 'c')).to.be.false;
    expect(has(object)).to.be.false;
    expect(has()).to.be.false;

    expect(has({ a: 'abcde' }, 'a[1]')).to.be.true;
    expect(has({ a: 'abcde' }, 'a[1][0]')).to.be.true;
    expect(has({ a: 'abcde' }, 'a[1][2]')).to.be.false;

    expect(has({ a: ['abcde'] }, 'a[0][2]')).to.be.true;

    expect(has({ a: [] }, 'a[0]')).to.be.false;
    expect(has({ a: [[]] }, 'a[0]')).to.be.true;
    expect(has({ a: [null] }, 'a[1][0]')).to.be.false;


  });
});
