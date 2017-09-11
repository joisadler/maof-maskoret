import calculateIncomeTax from '../src/income-tax';

const creditPoints = 3.25;
let baseSalary = 9606;
let gross = 0;

test('Income tax value must be correct', () => {
  gross = 12856;
  expect(calculateIncomeTax(gross, creditPoints, baseSalary)).toEqual(887);
  baseSalary = 6000;
  gross = 6200;
  expect(calculateIncomeTax(gross, creditPoints, baseSalary)).toEqual(-205);
  gross = 6221;
  expect(calculateIncomeTax(gross, creditPoints, baseSalary)).toEqual(-203);
});
