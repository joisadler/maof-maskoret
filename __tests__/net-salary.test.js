import calculateNetSalary from '../src/net-salary';

const gross = 12856;
const creditPoints = 3.25;
const baseSalary = 9606;

test('Net salary value must be correct', () => {
  expect(calculateNetSalary(gross, creditPoints, baseSalary)).toEqual(10343);
});
