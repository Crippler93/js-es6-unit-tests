describe('Object literal properties may be computed values', () => {
  it('a computed property `x` needs to be surrounded by `[]`', () => {
    const propertyName = 'x';
    const obj = { [propertyName]: 1 };
    assert.equal(obj.x, 1);
  });
  it('can also get a function assigned', () => {
    const key = 'func';
    const obj = { [key]() { return 'seven' }};
    assert.equal(obj.func(), 'seven');
  });
  it('the key may also be the result of a function call', () => {
    const getName = () => 'propertyName';
    const obj = { [getName()]() { return 'seven' } };
    assert.equal(obj.propertyName(), 'seven');
  });
  it('the key can also be constructed by an expression', () => {
    const what = 'Key';
    const obj = { ['proper' + what]: null };
    assert('properKey' in obj);
  });
  it('accessor keys can be computed names too', () => {
    const obj = {
      get ['key']() { return 1 },

    };
    assert.equal(obj.key, 1);
  });
});
