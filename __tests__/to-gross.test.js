import toGross from '../src/to-gross';

const net = 250;

test('Gross value must be correct', () => {
  expect(toGross(net)).toEqual(368);
});
