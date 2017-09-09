import calculateIncomeTax from '../src/income-tax';

const gross = 12856;
const creditPoints = 3.25;
const baseSalary = 9606;

test('Income tax value must be correct', () => {
  expect(calculateIncomeTax(gross, creditPoints, baseSalary)).toEqual(887);
});
