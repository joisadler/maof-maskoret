import calculateTotalDeductions from '../src/total-deductions';

const gross = 12856;
const creditPoints = 3.25;
const baseSalary = 9606;

test('Total deductions value must be correct', () => {
  expect(calculateTotalDeductions(gross, creditPoints, baseSalary)).toEqual(2513);
});
