import calculateHealthFee from '../src/health-fee';

let gross = 12856;

test('Health fee value must be correct', () => {
  expect(calculateHealthFee(gross)).toEqual(533);
  gross = 5804;
  expect(calculateHealthFee(gross)).toEqual(180);
});
