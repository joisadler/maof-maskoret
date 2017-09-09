import calculateProvidentFund from '../src/provident-fund';

const baseSalary = 9606;

test('Provident fund value must be correct', () => {
  expect(calculateProvidentFund(baseSalary)).toEqual(576)
});
