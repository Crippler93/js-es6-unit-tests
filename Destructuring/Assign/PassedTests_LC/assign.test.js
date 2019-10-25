describe('Assign object property values to new variables while destructuring', () => {
  describe('for simple objects', function () {
    it('use a colon after the property name, like so `propertyName: newName`', () => {
      const { x: newName } = { x: 1 };
      assert.equal(newName, 1);
    });
    it('assign a new name and give it a default value using `= <default value>`', () => {
      const { x: y = 2 } = { x: 23 };
      assert.equal(y, 23);
    });
  });
  describe('for function parameter names', function () {
    it('do it the same way, with a colon behind it', () => {
      const fn = ({ x }) => {
        assert.equal(x, 1);
      };
      fn({ x: 1 });
    });
    it('giving it a default value is possible too, like above', () => {
      const fn = ({ x: z = 3 }) => {
        assert.equal(z, 3);
      };
      fn({x: 3});
    });
  });
});
