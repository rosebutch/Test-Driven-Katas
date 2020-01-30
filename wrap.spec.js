const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Doesnt mutate string if length less than max', () => {
    expect(wrap('fox', 6)).to.equal('fox');
  });
  it('wraps only on spaces', ()=> {
    expect(wrap('hello world', 9)).to.equal('hello\nworld')
  });
  it('wraps top to bottom', ()=> {
    expect(wrap('a a a', 3)).to.equal('a a\na')
  });
});
